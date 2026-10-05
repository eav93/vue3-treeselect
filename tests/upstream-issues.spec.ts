/**
 * Bugs reported in riophae/vue-treeselect and the Vue 3 ports that also affected this fork.
 * The issue / PR numbers refer to riophae/vue-treeselect unless noted otherwise.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createSSRApp, defineComponent, h, KeepAlive, nextTick, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { mount } from '@vue/test-utils'
import {
  Treeselect,
  cleanup,
  clickArrow,
  clickOption,
  getInput,
  highlightedId,
  keyDown,
  lastModel,
  leftClick,
  mountModel,
  mountTs,
  openMenu,
  settle,
  typeSearch,
  valueLabels,
  visibleOptionIds,
} from './helpers'

afterEach(cleanup)

const fruits = () => [
  { id: 'fruits', label: 'Fruits', children: [{ id: 'apple', label: 'Apple' }, { id: 'banana', label: 'Banana' }] },
  { id: 'veg', label: 'Vegetables' },
]

describe('search', () => {
  it('re-runs the search when options change while searching (#556, #557)', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }] })
    await openMenu(w)
    await typeSearch(w, 'app')
    await w.setProps({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }, { id: 'c', label: 'application' }] })
    await settle()
    expect(visibleOptionIds()).toEqual(['a', 'c'])
    await w.setProps({ options: [{ id: 'a', label: 'zzz' }, { id: 'b', label: 'banana' }] })
    await settle()
    expect(visibleOptionIds()).toEqual([])
  })

  it('keeps a branch expanded during a search when its lazy children are loaded', async () => {
    const options = [
      { id: 'a', label: 'match', children: null },
      { id: 'b', label: 'other' },
    ]
    const w = mountTs({
      options,
      loadOptions: ({ parentNode, callback }: any) => {
        parentNode.children = [{ id: 'a1', label: 'child' }]
        callback()
      },
    })
    await openMenu(w)
    await typeSearch(w, 'match')
    await clickArrow('a')
    await settle()
    expect(visibleOptionIds()).toEqual(['a', 'a1'])
  })

  it('Enter after a search selects the first matched option, not its ancestor (#445, #178, #471)', async () => {
    const w = mountModel({ options: fruits(), modelValue: null })
    await openMenu(w)
    await typeSearch(w, 'apple')
    await keyDown(w, 'Enter')
    await settle()
    expect(lastModel(w)).toBe('apple')
  })

  it('collapsing and expanding a branch during a search keeps showing only the matches (#313, #354)', async () => {
    const w = mountTs({ options: fruits() })
    await openMenu(w)
    await typeSearch(w, 'apple')
    await clickArrow('fruits')
    await clickArrow('fruits')
    expect(visibleOptionIds()).toEqual(['fruits', 'apple'])
  })

  it('reopening highlights the selected option after selecting a search result (#197)', async () => {
    const w = mountModel({ options: fruits(), modelValue: null, defaultExpandLevel: 1 })
    await openMenu(w)
    await typeSearch(w, 'banana')
    await clickOption('banana')
    await settle()
    await openMenu(w)
    await settle()
    expect(highlightedId()).toBe('banana')
  })

  it('Home, End and arrows move the caret while the search input has text (ramp4-pcar4)', async () => {
    const w = mountTs({ options: fruits() })
    await openMenu(w)
    await typeSearch(w, 'ap')
    for (const key of ['Home', 'End', 'ArrowLeft', 'ArrowRight']) {
      const evt = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true })
      getInput(w).dispatchEvent(evt)
      expect(evt.defaultPrevented, key).toBe(false)
    }
  })
})

describe('selection', () => {
  it('clearOnSelect works in async search mode (#312, #435)', async () => {
    const w = mountModel({
      multiple: true,
      async: true,
      clearOnSelect: true,
      modelValue: [],
      loadOptions: async ({ searchQuery }: any) => [{ id: 'x' + searchQuery, label: 'x' + searchQuery }],
    })
    await openMenu(w)
    await typeSearch(w, 'ab')
    await settle()
    await clickOption('xab')
    await settle()
    expect((w.vm as any).trigger.searchQuery).toBe('')
  })

  it('flat mode: autoSelectAncestors and autoSelectDescendants work together (#260, #325)', async () => {
    const options = [{ id: 'a', label: 'a', children: [{ id: 'b', label: 'b', children: [{ id: 'c', label: 'c' }] }] }]
    const w = mountModel({
      multiple: true, flat: true, autoSelectAncestors: true, autoSelectDescendants: true,
      options, modelValue: [], defaultExpandLevel: Infinity,
    })
    await openMenu(w)
    await clickOption('b')
    await settle()
    expect([...lastModel(w)].sort()).toEqual(['a', 'b', 'c'])
    cleanup()

    const w2 = mountModel({
      multiple: true, flat: true, autoDeselectAncestors: true, autoDeselectDescendants: true,
      options, modelValue: ['a', 'b', 'c'], defaultExpandLevel: Infinity,
    })
    await openMenu(w2)
    await clickOption('b')
    await settle()
    expect(lastModel(w2)).toEqual([])
  })

  it('no duplicates when options are replaced by the children of a selected branch (#376)', async () => {
    const w = mountModel({
      multiple: true,
      options: [{ id: 'a', label: 'a', children: [{ id: 'a1', label: 'a1' }, { id: 'a2', label: 'a2' }] }],
      modelValue: ['a'],
    })
    await settle()
    await w.setProps({ options: [{ id: 'a1', label: 'a1' }, { id: 'a2', label: 'a2' }] })
    await settle()
    const value = lastModel(w) ?? (w.vm as any).getValue()
    expect(new Set(value).size).toBe(value.length)
  })

  it('Backspace and Delete do not clear a single value when clearable is false (#235)', async () => {
    const w = mountModel({ options: fruits(), modelValue: 'veg', clearable: false })
    await openMenu(w)
    await keyDown(w, 'Backspace')
    await keyDown(w, 'Delete')
    await settle()
    expect(valueLabels(w)).toEqual(['Vegetables'])
  })
})

describe('value', () => {
  it('a value missing from the options does not crash a normalizer (#550, #491)', () => {
    expect(() => mountTs({
      options: [{ key: 1, name: 'one', items: [] }],
      normalizer: (n: any) => ({ id: n.key, label: n.name.toUpperCase(), children: n.items.length ? n.items : undefined }),
      modelValue: 99,
    })).not.toThrow()
  })

  it('an empty string value shows the placeholder in single mode (#324, #173)', async () => {
    const w = mountTs({ options: fruits(), modelValue: '' })
    await settle()
    expect(valueLabels(w)).toEqual([])
  })

  it('an empty string is a valid id when an option has it', async () => {
    const w = mountTs({ options: [{ id: '', label: 'None' }, { id: 'a', label: 'A' }], modelValue: '' })
    await settle()
    expect(valueLabels(w)).toEqual(['None'])
  })

  it('in-place changes of a reactive modelValue array are applied', async () => {
    const value = reactive(['veg'])
    const w = mount(defineComponent({
      setup: () => () => h(Treeselect, { multiple: true, options: fruits(), modelValue: value }),
    }), { attachTo: document.body })
    value.push('apple')
    await settle()
    expect(w.findAll('.vue-treeselect__multi-value-item').map(i => i.text())).toEqual(['Vegetables', 'Apple'])
    w.unmount()
  })

  it('changing defaultOptions is applied while the search is empty (#535, #203)', async () => {
    const w = mountTs({
      async: true,
      defaultOptions: [{ id: 'a', label: 'A' }],
      loadOptions: () => {},
    })
    await openMenu(w)
    await settle()
    expect(visibleOptionIds()).toEqual(['a'])
    await w.setProps({ defaultOptions: [{ id: 'b', label: 'B' }] })
    await settle()
    expect(visibleOptionIds()).toEqual(['b'])
  })
})

describe('mouse & focus', () => {
  it('mousedown reaches the parent elements (#454)', async () => {
    const spy = vi.fn()
    const w = mount(defineComponent({
      setup: () => () => h('div', { onMousedown: spy }, [h(Treeselect, { options: fruits() })]),
    }), { attachTo: document.body })
    await leftClick(w.element.querySelector('.vue-treeselect__control')!)
    expect(spy).toHaveBeenCalled()
    w.unmount()
  })

  it('form controls in the before-list slot can be focused (#284, #516)', async () => {
    mountTs({ options: fruits(), alwaysOpen: true }, {
      slots: { 'before-list': () => h('input', { class: 'my-filter' }) },
    })
    await settle()
    const evt = new MouseEvent('mousedown', { button: 0, bubbles: true, cancelable: true })
    document.querySelector('.my-filter')!.dispatchEvent(evt)
    expect(evt.defaultPrevented).toBe(false)
  })

  it('clicking the control closes the menu when not searchable (#497)', async () => {
    const w = mountTs({ options: fruits(), searchable: false })
    const control = w.element.querySelector('.vue-treeselect__control')!
    await leftClick(control.querySelector('.vue-treeselect__value-container')!)
    expect((w.vm as any).menu.isOpen).toBe(true)
    await leftClick(control.querySelector('.vue-treeselect__value-container')!)
    expect((w.vm as any).menu.isOpen).toBe(false)
  })
})

describe('Vue 3 integration', () => {
  it('closes the menu when deactivated by <KeepAlive>', async () => {
    const show = ref(true)
    const Other = defineComponent({ render: () => h('div', 'other') })
    const w = mount(defineComponent({
      setup: () => () => h(KeepAlive, null, [show.value
        ? h(Treeselect, { key: 'ts', options: fruits(), appendToBody: true, ref: 'ts' })
        : h(Other, { key: 'other' })]),
    }), { attachTo: document.body })
    ;(w.vm.$refs.ts as any).openMenu()
    await settle()
    expect(document.querySelectorAll('.vue-treeselect__menu').length).toBe(1)
    show.value = false
    await settle()
    expect(document.querySelectorAll('.vue-treeselect__menu').length).toBe(0)
    w.unmount()
  })

  it('copies the text direction to the portal target with appendToBody (#495)', async () => {
    const w = mount(defineComponent({
      setup: () => () => h('div', { dir: 'rtl' }, [h(Treeselect, { options: fruits(), appendToBody: true })]),
    }), { attachTo: document.body })
    await settle()
    ;(w.findComponent(Treeselect).vm as any).openMenu()
    await settle()
    expect(document.querySelector('.vue-treeselect__portal-target')!.getAttribute('dir')).toBe('rtl')
    w.unmount()
  })

  it('hydrates server-rendered markup without mismatches (appendToBody)', async () => {
    const App = { render: () => h(Treeselect, { options: fruits(), appendToBody: true, modelValue: 'veg' }) }
    const html = await renderToString(createSSRApp(App))
    const container = document.createElement('div')
    container.innerHTML = html
    document.body.appendChild(container)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const app = createSSRApp(App)
    app.mount(container)
    expect(warn.mock.calls.map(c => String(c[0])).filter(m => /hydration/i.test(m))).toEqual([])
    app.unmount()
  })
})

describe('keyboard', () => {
  it('Enter does nothing when no option matches the search', async () => {
    const w = mountModel({ options: fruits(), modelValue: null })
    await openMenu(w)
    await typeSearch(w, 'zzz')
    await keyDown(w, 'Enter')
    await nextTick()
    expect(lastModel(w)).toBeUndefined()
  })
})
