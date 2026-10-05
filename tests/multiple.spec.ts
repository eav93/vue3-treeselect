import { describe, it, expect, afterEach } from 'vitest'
import {
  mountTs, mountModel, cleanup, root, openMenu, clickOption, findOption, checkboxState,
  lastModel, valueLabels, settle, leftClick,
} from './helpers'

afterEach(cleanup)

// Same fixture as riophae/vue-treeselect Props.spec.js > valueConsistsOf > get internalValue
const fixture = () => [
  {
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa' }, { id: 'aab', label: 'aab' }] },
      { id: 'ab', label: 'ab', children: [{ id: 'aba', label: 'aba' }, { id: 'abb', label: 'abb' }] },
      { id: 'ac', label: 'ac' },
    ],
  },
  { id: 'b', label: 'b', children: [] },
]

async function selectVia(w: any, id: string) {
  w.vm.select(w.vm.getNode(id))
  await settle()
}

describe('multiple: selection basics', () => {
  it('clicking options adds them to value and keeps the menu open', async () => {
    const w = mountModel({ multiple: true, modelValue: [], options: fixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    await clickOption('ac')
    await settle()
    expect(lastModel(w)).toEqual(['ac'])
    await clickOption('aaa')
    await settle()
    expect(lastModel(w)).toEqual(['ac', 'aaa'])
    expect(valueLabels(w)).toEqual(['ac', 'aaa'])
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(true)
    // click again deselects
    await clickOption('ac')
    await settle()
    expect(lastModel(w)).toEqual(['aaa'])
  })

  it('renders checkboxes for each option in multiple mode', async () => {
    const w = mountTs({ multiple: true, modelValue: [], options: fixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    for (const id of ['a', 'aa', 'aaa', 'ab', 'ac', 'b']) {
      expect(findOption(id)!.querySelector('.vue-treeselect__checkbox'), id).not.toBeNull()
    }
  })

  it('does not render checkboxes in single mode', async () => {
    const w = mountTs({ modelValue: null, options: fixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    expect(document.querySelector('.vue-treeselect__checkbox')).toBeNull()
  })

  it('checkbox states reflect checked / indeterminate / unchecked', async () => {
    const w = mountTs({ multiple: true, modelValue: ['aa'], options: fixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    expect(checkboxState('a')).toBe('indeterminate')
    expect(checkboxState('aa')).toBe('checked')
    expect(checkboxState('aaa')).toBe('checked')
    expect(checkboxState('aab')).toBe('checked')
    expect(checkboxState('ab')).toBe('unchecked')
    expect(checkboxState('aba')).toBe('unchecked')
    expect(checkboxState('ac')).toBe('unchecked')
    expect(checkboxState('b')).toBe('unchecked')
  })

  it('checkbox states update after clicking an option', async () => {
    const w = mountModel({ multiple: true, modelValue: [], options: fixture(), defaultExpandLevel: Infinity })
    await openMenu(w)
    await clickOption('aaa')
    await settle()
    expect(checkboxState('aaa')).toBe('checked')
    expect(checkboxState('aa')).toBe('indeterminate')
    expect(checkboxState('a')).toBe('indeterminate')
    await clickOption('aab')
    await settle()
    expect(checkboxState('aa')).toBe('checked')
    expect(lastModel(w)).toEqual(['aa'])
  })

  it('selected multi-value items are rendered and removable by clicking', async () => {
    const w = mountModel({ multiple: true, modelValue: ['ac', 'b'], options: fixture() })
    const items = root(w).querySelectorAll('.vue-treeselect__multi-value-item')
    expect(items.length).toBe(2)
    await leftClick(items[0])
    await settle()
    expect(lastModel(w)).toEqual(['b'])
  })
})

describe('valueConsistsOf (selecting via select())', () => {
  it('ALL', async () => {
    // like riophae: value set with default BRANCH_PRIORITY, then valueConsistsOf switched (no v-model feedback)
    const w = mountTs({ multiple: true, options: fixture(), modelValue: ['aa'] })
    await w.setProps({ valueConsistsOf: 'ALL' })
    await settle()
    expect(w.vm.getValue()).toEqual(['aa', 'aaa', 'aab'])
    await selectVia(w, 'ab')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb'])
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b'])
    await selectVia(w, 'ac')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b', 'ac', 'a'])
  })

  it('BRANCH_PRIORITY', async () => {
    // like riophae: value set with default BRANCH_PRIORITY, then valueConsistsOf switched (no v-model feedback)
    const w = mountTs({ multiple: true, options: fixture(), modelValue: ['aa'] })
    await w.setProps({ valueConsistsOf: 'BRANCH_PRIORITY' })
    await settle()
    expect(w.vm.getValue()).toEqual(['aa'])
    await selectVia(w, 'ab')
    expect(lastModel(w)).toEqual(['aa', 'ab'])
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['aa', 'ab', 'b'])
    await selectVia(w, 'ac')
    expect(lastModel(w)).toEqual(['b', 'a'])
  })

  it('LEAF_PRIORITY', async () => {
    // like riophae: value set with default BRANCH_PRIORITY, then valueConsistsOf switched (no v-model feedback)
    const w = mountTs({ multiple: true, options: fixture(), modelValue: ['aa'] })
    await w.setProps({ valueConsistsOf: 'LEAF_PRIORITY' })
    await settle()
    expect(w.vm.getValue()).toEqual(['aaa', 'aab'])
    await selectVia(w, 'ab')
    expect(lastModel(w)).toEqual(['aaa', 'aab', 'aba', 'abb'])
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['aaa', 'aab', 'aba', 'abb', 'b'])
    await selectVia(w, 'ac')
    expect(lastModel(w)).toEqual(['aaa', 'aab', 'aba', 'abb', 'b', 'ac'])
  })

  it('ALL_WITH_INDETERMINATE', async () => {
    // like riophae: value set with default BRANCH_PRIORITY, then valueConsistsOf switched (no v-model feedback)
    const w = mountTs({ multiple: true, options: fixture(), modelValue: ['aa'] })
    await w.setProps({ valueConsistsOf: 'ALL_WITH_INDETERMINATE' })
    await settle()
    expect(w.vm.getValue()).toEqual(['aa', 'aaa', 'aab', 'a'])
    await selectVia(w, 'ab')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'a'])
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b', 'a'])
    await selectVia(w, 'ac')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b', 'ac', 'a'])
  })

  it('deselecting a child of a fully-checked branch (BRANCH_PRIORITY)', async () => {
    const w = mountModel({ multiple: true, options: fixture(), modelValue: ['a'] })
    await selectVia(w, 'ac')
    expect(lastModel(w)).toEqual(['aa', 'ab'])
  })

  it('setting value [aaa] marks ancestors indeterminate in the rendered checkboxes', async () => {
    const w = mountTs({ multiple: true, options: fixture(), modelValue: [], defaultExpandLevel: Infinity })
    await w.setProps({ modelValue: ['aaa'] })
    await openMenu(w)
    expect(checkboxState('aaa')).toBe('checked')
    expect(checkboxState('aa')).toBe('indeterminate')
    expect(checkboxState('a')).toBe('indeterminate')
    expect(checkboxState('ab')).toBe('unchecked')
  })
})

describe('limit / limitText', () => {
  const opts = () => [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }, { id: 'c', label: 'c' }, { id: 'd', label: 'd' }]

  it('limit=Infinity shows all', () => {
    const w = mountTs({ multiple: true, options: opts(), modelValue: ['a', 'b', 'c'] })
    expect(root(w).querySelectorAll('.vue-treeselect__multi-value-item').length).toBe(3)
  })

  it('limit=1 shows one item and default limit text', () => {
    const w = mountTs({ multiple: true, options: opts(), modelValue: ['a', 'b', 'c'], limit: 1 })
    expect(root(w).querySelectorAll('.vue-treeselect__multi-value-item').length).toBe(1)
    expect(root(w).textContent).toContain('and 2 more')
  })

  it('custom limitText', () => {
    const w = mountTs({ multiple: true, options: opts(), modelValue: ['a', 'b', 'c', 'd'], limit: 2, limitText: (n: number) => `+${n}!` })
    expect(root(w).querySelectorAll('.vue-treeselect__multi-value-item').length).toBe(2)
    expect(root(w).textContent).toContain('+2!')
  })
})

describe('sortValueBy', () => {
  // fixture from original Props.spec.js > sortValueBy
  const opts = () => [
    { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
    { id: 'b', label: 'b' },
    { id: 'c', label: 'c' },
  ]

  it('ORDER_SELECTED', async () => {
    const w = mountModel({ multiple: true, flat: true, options: opts(), modelValue: ['c', 'aa'], sortValueBy: 'ORDER_SELECTED' })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['c', 'aa', 'a'])
  })

  it('LEVEL', async () => {
    const w = mountModel({ multiple: true, flat: true, options: opts(), modelValue: ['c', 'aa'], sortValueBy: 'LEVEL' })
    await selectVia(w, 'a')
    // same level -> tie broken by index (riophae sortValueByLevel)
    expect(lastModel(w)).toEqual(['a', 'c', 'aa'])
  })

  it('INDEX', async () => {
    const w = mountModel({ multiple: true, flat: true, options: opts(), modelValue: ['c', 'aa'], sortValueBy: 'INDEX' })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['a', 'aa', 'c'])
  })
})
