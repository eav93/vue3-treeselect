import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { ru } from '@/locales/ru'
import {
  Treeselect, cleanup, clickArrow, findOption, getInput, highlightedId, keyDown, leftClick, mountModel, mountTs, openMenu,
  settle, sleep, typeSearch, valueLabels, visibleOptionIds,
} from './helpers'

afterEach(cleanup)

const options = [{ id: 1, label: 'Apple' }, { id: 2, label: 'Banana' }]

const createRow = (): HTMLElement | null => document.querySelector('.vue-treeselect__create')
const createRowHighlighted = (): boolean => !!createRow()?.classList.contains('vue-treeselect__create--highlight')

/** Parent that adds the created option and selects it, as an app would */
function mountParent(props: Record<string, any> = {}) {
  const items = ref([...options])
  const value = ref<number[]>([])
  const created: string[] = []
  const w = mount(defineComponent({
    setup: () => () => h(Treeselect, {
      options: items.value,
      modelValue: value.value,
      multiple: true,
      creatable: true,
      ...props,
      'onUpdate:modelValue': (v: number[]) => { value.value = v },
      onCreate: (query: string) => {
        created.push(query)
        const id = items.value.length + 1
        items.value = [...items.value, { id, label: query }]
        value.value = [...value.value, id]
      },
    }),
  }), { attachTo: document.body })
  return { w: w.findComponent(Treeselect) as any, wrapper: w, created, value, items }
}

describe('creatable', () => {
  it('is off by default: no create row, Enter does nothing', async () => {
    const w = mountTs({ options })
    await openMenu(w)
    await typeSearch(w, 'Cherry')
    expect(createRow()).toBeNull()
    expect(document.querySelector('.vue-treeselect__no-results-tip')).not.toBeNull()
    await keyDown(w, 'Enter')
    expect(w.emitted('create')).toBeUndefined()
  })

  it('offers to create the query when no option has exactly that label', async () => {
    const w = mountTs({ options, creatable: true })
    await openMenu(w)
    expect(createRow()).toBeNull()

    // nothing found: create row instead of the no-results tip
    await typeSearch(w, '  Cherry ')
    expect(createRow()!.textContent!.trim()).toBe('Create "Cherry"')
    expect(document.querySelector('.vue-treeselect__no-results-tip')).toBeNull()

    // partial match: the row and the found options
    await typeSearch(w, 'app')
    expect(createRow()!.textContent!.trim()).toBe('Create "app"')
    expect(visibleOptionIds()).toEqual(['1'])

    // exact label, case-insensitive and trimmed: nothing to create
    await typeSearch(w, ' apple ')
    expect(createRow()).toBeNull()
  })

  it('click on the row: create with the trimmed query, search cleared, menu kept open', async () => {
    const { w, created, wrapper } = mountParent()
    await openMenu(w)
    await typeSearch(w, ' Cherry ')
    await leftClick(createRow()!)
    createRow()!.click()
    await settle()

    expect(created).toEqual(['Cherry'])
    expect(getInput(w).value).toBe('')
    expect(document.querySelector('.vue-treeselect__menu')).not.toBeNull()
    expect(valueLabels(w)).toEqual(['Cherry'])
    wrapper.unmount()
  })

  it('the created option is an option: no create row for it anymore', async () => {
    const { w, wrapper } = mountParent()
    await openMenu(w)
    await typeSearch(w, 'Cherry')
    await keyDown(w, 'Enter')
    await settle()
    await typeSearch(w, 'cherry')
    expect(createRow()).toBeNull()
    expect(visibleOptionIds()).toEqual(['3'])
    wrapper.unmount()
  })

  it('Enter creates when nothing is found, otherwise selects the highlighted option', async () => {
    const w = mountModel({ options, creatable: true, multiple: true, modelValue: [] })
    await openMenu(w)

    await typeSearch(w, 'Cherry')
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')![0][0]).toBe('Cherry')

    await typeSearch(w, 'ban')
    expect(highlightedId()).toBe('2')
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')).toHaveLength(1)
    expect(valueLabels(w)).toEqual(['Banana'])
  })

  it('Enter right after typing uses the whole query, not the debounced part', async () => {
    const w = mountTs({ options, creatable: true, searchDebounceDelay: 200 })
    await openMenu(w)
    const input = getInput(w)
    for (const text of ['C', 'Ch', 'Cherry']) {
      input.value = text
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')!.map(e => e[0])).toEqual(['Cherry'])

    // typed text that matches an option: selected, not created
    for (const text of ['B', 'Ban']) {
      input.value = text
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')).toHaveLength(1)
    expect(valueLabels(w)).toEqual(['Banana'])
  })

  it('keyboard: up from the first option and down from the last reach the create row', async () => {
    const { w, created, wrapper } = mountParent()
    await openMenu(w)
    await typeSearch(w, 'a') // Apple, Banana match, "a" can be created
    expect(highlightedId()).toBe('1')
    expect(createRowHighlighted()).toBe(false)

    await keyDown(w, 'ArrowUp')
    expect(createRowHighlighted()).toBe(true)
    expect(highlightedId()).toBeNull()
    await keyDown(w, 'ArrowDown')
    expect(createRowHighlighted()).toBe(false)
    expect(highlightedId()).toBe('1')

    await keyDown(w, 'ArrowDown')
    expect(highlightedId()).toBe('2')
    await keyDown(w, 'ArrowDown')
    expect(createRowHighlighted()).toBe(true)
    await keyDown(w, 'ArrowUp')
    expect(highlightedId()).toBe('2')

    await keyDown(w, 'ArrowDown')
    await keyDown(w, 'Enter')
    await settle()
    expect(created).toEqual(['a'])
    expect(valueLabels(w)).toEqual(['a'])
    wrapper.unmount()
  })

  it('hover highlights the row, hovering an option moves the highlight back', async () => {
    const w = mountTs({ options, creatable: true })
    await openMenu(w)
    await typeSearch(w, 'a')
    createRow()!.dispatchEvent(new MouseEvent('mouseenter'))
    await settle()
    expect(createRowHighlighted()).toBe(true)
    expect(highlightedId()).toBeNull()

    // options are highlighted by delegated `mouseover` on the list
    findOption(2)!.querySelector('.vue-treeselect__label')!.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    await settle()
    expect(highlightedId()).toBe('2')
    expect(createRowHighlighted()).toBe(false)
  })

  it('async: only after the search for the query succeeded, and only if the response lacks it', async () => {
    // longer than typeSearch waits, so that the requests are still pending right after typing
    const DELAY = 80
    let fail = false
    const w = mountTs({
      async: true,
      creatable: true,
      loadOptions({ action, searchQuery, callback }: any) {
        if (action !== 'ASYNC_SEARCH') return
        setTimeout(() => (fail ? callback(new Error('down')) : callback(null, searchQuery === 'Apple' ? [{ id: 1, label: 'Apple' }] : [])), DELAY)
      },
    })
    await openMenu(w)

    // nothing found: not while loading (Enter does nothing), creatable once loaded
    await typeSearch(w, 'Cherry')
    expect(createRow()).toBeNull()
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')).toBeUndefined()
    await sleep(DELAY + 20)
    await settle()
    expect(createRow()).not.toBeNull()

    // the response contains it: not creatable, neither while loading nor after
    await typeSearch(w, 'Apple')
    expect(createRow()).toBeNull()
    await sleep(DELAY + 20)
    await settle()
    expect(createRow()).toBeNull()

    // loading error: not creatable
    fail = true
    await typeSearch(w, 'Plum')
    await sleep(DELAY + 20)
    await settle()
    expect(document.querySelector('.vue-treeselect__error-tip')).not.toBeNull()
    expect(createRow()).toBeNull()
  })

  it('labels of lazily loaded children and of replaced options are known', async () => {
    const tree = [{ id: 'a', label: 'Fruits', children: null as any }]
    const w = mountTs({
      options: tree,
      creatable: true,
      loadOptions({ parentNode, callback }: any) {
        parentNode.children = [{ id: 'aa', label: 'Cherry' }]
        callback()
      },
    })
    await openMenu(w)
    await clickArrow('a')
    await settle()
    await typeSearch(w, 'cherry')
    expect(createRow()).toBeNull()

    await w.setProps({ options: [{ id: 'x', label: 'Plum' }] })
    await settle()
    await typeSearch(w, 'Cherry')
    expect(createRow()).not.toBeNull()
    await typeSearch(w, 'plum')
    expect(createRow()).toBeNull()
  })

  it('creatable turned on later indexes the existing options', async () => {
    const w = mountTs({ options })
    await w.setProps({ creatable: true })
    await openMenu(w)
    await typeSearch(w, 'banana')
    expect(createRow()).toBeNull()
    await typeSearch(w, 'Cherry')
    expect(createRow()).not.toBeNull()
  })

  it('without creatable, Enter right after typing selects from the whole typed text, not the debounced one', async () => {
    const w = mountModel({ options, searchDebounceDelay: 200, multiple: true, modelValue: [] })
    await openMenu(w)
    await typeSearch(w, 'x')
    await sleep(220)
    const input = getInput(w)
    input.value = 'Ban'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await keyDown(w, 'Enter')
    await settle()
    expect(valueLabels(w)).toEqual(['Banana'])
    expect(w.emitted('create')).toBeUndefined()
  })

  it('Enter with nothing pending selects at once, before a parent blurs the input on keydown', async () => {
    const value = ref<number[]>([])
    const w = mount(defineComponent({
      setup: () => () => h('div', { onKeydown: () => (document.activeElement as HTMLElement | null)?.blur() }, [
        h(Treeselect, { options, multiple: true, modelValue: value.value, 'onUpdate:modelValue': (v: number[]) => { value.value = v } }),
      ]),
    }), { attachTo: document.body })
    const ts = w.findComponent(Treeselect) as any
    await openMenu(ts)
    await typeSearch(ts, 'ban')
    getInput(ts).focus()
    await keyDown(ts, 'Enter')
    await settle()
    expect(value.value).toEqual([2])
    w.unmount()
  })

  it('without creatable, async: Enter while the new query loads does not select a stale option', async () => {
    const DELAY = 80
    const w = mountModel({
      async: true,
      multiple: true,
      modelValue: [],
      defaultOptions: [{ id: 1, label: 'Apple' }, { id: 2, label: 'Banana' }],
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') setTimeout(() => callback(null, [{ id: 2, label: 'Banana' }].filter(o => o.label.startsWith(searchQuery))), DELAY)
      },
    })
    await openMenu(w)
    expect(highlightedId()).toBe('1')
    await typeSearch(w, 'Ban')
    await keyDown(w, 'Enter')
    await settle()
    expect(valueLabels(w)).toEqual([])

    await sleep(DELAY + 20)
    await settle()
    await keyDown(w, 'Enter')
    await settle()
    expect(valueLabels(w)).toEqual(['Banana'])
  })

  it('async: Enter while the new query loads neither selects a stale option nor creates', async () => {
    const DELAY = 80
    const w = mountModel({
      async: true,
      creatable: true,
      multiple: true,
      modelValue: [],
      searchDebounceDelay: 200,
      defaultOptions: [{ id: 1, label: 'Apple' }, { id: 2, label: 'Banana' }],
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') setTimeout(() => callback(null, [{ id: 2, label: 'Banana' }].filter(o => o.label.startsWith(searchQuery))), DELAY)
      },
    })
    await openMenu(w)
    expect(highlightedId()).toBe('1')
    const input = getInput(w)
    for (const text of ['B', 'Ban']) {
      input.value = text
      input.dispatchEvent(new Event('input', { bubbles: true }))
    }
    await keyDown(w, 'Enter')
    await settle()
    expect(valueLabels(w)).toEqual([])
    expect(w.emitted('create')).toBeUndefined()
  })

  it('typing after highlighting the create row moves the highlight to the found option', async () => {
    const w = mountModel({ options, creatable: true, multiple: true, modelValue: [] })
    await openMenu(w)
    await typeSearch(w, 'a')
    await keyDown(w, 'ArrowUp')
    expect(createRowHighlighted()).toBe(true)

    await typeSearch(w, 'ap')
    expect(createRowHighlighted()).toBe(false)
    expect(highlightedId()).toBe('1')
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')).toBeUndefined()
    expect(valueLabels(w)).toEqual(['Apple'])
  })

  it('the create row as the only row: both arrows keep it highlighted, Enter creates', async () => {
    const w = mountTs({ options: [], creatable: true })
    await openMenu(w)
    await typeSearch(w, 'Cherry')
    await keyDown(w, 'ArrowDown')
    expect(createRowHighlighted()).toBe(true)
    await keyDown(w, 'ArrowDown')
    expect(createRowHighlighted()).toBe(true)
    await keyDown(w, 'ArrowUp')
    expect(createRowHighlighted()).toBe(true)
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('create')![0][0]).toBe('Cherry')
  })

  it('text from the locale and the createText prop', async () => {
    const w = mountTs({ options, creatable: true, locale: ru })
    await openMenu(w)
    await typeSearch(w, 'Вишня')
    expect(createRow()!.textContent!.trim()).toBe('Добавить «Вишня»')

    await w.setProps({ createText: (query: string) => `+ ${query}` })
    expect(createRow()!.textContent!.trim()).toBe('+ Вишня')
  })
})
