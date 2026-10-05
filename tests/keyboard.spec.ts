import { describe, it, expect, afterEach } from 'vitest'
import {
  mountTs, mountModel, cleanup, root, openMenu, keyDown, highlightedId, lastModel,
  settle, typeSearch, getInput, valueLabels, visibleOptionIds,
} from './helpers'

afterEach(cleanup)

const navTree = () => [
  {
    id: 'a', label: 'a', children: [
      { id: 'aa', label: 'aa' },
      { id: 'ab', label: 'ab', children: [{ id: 'aba', label: 'aba' }, { id: 'abb', label: 'abb' }] },
    ],
  },
  { id: 'b', label: 'b', children: [{ id: 'ba', label: 'ba', children: [{ id: 'baa', label: 'baa' }] }] },
]

const isOpen = (w: any) => root(w).classList.contains('vue-treeselect--open')

describe('keyboard', () => {
  for (const key of ['Enter', 'ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End']) {
    it(`${key} opens the closed menu`, async () => {
      const w = mountTs({ options: [] })
      await keyDown(w, key)
      expect(isOpen(w)).toBe(true)
    })
  }

  it('first option is highlighted on open', async () => {
    const w = mountTs({ options: navTree(), defaultExpandLevel: Infinity })
    await openMenu(w)
    expect(highlightedId()).toBe('a')
  })

  it('ArrowDown / ArrowUp move through visible options and wrap around', async () => {
    const w = mountTs({ options: navTree(), defaultExpandLevel: Infinity })
    await openMenu(w)
    const order = ['a', 'aa', 'ab', 'aba', 'abb', 'b', 'ba', 'baa']
    for (let i = 1; i <= order.length; i++) {
      await keyDown(w, 'ArrowDown')
      expect(highlightedId()).toBe(order[i % order.length])
    }
    // now at 'a' again; arrow up wraps to bottom
    await keyDown(w, 'ArrowUp')
    expect(highlightedId()).toBe('baa')
    await keyDown(w, 'ArrowUp')
    expect(highlightedId()).toBe('ba')
  })

  it('Home / End jump to first / last option', async () => {
    const w = mountTs({ options: navTree(), defaultExpandLevel: Infinity })
    await openMenu(w)
    await keyDown(w, 'End')
    expect(highlightedId()).toBe('baa')
    await keyDown(w, 'Home')
    expect(highlightedId()).toBe('a')
  })

  it('ArrowRight expands, ArrowLeft collapses, ArrowLeft on leaf jumps to parent', async () => {
    const w = mountTs({ options: navTree() })
    await openMenu(w)
    expect(highlightedId()).toBe('a')
    await keyDown(w, 'ArrowRight')
    expect(visibleOptionIds()).toEqual(['a', 'aa', 'ab', 'b'])
    await keyDown(w, 'ArrowDown')
    expect(highlightedId()).toBe('aa')
    await keyDown(w, 'ArrowLeft')
    expect(highlightedId()).toBe('a')
    await keyDown(w, 'ArrowLeft')
    await settle()
    expect(w.vm.getNode('a').isExpanded).toBe(false)
  })

  it('Enter selects highlighted option (single)', async () => {
    const w = mountModel({ options: navTree(), modelValue: null })
    await openMenu(w)
    await keyDown(w, 'ArrowDown') // b (collapsed tree: a, b)
    await keyDown(w, 'Enter')
    await settle()
    expect(lastModel(w)).toBe('b')
  })

  it('Enter toggles highlighted option (multiple)', async () => {
    const w = mountModel({ options: navTree(), modelValue: [], multiple: true })
    await openMenu(w)
    await keyDown(w, 'Enter')
    await settle()
    expect(lastModel(w)).toEqual(['a'])
    await keyDown(w, 'Enter')
    await settle()
    expect(lastModel(w)).toEqual([])
  })

  it('Enter on a disabled option is a no-op', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'a', isDisabled: true }], modelValue: null })
    await openMenu(w)
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('update:modelValue')).toBeUndefined()
  })

  it('Enter during search must not select a node that is not in the search results', async () => {
    const w = mountModel({
      options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }],
      modelValue: null,
    })
    await openMenu(w)
    expect(highlightedId()).toBe('a')
    await typeSearch(w, 'zzz')
    expect(visibleOptionIds()).toEqual([])
    await keyDown(w, 'Enter')
    await settle()
    expect(w.emitted('update:modelValue')).toBeUndefined()
    expect(w.emitted('select')).toBeUndefined()
  })

  it('Enter during search selects the first matching option', async () => {
    const w = mountModel({
      options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }],
      modelValue: null,
    })
    await openMenu(w)
    await typeSearch(w, 'ban')
    expect(highlightedId()).toBe('b')
    await keyDown(w, 'Enter')
    await settle()
    expect(lastModel(w)).toBe('b')
  })

  it('ArrowDown during search only visits matching options', async () => {
    const opts = ['a', 'b', 'c'].map(major => ({
      id: major, label: major,
      children: ['a', 'b'].map(minor => ({ id: major + minor, label: major + minor })),
    }))
    const w = mountTs({ options: opts })
    await openMenu(w)
    await typeSearch(w, 'bb')
    expect(highlightedId()).toBe('b')
    await keyDown(w, 'ArrowDown')
    expect(highlightedId()).toBe('bb')
    await keyDown(w, 'ArrowDown')
    expect(highlightedId()).toBe('b')
  })

  it('Escape clears search query first, then closes menu', async () => {
    const w = mountTs({ options: navTree() })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(getInput(w).value).toBe('a')
    await keyDown(w, 'Escape')
    await settle()
    expect(getInput(w).value).toBe('')
    expect(isOpen(w)).toBe(true)
    await keyDown(w, 'Escape')
    expect(isOpen(w)).toBe(false)
  })

  it('keys with modifiers are ignored', async () => {
    const w = mountTs({ options: navTree() })
    await keyDown(w, 'ArrowDown', { ctrlKey: true })
    expect(isOpen(w)).toBe(false)
  })

  describe('Backspace / Delete', () => {
    const flatOpts = () => [{ id: 'a', label: 'a' }, { id: 'b', label: 'b' }, { id: 'c', label: 'c' }]

    for (const key of ['Backspace', 'Delete']) {
      it(`${key} removes last value when input is empty (multiple)`, async () => {
        const w = mountModel({ options: flatOpts(), multiple: true, modelValue: ['a', 'b'] })
        await keyDown(w, key)
        await settle()
        expect(lastModel(w)).toEqual(['a'])
        expect(valueLabels(w)).toEqual(['a'])
      })

      it(`${key} removes value (single)`, async () => {
        const w = mountModel({ options: flatOpts(), modelValue: 'b' })
        await keyDown(w, key)
        await settle()
        expect(lastModel(w) == null).toBe(true)
      })

      it(`${key} removes a node whose id is 0`, async () => {
        const w = mountModel({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], multiple: true, modelValue: [1, 0] })
        await keyDown(w, key)
        await settle()
        expect(lastModel(w)).toEqual([1])
      })

      it(`${key} removes a node whose id is 0 (single)`, async () => {
        const w = mountModel({ options: [{ id: 0, label: 'zero' }, { id: 1, label: 'one' }], modelValue: 0 })
        await keyDown(w, key)
        await settle()
        expect(w.emitted('update:modelValue')).toBeTruthy()
        expect(lastModel(w) == null).toBe(true)
      })

      it(`${key} does nothing when search input has text`, async () => {
        const w = mountModel({ options: flatOpts(), multiple: true, modelValue: ['a', 'b'] })
        await typeSearch(w, 'x')
        await keyDown(w, key)
        await settle()
        expect(w.emitted('update:modelValue')).toBeUndefined()
      })
    }

    it('backspaceRemoves=false disables Backspace', async () => {
      const w = mountModel({ options: flatOpts(), multiple: true, modelValue: ['a', 'b'], backspaceRemoves: false })
      await keyDown(w, 'Backspace')
      await settle()
      expect(w.emitted('update:modelValue')).toBeUndefined()
    })

    it('deleteRemoves=false disables Delete', async () => {
      const w = mountModel({ options: flatOpts(), multiple: true, modelValue: ['a', 'b'], deleteRemoves: false })
      await keyDown(w, 'Delete')
      await settle()
      expect(w.emitted('update:modelValue')).toBeUndefined()
    })

    it('Backspace removes last value in LEAF_PRIORITY by deselecting the last leaf', async () => {
      const opts = [{ id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] }]
      const w = mountModel({ options: opts, multiple: true, modelValue: ['aa', 'ab'], valueConsistsOf: 'LEAF_PRIORITY' })
      await keyDown(w, 'Backspace')
      await settle()
      expect(lastModel(w)).toEqual(['aa'])
    })
  })
})
