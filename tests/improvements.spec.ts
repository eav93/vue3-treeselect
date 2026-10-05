import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, markRaw, reactive, shallowRef } from 'vue'
import { mount } from '@vue/test-utils'
import {
  Treeselect,
  cleanup,
  clickOption,
  findOption,
  getInput,
  keyDown,
  lastModel,
  mountModel,
  mountTs,
  nextTick,
  openMenu,
  settle,
  sleep,
  typeSearch,
} from './helpers'

afterEach(cleanup)

/** Random tree with `count` nodes */
function randomTree(count: number, seed: number) {
  let s = seed
  const rand = () => (s = (s * 16807) % 2147483647) / 2147483647
  let n = 0
  const make = (depth: number): any => {
    const id = `n${n++}`
    if (depth >= 3 || n >= count || rand() < 0.35) {
      return rand() < 0.1 ? { id, label: id, children: [] } : { id, label: id, isDisabled: rand() < 0.05 }
    }
    const children = []
    const size = 1 + Math.floor(rand() * 4)
    for (let i = 0; i < size && n < count; i++) children.push(make(depth + 1))
    return { id, label: id, children }
  }
  const options = []
  while (n < count) options.push(make(0))
  return { options, rand }
}

/** Checked states computed from scratch, like the original `buildForestState` */
function expectedCheckedStates(vm: any, flat: boolean) {
  const selected = new Set(vm.forest.selectedNodeIds.map(String))
  const states: Record<string, number> = {}
  vm.traverseAllNodesByIndex((node: any) => { states[node.id] = 0 })
  vm.forest.selectedNodeIds.forEach((id: any) => {
    const node = vm.getNode(id)
    states[id] = 2
    if (!flat) {
      node.ancestors.forEach((ancestor: any) => {
        if (!selected.has(String(ancestor.id))) states[ancestor.id] = 1
      })
    }
  })
  return states
}

describe('incremental selection state', () => {
  for (const flat of [false, true]) {
    it(`matches a full rebuild after random operations (flat=${flat})`, async () => {
      const { options, rand } = randomTree(150, flat ? 7 : 42)
      const ids: string[] = []
      const collect = (nodes: any[]) => nodes.forEach(n => { ids.push(n.id); if (n.children) collect(n.children) })
      collect(options)

      const w = mountModel({ options, multiple: true, flat, modelValue: [] })
      const vm = w.vm as any

      for (let step = 0; step < 200; step++) {
        const r = rand()
        if (r < 0.8) {
          vm.select(vm.getNode(ids[Math.floor(rand() * ids.length)]))
        } else if (r < 0.9) {
          const value = ids.filter(() => rand() < 0.1)
          await w.setProps({ modelValue: value })
        } else {
          vm.clear()
        }
        await nextTick()

        const expected = expectedCheckedStates(vm, flat)
        for (const id of ids) {
          expect(vm.forest.checkedStateMap[id], `step ${step}, node ${id}`).toBe(expected[id])
          expect(!!vm.forest.selectedNodeMap[id]).toBe(vm.forest.selectedNodeIds.includes(id))
        }
      }
    })
  }

  it('selecting a branch skips sub-branches with disabled descendants', async () => {
    const w = mountModel({
      multiple: true,
      valueConsistsOf: 'ALL',
      modelValue: [],
      options: [{
        id: 'a', label: 'a', children: [
          { id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa', isDisabled: true }, { id: 'aab', label: 'aab' }] },
          { id: 'ab', label: 'ab' },
        ],
      }],
    })
    ;(w.vm as any).select((w.vm as any).getNode('a'))
    await settle()
    expect([...lastModel(w)].sort()).toEqual(['aab', 'ab'])
  })
})

describe('virtualScroll', () => {
  const bigTree = () => Array.from({ length: 50 }, (_, i) => ({
    id: `r${i}`,
    label: `root ${i}`,
    children: Array.from({ length: 20 }, (_, j) => ({ id: `r${i}-${j}`, label: `child ${i}-${j}` })),
  }))

  it('renders only the rows around the visible area', async () => {
    const w = mountTs({ options: bigTree(), virtualScroll: true, optionHeight: 20, maxHeight: 200, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    const rendered = document.querySelectorAll('.vue-treeselect__option').length
    expect(rendered).toBeGreaterThan(0)
    expect(rendered).toBeLessThan(40)
    const list = document.querySelector('.vue-treeselect__list--virtual') as HTMLElement
    expect(list.style.height).toBe(`${50 * 21 * 20}px`)
  })

  it('renders other rows after scrolling', async () => {
    const w = mountTs({ options: bigTree(), virtualScroll: true, optionHeight: 20, maxHeight: 200, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    expect(findOption('r10')).toBeNull()
    const menu = document.querySelector('.vue-treeselect__menu') as HTMLElement
    menu.scrollTop = 10 * 21 * 20
    menu.dispatchEvent(new Event('scroll'))
    await settle()
    expect(findOption('r10')).not.toBeNull()
    expect(findOption('r0')).toBeNull()
  })

  it('selects options and keeps indentation classes', async () => {
    const w = mountModel({ options: bigTree(), virtualScroll: true, optionHeight: 20, multiple: true, modelValue: [], defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    await clickOption('r0-1')
    await settle()
    expect(lastModel(w)).toEqual(['r0-1'])
    expect(findOption('r0-1')!.closest('.vue-treeselect__list-item')!.className).toContain('vue-treeselect__indent-level-1')
  })

  it('collapses and searches', async () => {
    const w = mountTs({ options: bigTree(), virtualScroll: true, optionHeight: 20, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    ;(w.vm as any).toggleExpanded((w.vm as any).getNode('r0'))
    await settle()
    expect(findOption('r0-0')).toBeNull()
    expect(findOption('r1')).not.toBeNull()

    await typeSearch(w, 'child 7-3')
    await settle()
    expect(findOption('r7-3')).not.toBeNull()
    expect(findOption('r7')).not.toBeNull()
  })

  it('keyboard navigation scrolls to options that are not rendered', async () => {
    const w = mountTs({ options: bigTree(), virtualScroll: true, optionHeight: 20, maxHeight: 200, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    await keyDown(w, 'End')
    await settle()
    expect(findOption('r49-19')).not.toBeNull()
    expect(findOption('r49-19')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
  })

  it('keyboard navigation keeps the scroll position near the highlighted row', async () => {
    const w = mountTs({ options: bigTree(), virtualScroll: true, optionHeight: 20, maxHeight: 200, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    await keyDown(w, 'End')
    await settle()
    const menu = document.querySelector('.vue-treeselect__menu') as HTMLElement
    const bottom = menu.scrollTop
    expect(bottom).toBeGreaterThan(10000)
    await keyDown(w, 'ArrowUp')
    await keyDown(w, 'ArrowUp')
    await settle()
    expect(menu.scrollTop).toBeGreaterThan(bottom - 100)
    expect(findOption('r49-17')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
  })

  it('shows tips of expanded branches', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a', children: [] }], virtualScroll: true, defaultExpandLevel: 1 })
    await openMenu(w)
    await settle()
    expect(document.querySelector('.vue-treeselect__no-children-tip')).not.toBeNull()
  })
})

describe('flat option list', () => {
  const tree = () => [
    { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa' }] }, { id: 'ab', label: 'ab' }] },
    { id: 'b', label: 'b' },
  ]

  it('renders rows in tree order with indentation levels', async () => {
    const w = mountTs({ options: tree(), defaultExpandLevel: Infinity })
    await openMenu(w)
    const rows = [...document.querySelectorAll('.vue-treeselect__list-item')].map(el => [
      el.querySelector('.vue-treeselect__option')!.getAttribute('data-id'),
      el.className.match(/indent-level-(\d+)/)![1],
    ])
    expect(rows).toEqual([['a', '0'], ['aa', '1'], ['aaa', '2'], ['ab', '1'], ['b', '0']])
  })

  it('highlights the option under the pointer (delegated mouseover)', async () => {
    const w = mountTs({ options: tree(), defaultExpandLevel: Infinity })
    await openMenu(w)
    const label = findOption('ab')!.querySelector('.vue-treeselect__label')!
    label.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    await nextTick()
    expect(findOption('ab')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)

    // Keyboard moves the highlight; moving the pointer within the same option keeps it there
    await keyDown(w, 'ArrowDown')
    findOption('ab')!.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    await nextTick()
    expect(findOption('b')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
  })

  it('highlights an option again after the pointer passed over a tip', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a', children: [] }, { id: 'b', label: 'b' }], defaultExpandLevel: 1 })
    await openMenu(w)
    const over = (el: Element) => el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))
    over(findOption('b')!)
    await keyDown(w, 'ArrowDown')
    expect(findOption('a')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
    over(document.querySelector('.vue-treeselect__no-children-tip')!)
    over(findOption('b')!)
    await nextTick()
    expect(findOption('b')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
  })

  it('ignores non-left mouse buttons', async () => {
    const w = mountModel({ options: tree(), modelValue: null })
    await openMenu(w)
    findOption('b')!.querySelector('.vue-treeselect__label-container')!
      .dispatchEvent(new MouseEvent('mousedown', { button: 2, bubbles: true }))
    await settle()
    expect(lastModel(w)).toBeUndefined()
  })
})

describe('progressive rendering', () => {
  const wideTree = () => Array.from({ length: 30 }, (_, i) => ({
    id: `r${i}`,
    label: `root ${i}`,
    children: Array.from({ length: 99 }, (_, j) => ({ id: `r${i}-${j}`, label: `child ${i}-${j}` })),
  }))
  const rendered = () => document.querySelectorAll('.vue-treeselect__option').length
  const waitForAll = async (count: number) => {
    // happy-dom is slow at creating DOM: allow a few seconds
    for (let i = 0; i < 1000 && rendered() < count; i++) await sleep(10)
  }

  it('renders the first rows at once and the rest in chunks', { timeout: 30000 }, async () => {
    const w = mountTs({ options: wideTree(), defaultExpandLevel: 1 })
    await openMenu(w)
    expect(rendered()).toBeGreaterThan(0)
    expect(rendered()).toBeLessThan(3000)
    await waitForAll(3000)
    expect(rendered()).toBe(3000)
  })

  it('End renders and highlights the last option before the list is complete', async () => {
    const w = mountTs({ options: wideTree(), defaultExpandLevel: 1 })
    await openMenu(w)
    await keyDown(w, 'End')
    await settle()
    expect(findOption('r29-98')!.classList.contains('vue-treeselect__option--highlight')).toBe(true)
  })

  it('renders search results at once and restores all rows progressively after clearing', { timeout: 30000 }, async () => {
    const w = mountTs({ options: wideTree(), defaultExpandLevel: 1 })
    await openMenu(w)
    await waitForAll(3000)
    await typeSearch(w, 'child 7-5')
    expect(findOption('r7-5')).not.toBeNull()
    expect(rendered()).toBeLessThan(100)
    await typeSearch(w, '')
    await waitForAll(3000)
    expect(rendered()).toBe(3000)
  })

  it('selecting while the list is being rendered works', async () => {
    const w = mountModel({ options: wideTree(), defaultExpandLevel: 1, multiple: true, modelValue: [] })
    await openMenu(w)
    await clickOption('r0-1')
    await settle()
    expect(lastModel(w)).toEqual(['r0-1'])
  })
})

describe('input', () => {
  it('does not search while an IME composition is in progress', async () => {
    const w = mountTs({ options: [{ id: 'a', label: '中文' }, { id: 'b', label: 'other' }] })
    const onSearch = vi.fn()
    await w.setProps({ 'onSearch-change': onSearch })
    const input = getInput(w)
    input.dispatchEvent(new CompositionEvent('compositionstart'))
    input.value = 'zh'
    input.dispatchEvent(new Event('input'))
    await sleep(25)
    expect(onSearch).not.toHaveBeenCalled()
    input.value = '中'
    input.dispatchEvent(new CompositionEvent('compositionend'))
    await sleep(25)
    expect(onSearch).toHaveBeenCalledWith('中', expect.anything())
  })

  it('uses searchDebounceDelay', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a' }], searchDebounceDelay: 50 })
    const input = getInput(w)
    input.value = 'a'
    input.dispatchEvent(new Event('input'))
    await sleep(5)
    input.value = 'ab'
    input.dispatchEvent(new Event('input'))
    await sleep(15)
    expect((w.vm as any).trigger.searchQuery).toBe('a')
    await sleep(60)
    expect((w.vm as any).trigger.searchQuery).toBe('ab')
  })
})

describe('appendToBody (Teleport)', () => {
  it('slots inside the portaled menu keep the app context', async () => {
    const Global = defineComponent({ render: () => h('b', { class: 'global-component' }, 'G') })
    const Wrapper = defineComponent({
      components: { Treeselect },
      template: `<Treeselect :options="options" append-to-body>
        <template #option-label="{ node }"><GlobalThing />{{ node.label }}</template>
      </Treeselect>`,
      data: () => ({ options: [{ id: 'a', label: 'a' }] }),
    })
    const w = mount(Wrapper, { attachTo: document.body, global: { components: { GlobalThing: Global } } })
    ;(w.findComponent(Treeselect).vm as any).openMenu()
    await settle()
    expect(document.querySelector('.vue-treeselect__portal-target .global-component')).not.toBeNull()
    w.unmount()
  })
})

describe('options', () => {
  const lazyTree = () => [{ id: 'a', label: 'a', children: null }]
  const loadOptions = ({ action, parentNode, callback }: any) => {
    if (action === 'LOAD_CHILDREN_OPTIONS') {
      parentNode.children = [{ id: `${parentNode.id}-1`, label: 'child' }]
      callback()
    }
  }

  for (const [kind, wrap] of [
    ['plain array', (o: any) => o],
    ['markRaw array', (o: any) => markRaw(o)],
    ['shallowRef value', (o: any) => shallowRef(o).value],
    ['reactive array', (o: any) => reactive(o)],
  ] as const) {
    it(`loads children into ${kind} options`, async () => {
      const w = mountTs({ options: wrap(lazyTree()), loadOptions })
      await openMenu(w)
      ;(w.vm as any).toggleExpanded((w.vm as any).getNode('a'))
      await settle()
      expect(findOption('a-1')).not.toBeNull()
    })
  }

  it('does not re-initialize for inline matchKeys arrays with the same content', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a' }], matchKeys: ['label'] })
    const initialize = vi.spyOn(w.vm as any, 'initialize')
    const node = (w.vm as any).getNode('a')
    await w.setProps({ matchKeys: ['label'] })
    expect((w.vm as any).getNode('a')).toBe(node)
    expect(initialize).not.toHaveBeenCalled()
  })

  it('accepts string values for numeric ids (like the original)', async () => {
    const w = mountTs({ multiple: true, options: [{ id: 1, label: 'one' }], modelValue: ['1'] })
    await openMenu(w)
    expect((w.vm as any).isSelected((w.vm as any).getNode(1))).toBe(true)
  })
})

describe('instanceId', () => {
  it('uses the current instanceId prop for events', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'a' }], modelValue: null, instanceId: 'first' })
    await w.setProps({ instanceId: 'second' })
    await openMenu(w)
    await clickOption('a')
    await settle()
    const select = w.emitted('select') as any[][]
    expect(select[0][1]).toBe('second')
  })
})
