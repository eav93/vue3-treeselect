import { describe, it, expect, afterEach, vi } from 'vitest'
import {
  mountTs, mountModel, cleanup, root, openMenu, findOption, clickOption, settle, sleep,
  leftClick, lastModel, getInput, nextTick, typeSearch, visibleOptionIds,
} from './helpers'

afterEach(cleanup)

const isOpen = (w: any) => root(w).classList.contains('vue-treeselect--open')

// riophae Basic.spec.js > count
const countFixture = () => [
  {
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa' }, { id: 'aab', label: 'aab' }] },
      { id: 'ab', label: 'ab' },
    ],
  },
  { id: 'b', label: 'b' },
]
const countText = (id: string) => findOption(id)?.querySelector('.vue-treeselect__count')?.textContent?.trim()

describe('showCount / showCountOf', () => {
  it('no count when showCount=false', async () => {
    const w = mountTs({ options: countFixture() })
    await openMenu(w)
    expect(document.querySelector('.vue-treeselect__count')).toBeNull()
  })

  const cases: [string, string, string][] = [
    ['ALL_CHILDREN', '(2)', '(2)'],
    ['ALL_DESCENDANTS', '(4)', '(2)'],
    ['LEAF_CHILDREN', '(1)', '(2)'],
    ['LEAF_DESCENDANTS', '(3)', '(2)'],
  ]
  for (const [showCountOf, aCount, aaCount] of cases) {
    it(`showCountOf=${showCountOf}`, async () => {
      const w = mountTs({ options: countFixture(), showCount: true, showCountOf, defaultExpandLevel: Infinity })
      await openMenu(w)
      expect(countText('a')).toBe(aCount)
      expect(countText('aa')).toBe(aaCount)
      expect(countText('b')).toBeUndefined()
      expect(countText('ab')).toBeUndefined()
    })
  }

  it('default showCountOf is ALL_CHILDREN', async () => {
    const w = mountTs({ options: countFixture(), showCount: true })
    await openMenu(w)
    expect(countText('a')).toBe('(2)')
  })
})

describe('expansion', () => {
  it('defaultExpandLevel=0 renders only roots', async () => {
    const w = mountTs({ options: countFixture() })
    await openMenu(w)
    expect(visibleOptionIds()).toEqual(['a', 'b'])
  })

  it('defaultExpandLevel=1 expands roots only', async () => {
    const w = mountTs({ options: countFixture(), defaultExpandLevel: 1 })
    await openMenu(w)
    expect(visibleOptionIds()).toEqual(['a', 'aa', 'ab', 'b'])
  })

  it('defaultExpandLevel=Infinity expands everything', async () => {
    const w = mountTs({ options: countFixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    expect(visibleOptionIds()).toEqual(['a', 'aa', 'aaa', 'aab', 'ab', 'b'])
  })

  it('isDefaultExpanded on a nested node expands its ancestors', async () => {
    const w = mountTs({
      options: [
        { id: 'a', label: 'a', isDefaultExpanded: true, children: [] },
        { id: 'b', label: 'b', isDefaultExpanded: false, children: [] },
        { id: 'c', label: 'c', children: [{ id: 'ca', label: 'ca', isDefaultExpanded: true, children: [{ id: 'caa', label: 'caa' }] }] },
      ],
    })
    expect(w.vm.getNode('a').isExpanded).toBe(true)
    expect(w.vm.getNode('b').isExpanded).toBe(false)
    expect(w.vm.getNode('ca').isExpanded).toBe(true)
    expect(w.vm.getNode('c').isExpanded).toBe(true)
    await openMenu(w)
    expect(findOption('ca')).not.toBeNull()
    expect(findOption('caa')).not.toBeNull()
  })

  it('isDefaultExpanded combined with defaultExpandLevel', () => {
    const w = mountTs({
      defaultExpandLevel: 1,
      options: [
        { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa', children: [] }] },
        { id: 'b', label: 'b', isDefaultExpanded: false, children: [{ id: 'bb', label: 'bb', isDefaultExpanded: true, children: [] }] },
      ],
    })
    expect(w.vm.getNode('a').isExpanded).toBe(true)
    expect(w.vm.getNode('aa').isExpanded).toBe(false)
    expect(w.vm.getNode('b').isExpanded).toBe(true)
    expect(w.vm.getNode('bb').isExpanded).toBe(true)
  })

  it('leaf options get an arrow placeholder when any branch exists', async () => {
    const w = mountTs({ options: countFixture() })
    await openMenu(w)
    expect(findOption('b')!.querySelector('.vue-treeselect__option-arrow-placeholder')).not.toBeNull()
    expect(findOption('a')!.querySelector('.vue-treeselect__option-arrow-placeholder')).toBeNull()
  })

  it('no arrow placeholder when there are no branch nodes', async () => {
    const w = mountTs({ options: [{ id: 'x', label: 'x' }, { id: 'y', label: 'y' }] })
    await openMenu(w)
    expect(document.querySelector('.vue-treeselect__option-arrow-placeholder')).toBeNull()
  })
})

describe('focus', () => {
  it('autoFocus focuses the input on mount', async () => {
    const w = mountTs({ options: countFixture(), autoFocus: true })
    await nextTick()
    expect(document.activeElement).toBe(getInput(w))
    expect(root(w).classList.contains('vue-treeselect--focused')).toBe(true)
  })

  it('autoFocus + openOnFocus opens the menu on mount', async () => {
    const w = mountTs({ options: countFixture(), autoFocus: true, openOnFocus: true })
    await nextTick()
    expect(isOpen(w)).toBe(true)
  })

  it('clicking the control focuses the input, adds --focused and opens the menu', async () => {
    const w = mountTs({ options: countFixture() })
    await leftClick(root(w).querySelector('.vue-treeselect__value-container')!)
    await nextTick()
    expect(document.activeElement).toBe(getInput(w))
    expect(root(w).classList.contains('vue-treeselect--focused')).toBe(true)
    expect(isOpen(w)).toBe(true)
  })

  it('openOnClick=false: click focuses but does not open; second click opens', async () => {
    const w = mountTs({ options: countFixture(), openOnClick: false })
    const vc = root(w).querySelector('.vue-treeselect__value-container')!
    await leftClick(vc)
    await nextTick()
    expect(root(w).classList.contains('vue-treeselect--focused')).toBe(true)
    expect(isOpen(w)).toBe(false)
    await leftClick(vc)
    expect(isOpen(w)).toBe(true)
  })

  it('focusInput() / blurInput() toggle --focused', async () => {
    const w = mountTs({ options: countFixture() })
    w.vm.focusInput()
    await nextTick()
    expect(document.activeElement).toBe(getInput(w))
    expect(root(w).classList.contains('vue-treeselect--focused')).toBe(true)
    w.vm.blurInput()
    await nextTick()
    expect(root(w).classList.contains('vue-treeselect--focused')).toBe(false)
  })

  it('openOnFocus=true opens the menu when the input is focused', async () => {
    const w = mountTs({ options: countFixture(), openOnFocus: true })
    w.vm.focusInput()
    await nextTick()
    expect(isOpen(w)).toBe(true)
  })

  it('mousedown outside closes the menu', async () => {
    const w = mountTs({ options: countFixture() })
    await openMenu(w)
    const outside = document.createElement('div')
    document.body.appendChild(outside)
    await leftClick(outside)
    expect(isOpen(w)).toBe(false)
  })
})

describe('appendToBody', () => {
  it('renders the menu into document.body inside a portal target', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }], appendToBody: true })
    await openMenu(w)
    await settle()
    const target = document.querySelector('.vue-treeselect__portal-target') as HTMLElement
    expect(target).not.toBeNull()
    expect(root(w).contains(target)).toBe(false)
    expect(target.querySelector('.vue-treeselect__menu')).not.toBeNull()
    expect(root(w).querySelector('.vue-treeselect__menu')).toBeNull()
  })

  it('clicking a portaled option selects it and does not close the menu (multiple)', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }], appendToBody: true, multiple: true, modelValue: [] })
    await openMenu(w)
    await settle()
    await clickOption('a')
    await settle()
    expect(lastModel(w)).toEqual(['a'])
    expect(isOpen(w)).toBe(true)
    expect(document.querySelector('.vue-treeselect__portal-target .vue-treeselect__menu')).not.toBeNull()
  })

  it('clicking a portaled option selects it (single)', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }], appendToBody: true, modelValue: null })
    await openMenu(w)
    await settle()
    await clickOption('b')
    await settle()
    expect(lastModel(w)).toBe('b')
  })

  it('portal target is removed on unmount', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a' }], appendToBody: true })
    await openMenu(w)
    await settle()
    expect(document.querySelector('.vue-treeselect__portal-target')).not.toBeNull()
    w.unmount()
    await settle()
    expect(document.querySelector('.vue-treeselect__portal-target')).toBeNull()
  })
})

describe('emits', () => {
  const opts = () => [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }]

  it('select / deselect / update:modelValue carry instanceId', async () => {
    const w = mountModel({ options: opts(), multiple: true, modelValue: [], instanceId: 'my-id' })
    await openMenu(w)
    await clickOption('a')
    await settle()
    expect(w.emitted('select')![0]).toEqual([{ id: 'a', label: 'a' }, 'my-id'])
    expect(w.emitted('update:modelValue')!.at(-1)).toEqual([['a'], 'my-id'])
    await clickOption('a')
    await settle()
    expect(w.emitted('deselect')![0]).toEqual([{ id: 'a', label: 'a' }, 'my-id'])
    expect(w.emitted('update:modelValue')!.at(-1)).toEqual([[], 'my-id'])
  })

  it('open / close carry instanceId (close also carries value)', async () => {
    const w = mountTs({ options: opts(), modelValue: 'a', instanceId: 'iid' })
    await openMenu(w)
    expect(w.emitted('open')![0]).toEqual(['iid'])
    w.vm.closeMenu()
    await nextTick()
    expect(w.emitted('close')![0]).toEqual(['a', 'iid'])
  })

  it('search-change emits query and instanceId', async () => {
    const w = mountTs({ options: opts(), instanceId: 7 })
    await openMenu(w)
    await typeSearch(w, 'b')
    expect(w.emitted('search-change')!.at(-1)).toEqual(['b', 7])
  })

  it('default instanceId is stable across emits', async () => {
    const w = mountModel({ options: opts(), multiple: true, modelValue: [] })
    await openMenu(w)
    await clickOption('a')
    await settle()
    const ids = [w.emitted('open')![0][0], w.emitted('select')![0][1], w.emitted('update:modelValue')!.at(-1)![1]]
    expect(new Set(ids).size).toBe(1)
    expect(ids[0]).toBeTruthy()
  })

  it('does not emit select for a disabled option', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'a', isDisabled: true }] })
    await openMenu(w)
    await clickOption('a')
    await settle()
    expect(w.emitted('select')).toBeUndefined()
  })
})

describe('hidden fields', () => {
  const hidden = (w: any) => Array.from(root(w).querySelectorAll('input[type="hidden"]')) as HTMLInputElement[]

  it('requires both name and value', async () => {
    const w = mountTs({ options: [], modelValue: 'value' })
    expect(hidden(w).length).toBe(0)
    await w.setProps({ modelValue: null, name: 'test' })
    expect(hidden(w).length).toBe(0)
    await w.setProps({ modelValue: 'value', name: 'test' })
    expect(hidden(w).length).toBe(1)
  })

  it('single', () => {
    const w = mountTs({ options: [], name: 'single', modelValue: 'value' })
    expect(hidden(w).map(i => [i.name, i.value])).toEqual([['single', 'value']])
  })

  it('multiple: one field per value', () => {
    const w = mountTs({ options: [], name: 'm', multiple: true, modelValue: [1, 2, 3] })
    expect(hidden(w).map(i => [i.name, i.value])).toEqual([['m', '1'], ['m', '2'], ['m', '3']])
  })

  it('joinValues with default delimiter', () => {
    const w = mountTs({ options: [], name: 'j', multiple: true, modelValue: ['a', 'b', 'c'], joinValues: true })
    expect(hidden(w).map(i => i.value)).toEqual(['a,b,c'])
  })

  it('joinValues with custom delimiter', () => {
    const w = mountTs({ options: [], name: 'd', multiple: true, modelValue: [1, 2, 3], joinValues: true, delimiter: ';' })
    expect(hidden(w).map(i => i.value)).toEqual(['1;2;3'])
  })

  it('no hidden fields when disabled', () => {
    const w = mountTs({ options: [], name: 'x', modelValue: 'v', disabled: true })
    expect(hidden(w).length).toBe(0)
  })
})

describe('clearable', () => {
  const opts = () => [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }]
  const x = (w: any) => root(w).querySelector('.vue-treeselect__x-container') as HTMLElement | null

  it('shows X when there is a value; clicking clears', async () => {
    const w = mountModel({ options: opts(), multiple: true, modelValue: ['a', 'b'] })
    expect(x(w)).not.toBeNull()
    expect(x(w)!.getAttribute('title')).toBe('Clear all')
    await leftClick(x(w)!)
    await sleep(5)
    await settle()
    expect(lastModel(w)).toEqual([])
    expect(x(w)).toBeNull()
  })

  it('single mode title is clearValueText and clearing removes the value', async () => {
    const w = mountModel({ options: opts(), modelValue: 'a' })
    expect(x(w)!.getAttribute('title')).toBe('Clear value')
    await leftClick(x(w)!)
    await sleep(5)
    await settle()
    expect(lastModel(w) == null).toBe(true)
  })

  it('hidden with no value, when disabled, or clearable=false', () => {
    expect(x(mountTs({ options: opts(), modelValue: null }))).toBeNull()
    expect(x(mountTs({ options: opts(), modelValue: 'a', disabled: true }))).toBeNull()
    expect(x(mountTs({ options: opts(), modelValue: 'a', clearable: false }))).toBeNull()
  })

  it('beforeClearAll returning false prevents clearing', async () => {
    const w = mountModel({ options: opts(), modelValue: 'a', beforeClearAll: () => false })
    await leftClick(x(w)!)
    await sleep(5)
    await settle()
    expect(w.emitted('update:modelValue')).toBeUndefined()
  })

  it('beforeClearAll may return a promise', async () => {
    const w = mountModel({ options: opts(), modelValue: 'a', beforeClearAll: () => Promise.resolve(true) })
    await leftClick(x(w)!)
    await sleep(5)
    await settle()
    expect(lastModel(w) == null).toBe(true)
  })
})

describe('unmount cleanup', () => {
  it('removes every document listener it added and throws no errors after unmount', async () => {
    const added: [string, any][] = []
    const removed: [string, any][] = []
    const origAdd = document.addEventListener.bind(document)
    const origRemove = document.removeEventListener.bind(document)
    const addSpy = vi.spyOn(document, 'addEventListener').mockImplementation((t: any, l: any, o?: any) => { added.push([t, l]); origAdd(t, l, o) })
    const removeSpy = vi.spyOn(document, 'removeEventListener').mockImplementation((t: any, l: any, o?: any) => { removed.push([t, l]); origRemove(t, l, o) })
    const errSpy = vi.spyOn(console, 'error')
    const warnSpy = vi.spyOn(console, 'warn')

    const w = mountTs({ options: [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }], async: false })
    await openMenu(w)
    await typeSearch(w, 'a')
    w.unmount()
    await sleep(30)
    await settle()

    const leaked = added.filter(([t, l]) => !removed.some(([rt, rl]) => rt === t && rl === l))
    expect(leaked).toEqual([])
    // dispatching document events after unmount must not throw / log
    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }))
    expect(errSpy).not.toHaveBeenCalled()
    expect(warnSpy).not.toHaveBeenCalled()
    addSpy.mockRestore(); removeSpy.mockRestore()
  })

  it('unmounting while menu is open with appendToBody leaves no listeners', async () => {
    const added: [string, any][] = []
    const removed: [string, any][] = []
    const origAdd = document.addEventListener.bind(document)
    const origRemove = document.removeEventListener.bind(document)
    vi.spyOn(document, 'addEventListener').mockImplementation((t: any, l: any, o?: any) => { added.push([t, l]); origAdd(t, l, o) })
    vi.spyOn(document, 'removeEventListener').mockImplementation((t: any, l: any, o?: any) => { removed.push([t, l]); origRemove(t, l, o) })
    const w = mountTs({ options: [{ id: 'a', label: 'a' }], appendToBody: true })
    await openMenu(w)
    await settle()
    w.unmount()
    await settle()
    const leaked = added.filter(([t, l]) => !removed.some(([rt, rl]) => rt === t && rl === l))
    expect(leaked).toEqual([])
  })

  it('pending async search callback after unmount does not throw', async () => {
    const errSpy = vi.spyOn(console, 'error')
    let cb: any
    const w = mountTs({
      async: true,
      loadOptions({ callback }: any) { cb = callback },
    })
    await openMenu(w)
    await typeSearch(w, 'x')
    w.unmount()
    expect(() => cb?.(null, [{ id: 'x', label: 'x' }])).not.toThrow()
    await settle()
    expect(errSpy).not.toHaveBeenCalled()
  })
})

describe('id 0 handling', () => {
  it('multiple: clicking the multi-value item for id 0 removes it', async () => {
    const w = mountModel({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], multiple: true, modelValue: [0, 1] })
    const items = root(w).querySelectorAll('.vue-treeselect__multi-value-item')
    expect(items.length).toBe(2)
    await leftClick(items[0])
    await settle()
    expect(lastModel(w)).toEqual([1])
  })

  it('option with id 0 shows as selected', async () => {
    const w = mountTs({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], modelValue: 0 })
    await openMenu(w)
    expect(findOption(0)!.classList.contains('vue-treeselect__option--selected')).toBe(true)
  })
})
