import { describe, it, expect, afterEach } from 'vitest'
import {
  mountTs, mountModel, cleanup, openMenu, clickOption, findOption, checkboxState,
  lastModel, settle, root,
} from './helpers'

afterEach(cleanup)

async function selectVia(w: any, id: string) {
  w.vm.select(w.vm.getNode(id))
  await settle()
}

// fixture from riophae Props.spec.js > auto(De)SelectX
const flatFixture = () => [
  {
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa' }, { id: 'aab', label: 'aab' }] },
      { id: 'ab', label: 'ab' },
    ],
  },
  {
    id: 'b', label: 'b', children: [
      { id: 'ba', label: 'ba', isDisabled: true, children: [{ id: 'baa', label: 'baa' }] },
    ],
  },
  { id: 'c', label: 'c' },
]

describe('flat mode', () => {
  it('selecting a branch selects only that node', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), modelValue: [], defaultExpandLevel: Infinity })
    await openMenu(w)
    await clickOption('a')
    await settle()
    expect(lastModel(w)).toEqual(['a'])
  })

  it('flat mode checkboxes: only the selected branch is checked', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), modelValue: ['a'], defaultExpandLevel: Infinity })
    await openMenu(w)
    expect(checkboxState('a')).toBe('checked')
    expect(checkboxState('aa')).toBe('unchecked')
    expect(checkboxState('aaa')).toBe('unchecked')
  })

  it('in flat mode, children of a disabled node are not disabled', () => {
    const w = mountTs({ multiple: true, flat: true, options: flatFixture() })
    expect(w.vm.getNode('ba').isDisabled).toBe(true)
    expect(w.vm.getNode('baa').isDisabled).toBe(false)
  })

  it('autoSelectAncestors', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoSelectAncestors: true, modelValue: ['aa'] })
    await selectVia(w, 'aaa')
    expect(lastModel(w)).toEqual(['aa', 'aaa', 'a'])
  })

  it('autoSelectAncestors + disabled nodes', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoSelectAncestors: true, modelValue: [] })
    await selectVia(w, 'baa')
    expect(lastModel(w)).toEqual(['baa', 'b'])
  })

  it('autoSelectDescendants', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoSelectDescendants: true, modelValue: ['aa'] })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['aa', 'a', 'ab', 'aaa', 'aab'])
  })

  it('autoSelectDescendants + disabled nodes', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoSelectDescendants: true, modelValue: [] })
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['b', 'baa'])
  })

  it('autoDeselectAncestors', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoDeselectAncestors: true, modelValue: ['aa', 'aaa', 'aab'] })
    await selectVia(w, 'aaa')
    expect(lastModel(w)).toEqual(['aab'])
  })

  it('autoDeselectAncestors + disabled nodes', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoDeselectAncestors: true, modelValue: ['b', 'ba', 'baa'] })
    await selectVia(w, 'baa')
    expect(lastModel(w)).toEqual(['ba'])
  })

  it('autoDeselectDescendants', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoDeselectDescendants: true, modelValue: ['a', 'aaa', 'aab'] })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual([])
  })

  it('autoDeselectDescendants + disabled nodes', async () => {
    const w = mountModel({ multiple: true, flat: true, options: flatFixture(), autoDeselectDescendants: true, modelValue: ['b', 'ba', 'baa'] })
    await selectVia(w, 'b')
    expect(lastModel(w)).toEqual(['ba'])
  })
})

// Disabled grandchild: a > aa > [aaa (disabled), aab], a > ab
const disabledGrandchild = () => [
  {
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa', children: [{ id: 'aaa', label: 'aaa', isDisabled: true }, { id: 'aab', label: 'aab' }] },
      { id: 'ab', label: 'ab' },
    ],
  },
  { id: 'b', label: 'b' },
]

describe('disabled nodes', () => {
  it('isDisabled is inherited by descendants in non-flat mode', () => {
    const w = mountTs({
      multiple: true,
      options: [{ id: 'c', label: 'c', children: [{ id: 'ca', label: 'ca', isDisabled: true, children: [{ id: 'caa', label: 'caa' }] }] }],
    })
    expect(w.vm.getNode('c').isDisabled).toBe(false)
    expect(w.vm.getNode('ca').isDisabled).toBe(true)
    expect(w.vm.getNode('caa').isDisabled).toBe(true)
  })

  it('hasDisabledDescendants propagates to all ancestors', () => {
    const w = mountTs({ multiple: true, options: disabledGrandchild() })
    expect(w.vm.getNode('aa').hasDisabledDescendants).toBe(true)
    expect(w.vm.getNode('a').hasDisabledDescendants).toBe(true)
    expect(w.vm.getNode('ab').hasDisabledDescendants).toBeFalsy()
    expect(w.vm.getNode('b').hasDisabledDescendants).toBeFalsy()
  })

  it('selecting the grandparent does not select the disabled grandchild (LEAF_PRIORITY value)', async () => {
    const w = mountModel({ multiple: true, options: disabledGrandchild(), modelValue: [], valueConsistsOf: 'LEAF_PRIORITY' })
    await selectVia(w, 'a')
    expect([...lastModel(w)].sort()).toEqual(['aab', 'ab'])
  })

  it('selecting the grandparent does not select the disabled grandchild (BRANCH_PRIORITY, checkboxes)', async () => {
    const w = mountModel({ multiple: true, options: disabledGrandchild(), modelValue: [], defaultExpandLevel: Infinity })
    await openMenu(w)
    await clickOption('a')
    await settle()
    const value = lastModel(w)
    expect(value).not.toContain('a')
    expect(value).not.toContain('aaa')
    expect(checkboxState('aaa')).toBe('unchecked')
    expect(findOption('aaa')!.classList.contains('vue-treeselect__option--selected')).toBe(false)
    expect(checkboxState('a')).toBe('indeterminate')
    expect(checkboxState('aab')).toBe('checked')
    expect(checkboxState('ab')).toBe('checked')
  })

  it('selecting the grandparent with ALL does not include the disabled grandchild nor the grandparent', async () => {
    const w = mountModel({ multiple: true, options: disabledGrandchild(), modelValue: [], valueConsistsOf: 'ALL' })
    await selectVia(w, 'a')
    const value = lastModel(w)
    expect(value).not.toContain('aaa')
    expect(value).not.toContain('a')
    expect(value).toEqual(expect.arrayContaining(['aab', 'ab']))
  })

  it('clicking a disabled option does nothing', async () => {
    const w = mountModel({ multiple: true, options: disabledGrandchild(), modelValue: [], defaultExpandLevel: Infinity })
    await openMenu(w)
    await clickOption('aaa')
    await settle()
    expect(w.emitted('update:modelValue')).toBeUndefined()
    expect(findOption('aaa')!.classList.contains('vue-treeselect__option--disabled')).toBe(true)
  })

  // riophae Props.spec.js > allowSelectingDisabledDescendants (single level)
  const allowFixture = () => [{
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa', isDisabled: true, children: [{ id: 'aaa', label: 'aaa' }] },
      { id: 'ab', label: 'ab', isDisabled: true },
      { id: 'ac', label: 'ac' },
    ],
  }]

  it('allowSelectingDisabledDescendants=false: select a -> only ac', async () => {
    const w = mountModel({ multiple: true, options: allowFixture(), modelValue: [] })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['ac'])
  })

  it('allowSelectingDisabledDescendants=false: deselect a keeps disabled', async () => {
    const w = mountModel({ multiple: true, options: allowFixture(), modelValue: ['a'] })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['aa', 'ab'])
  })

  it('allowSelectingDisabledDescendants=true: select a -> [a]', async () => {
    const w = mountModel({ multiple: true, options: allowFixture(), modelValue: [], allowSelectingDisabledDescendants: true })
    await selectVia(w, 'a')
    expect(lastModel(w)).toEqual(['a'])
  })

  it('clearable X hides when all selected nodes are disabled (allowClearingDisabled=false)', () => {
    const w = mountTs({ multiple: true, options: allowFixture(), modelValue: ['ab'] })
    expect(root(w).querySelector('.vue-treeselect__x-container')).toBeNull()
  })
})
