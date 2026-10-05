import { describe, it, expect, afterEach, vi } from 'vitest'
import {
  mountTs, mountModel, cleanup, root, openMenu, clickOption, findOption, optionIds,
  leftClick, lastModel, valueLabels, settle, nextTick, getInput,
} from './helpers'
import { INPUT_DEBOUNCE_DELAY } from '@/constants'

const tree = () => [
  { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
  { id: 'b', label: 'b' },
  { id: 'c', label: 'c' },
]

afterEach(cleanup)

describe('test environment', () => {
  it('INPUT_DEBOUNCE_DELAY is 10ms under NODE_ENV=testing', () => {
    expect(INPUT_DEBOUNCE_DELAY).toBe(10)
  })

  it('happy-dom supports focus() / document.activeElement (sanity check for focus tests)', () => {
    const input = document.createElement('input')
    document.body.appendChild(input)
    input.focus()
    expect(document.activeElement).toBe(input)
    input.remove()
  })
})

describe('basic / single select', () => {
  it('renders root options with ids in markup when menu opens', async () => {
    const w = mountTs({ options: tree() })
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
    await openMenu(w)
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(true)
    expect(root(w).querySelector('.vue-treeselect__menu')).not.toBeNull()
    expect(optionIds()).toEqual(['a', 'b', 'c'])
  })

  it('clicking an option selects it, emits update:modelValue and closes menu', async () => {
    const w = mountModel({ options: tree(), modelValue: null })
    await openMenu(w)
    await clickOption('b')
    await settle()
    expect(lastModel(w)).toBe('b')
    expect(w.vm.getValue()).toBe('b')
    expect(valueLabels(w)).toEqual(['b'])
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
  })

  it('selected option gets --selected class', async () => {
    const w = mountTs({ options: tree(), modelValue: 'c' })
    await openMenu(w)
    expect(findOption('c')!.classList.contains('vue-treeselect__option--selected')).toBe(true)
    expect(findOption('b')!.classList.contains('vue-treeselect__option--selected')).toBe(false)
  })

  it('selecting a branch node in single mode selects it', async () => {
    const w = mountModel({ options: tree(), modelValue: null })
    await openMenu(w)
    await clickOption('a')
    await settle()
    expect(lastModel(w)).toBe('a')
  })

  it('closeOnSelect=false keeps the menu open', async () => {
    const w = mountModel({ options: tree(), modelValue: null, closeOnSelect: false })
    await openMenu(w)
    await clickOption('b')
    await settle()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(true)
  })

  it('modelValue changes from outside update selection and label', async () => {
    const w = mountTs({ options: tree(), modelValue: 'b' })
    expect(valueLabels(w)).toEqual(['b'])
    await w.setProps({ modelValue: 'aa' })
    expect(valueLabels(w)).toEqual(['aa'])
    expect(w.vm.getValue()).toBe('aa')
    await w.setProps({ modelValue: null })
    expect(root(w).querySelector('.vue-treeselect__single-value')).toBeNull()
    // original returns internalValue[0] -> undefined for empty single value
    expect(w.vm.getValue() == null).toBe(true)
  })

  it('modelValue changes from outside update selection in multiple mode', async () => {
    const w = mountTs({ options: tree(), multiple: true, modelValue: ['b'] })
    expect(valueLabels(w)).toEqual(['b'])
    await w.setProps({ modelValue: ['b', 'c'] })
    expect(valueLabels(w)).toEqual(['b', 'c'])
    expect(w.vm.getValue()).toEqual(['b', 'c'])
  })

  it('unknown value renders a fallback node "<id> (unknown)"', () => {
    const w = mountTs({ options: tree(), modelValue: 'zzz' })
    expect(valueLabels(w)).toEqual(['zzz (unknown)'])
  })

  it('accepts a node whose id is 0', async () => {
    const w = mountModel({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], modelValue: null })
    await openMenu(w)
    await clickOption(0)
    await settle()
    expect(lastModel(w)).toBe(0)
    expect(valueLabels(w)).toEqual(['zero'])
  })

  it('value 0 passed in from outside is shown as selected', () => {
    const w = mountTs({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], modelValue: 0 })
    expect(valueLabels(w)).toEqual(['zero'])
    expect(root(w).classList.contains('vue-treeselect--has-value')).toBe(true)
  })

  it('placeholder is shown when no value', () => {
    const w = mountTs({ options: tree(), placeholder: 'Pick one' })
    expect(root(w).textContent).toContain('Pick one')
  })

  it('shows noOptionsText for empty options', async () => {
    const w = mountTs({ options: [] })
    await openMenu(w)
    expect(root(w).querySelector('.vue-treeselect__menu')!.textContent).toContain('No options available.')
  })

  it('getNode returns normalized node', () => {
    const w = mountTs({ options: tree() })
    const n = w.vm.getNode('aa')
    expect(n.id).toBe('aa')
    expect(n.label).toBe('aa')
    expect(n.isLeaf).toBe(true)
    expect(n.parentNode.id).toBe('a')
    expect(w.vm.getNode('a').isBranch).toBe(true)
    expect(w.vm.getNode('a').isRootNode).toBe(true)
    expect(w.vm.getNode('aa').level).toBe(1)
  })

  it('traverseAllNodesDFS and traverseAllNodesByIndex visit all nodes', () => {
    const w = mountTs({ options: tree() })
    const dfs: string[] = []
    w.vm.traverseAllNodesDFS((n: any) => { dfs.push(n.id) })
    expect(dfs.sort()).toEqual(['a', 'aa', 'ab', 'b', 'c'])
    const byIndex: string[] = []
    w.vm.traverseAllNodesByIndex((n: any) => { byIndex.push(n.id) })
    expect(byIndex).toEqual(['a', 'aa', 'ab', 'b', 'c'])
  })

  it('openMenu / closeMenu / toggleMenu methods', async () => {
    const w = mountTs({ options: tree() })
    w.vm.openMenu(); await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(true)
    w.vm.closeMenu(); await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
    w.vm.toggleMenu(); await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(true)
    w.vm.toggleMenu(); await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
  })

  it('openMenu is ignored when disabled', async () => {
    const w = mountTs({ options: tree(), disabled: true })
    w.vm.openMenu(); await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
  })

  it('select() method selects a node', async () => {
    const w = mountModel({ options: tree(), modelValue: null })
    w.vm.select(w.vm.getNode('c'))
    await settle()
    expect(lastModel(w)).toBe('c')
  })

  it('clear() method resets value (single)', async () => {
    const w = mountModel({ options: tree(), modelValue: 'b' })
    w.vm.clear()
    await settle()
    expect(w.emitted('update:modelValue')).toBeTruthy()
    expect(lastModel(w) == null).toBe(true)
    expect(root(w).querySelector('.vue-treeselect__single-value')).toBeNull()
  })

  it('clear() method resets value (multiple)', async () => {
    const w = mountModel({ options: tree(), modelValue: ['b', 'c'], multiple: true })
    w.vm.clear()
    await settle()
    expect(lastModel(w)).toEqual([])
  })

  it('options prop is reactive', async () => {
    const w = mountTs({ options: tree() })
    await openMenu(w)
    await w.setProps({ options: [{ id: 'x', label: 'x' }] })
    await nextTick()
    expect(optionIds()).toEqual(['x'])
  })

  it('valueFormat="object" (single) emits raw node object and accepts object value', async () => {
    const opts: any[] = tree()
    opts[2]._extra = 'c'
    const w = mountModel({ options: opts, modelValue: { id: 'b', label: 'b' }, valueFormat: 'object' })
    expect(valueLabels(w)).toEqual(['b'])
    await openMenu(w)
    await clickOption('c')
    await settle()
    expect(lastModel(w)).toEqual({ id: 'c', label: 'c', _extra: 'c' })
  })

  it('valueFormat="object" (multiple) emits array of raw node objects', async () => {
    const opts = tree()
    const w = mountModel({ options: opts, multiple: true, modelValue: [], valueFormat: 'object' })
    await openMenu(w)
    await clickOption('b')
    await settle()
    expect(lastModel(w)).toEqual([opts[1]])
  })

  it('clicking the arrow toggles a branch node expansion', async () => {
    const w = mountTs({ options: tree() })
    await openMenu(w)
    expect(findOption('aa')).toBeNull()
    const arrow = findOption('a')!.querySelector('.vue-treeselect__option-arrow-container')!
    await leftClick(arrow)
    expect(findOption('aa')).not.toBeNull()
    await leftClick(arrow)
    await settle()
    // after collapse, children list is removed (transition may keep it in DOM; check via node state)
    expect(w.vm.getNode('a').isExpanded ?? false).toBe(false)
  })

  it('search input exists when searchable', () => {
    const w = mountTs({ options: tree() })
    expect(getInput(w)).not.toBeNull()
    const w2 = mountTs({ options: tree(), searchable: false })
    expect(getInput(w2)).toBeNull()
  })
})

describe('disabled prop', () => {
  it('clicking the control does not open menu when disabled', async () => {
    const w = mountTs({ options: tree(), disabled: true })
    await leftClick(root(w).querySelector('.vue-treeselect__value-container')!)
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
    expect(root(w).classList.contains('vue-treeselect--disabled')).toBe(true)
  })

  it('setting disabled=true closes the open menu', async () => {
    const w = mountTs({ options: tree() })
    await openMenu(w)
    await w.setProps({ disabled: true })
    await nextTick()
    expect(root(w).classList.contains('vue-treeselect--open')).toBe(false)
  })
})

describe('getNode warns about invalid id', () => {
  it('does not throw for unknown id', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const w = mountTs({ options: tree() })
    expect(() => w.vm.getNode('nope')).not.toThrow()
    spy.mockRestore()
  })
})
