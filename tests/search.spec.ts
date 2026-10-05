import { describe, it, expect, afterEach } from 'vitest'
import {
  mountTs, mountModel, cleanup, root, openMenu, typeSearch, visibleOptionIds, findOption,
  highlightedId, clickOption, settle, lastModel, getInput, clickArrow,
} from './helpers'

afterEach(cleanup)

const menuText = (w: any) => (root(w).querySelector('.vue-treeselect__menu')?.textContent ?? '').trim()

describe('local search', () => {
  it('filters options and expands ancestors of matched nodes', async () => {
    const w = mountTs({
      options: [
        { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
        { id: 'b', label: 'b' },
      ],
    })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(visibleOptionIds()).toEqual(['a', 'aa', 'ab'])
    await typeSearch(w, 'b')
    expect(visibleOptionIds()).toEqual(['a', 'ab', 'b'])
    expect(findOption('ab')!.classList.contains('vue-treeselect__option--matched')).toBe(true)
  })

  it('is case insensitive', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'James Blunt' }, { id: 'b', label: 'Cheer Chen' }] })
    await openMenu(w)
    await typeSearch(w, 'james')
    expect(visibleOptionIds()).toEqual(['a'])
    await typeSearch(w, 'CHEN')
    expect(visibleOptionIds()).toEqual(['b'])
  })

  it('clearing the query shows all options again', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }] })
    await openMenu(w)
    await typeSearch(w, 'app')
    expect(visibleOptionIds()).toEqual(['a'])
    await typeSearch(w, '')
    expect(visibleOptionIds()).toEqual(['a', 'b'])
  })

  it('shows noResultsText when nothing matches', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'apple' }], noResultsText: 'Nothing!' })
    await openMenu(w)
    await typeSearch(w, 'zzz')
    expect(root(w).querySelector('.vue-treeselect__no-results-tip')).not.toBeNull()
    expect(menuText(w)).toContain('Nothing!')
  })

  it('highlights the first matching option after the query changes', async () => {
    const w = mountTs({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }, { id: 'c', label: 'cherry' }] })
    await openMenu(w)
    await typeSearch(w, 'cher')
    expect(highlightedId()).toBe('c')
  })

  it('a matched branch with no matched children is collapsed; expanding shows all children', async () => {
    const w = mountTs({
      options: [{ id: 'a', label: 'branch', children: [{ id: 'aa', label: 'x' }, { id: 'ab', label: 'y' }] }],
    })
    await openMenu(w)
    await typeSearch(w, 'branch')
    expect(visibleOptionIds()).toEqual(['a'])
    await clickArrow('a')
    expect(visibleOptionIds()).toEqual(['a', 'aa', 'ab'])
  })

  it('selecting in single mode resets the search query', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }], modelValue: null })
    await openMenu(w)
    await typeSearch(w, 'ban')
    await clickOption('b')
    await settle()
    expect(lastModel(w)).toBe('b')
    expect(getInput(w).value).toBe('')
  })

  it('clearOnSelect=true in multiple mode resets the query', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }], modelValue: [], multiple: true, clearOnSelect: true })
    await openMenu(w)
    await typeSearch(w, 'ban')
    await clickOption('b')
    await settle()
    expect(getInput(w).value).toBe('')
  })

  it('clearOnSelect=false in multiple mode keeps the query', async () => {
    const w = mountModel({ options: [{ id: 'a', label: 'apple' }, { id: 'b', label: 'banana' }], modelValue: [], multiple: true })
    await openMenu(w)
    await typeSearch(w, 'ban')
    await clickOption('b')
    await settle()
    expect(getInput(w).value).toBe('ban')
  })
})

describe('fuzzy matching', () => {
  const opts = () => [{ id: 'jamesblunt', label: 'James Blunt' }]

  it('disableFuzzyMatching=false: "jb" matches "James Blunt"', async () => {
    const w = mountTs({ options: opts(), disableFuzzyMatching: false })
    await openMenu(w)
    await typeSearch(w, 'jb')
    expect(visibleOptionIds()).toEqual(['jamesblunt'])
  })

  it('disableFuzzyMatching=true: "jb" does not match', async () => {
    const w = mountTs({ options: opts(), disableFuzzyMatching: true })
    await openMenu(w)
    await typeSearch(w, 'jb')
    expect(visibleOptionIds()).toEqual([])
  })

  it('disableFuzzyMatching=true: substring still matches', async () => {
    const w = mountTs({ options: opts(), disableFuzzyMatching: true })
    await openMenu(w)
    await typeSearch(w, 'es bl')
    expect(visibleOptionIds()).toEqual(['jamesblunt'])
  })
})

describe('searchNested', () => {
  it('searchNested=false: "a x" only matches nodes whose own label matches', async () => {
    const w = mountTs({
      searchNested: false,
      options: [{ id: 'a', label: 'a', children: [{ id: 'aa', label: 'x' }, { id: 'ab', label: 'a x' }] }],
    })
    await openMenu(w)
    await typeSearch(w, 'a x')
    expect(findOption('ab')!.classList.contains('vue-treeselect__option--matched')).toBe(true)
    // Options hidden by the search are not rendered
    expect(findOption('aa')).toBeNull()
  })

  const nestedOpts = () => [{ id: 'a', label: 'abc', children: [{ id: 'aa', label: 'xyz' }] }]

  it('searchNested=true also searches ancestor labels', async () => {
    const w = mountTs({ searchNested: true, options: nestedOpts() })
    await openMenu(w)
    await typeSearch(w, 'ab yz')
    expect(findOption('aa')).not.toBeNull()
    expect(findOption('aa')!.classList.contains('vue-treeselect__option--matched')).toBe(true)
  })

  it('searchNested=true disables fuzzy matching for multi-word queries', async () => {
    const w = mountTs({ searchNested: true, options: nestedOpts() })
    await openMenu(w)
    await typeSearch(w, 'ac yz')
    expect(visibleOptionIds()).toEqual([])
  })

  it('searchNested=true with a single word searches normally (fuzzy)', async () => {
    const w = mountTs({ searchNested: true, options: nestedOpts() })
    await openMenu(w)
    await typeSearch(w, 'xz')
    expect(visibleOptionIds()).toEqual(['a', 'aa'])
  })
})

describe('matchKeys', () => {
  it('matches additional keys', async () => {
    const w = mountTs({
      matchKeys: ['label', 'value'],
      options: [{ id: 'a', label: 'a', value: '1', extra: 'x' }, { id: 'b', label: 'b', value: '2', extra: 'y' }],
    })
    await openMenu(w)
    await typeSearch(w, '1')
    expect(visibleOptionIds()).toEqual(['a'])
    await typeSearch(w, '2')
    expect(visibleOptionIds()).toEqual(['b'])
    await typeSearch(w, 'x')
    expect(visibleOptionIds()).toEqual([])
  })

  it('numbers are stringified, other types ignored', async () => {
    const values: any[] = [1, NaN, null, undefined, {}, []]
    const w = mountTs({
      matchKeys: ['value'],
      options: values.map((value, i) => ({ id: String(i), label: String(i), value })),
    })
    await openMenu(w)
    await typeSearch(w, '1')
    expect(visibleOptionIds()).toEqual(['0'])
    await typeSearch(w, 'null')
    expect(visibleOptionIds()).toEqual([])
    await typeSearch(w, 'object')
    expect(visibleOptionIds()).toEqual([])
  })
})

describe('flattenSearchResults', () => {
  it('renders matched nodes at indent level 0', async () => {
    const w = mountTs({
      flattenSearchResults: true,
      options: [
        { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
        { id: 'b', label: 'b' },
      ],
    })
    await openMenu(w)
    const check = (ids: string[]) => {
      expect(visibleOptionIds()).toEqual(ids)
      for (const id of ids) {
        expect(findOption(id)!.parentElement!.classList.contains('vue-treeselect__indent-level-0'), id).toBe(true)
      }
    }
    await typeSearch(w, 'a')
    check(['a', 'aa', 'ab'])
    await typeSearch(w, 'ab')
    check(['ab'])
    await typeSearch(w, 'b')
    check(['ab', 'b'])
  })
})

describe('showCountOnSearch', () => {
  const opts = () => [
    { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
    { id: 'b', label: 'b', children: [{ id: 'ba', label: 'ba' }, { id: 'bb', label: 'bb' }] },
  ]
  const countText = (id: string) => findOption(id)?.querySelector('.vue-treeselect__count')?.textContent?.trim()

  it('showCountOnSearch=false hides counts while searching', async () => {
    const w = mountTs({ options: opts(), showCount: true, showCountOnSearch: false })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(document.querySelector('.vue-treeselect__count')).toBeNull()
  })

  it('showCountOnSearch=true shows counts while searching', async () => {
    const w = mountTs({ options: opts(), showCount: true, showCountOnSearch: true })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(document.querySelector('.vue-treeselect__count')).not.toBeNull()
  })

  it('showCountOnSearch unspecified follows showCount', async () => {
    const w = mountTs({ options: opts(), showCount: true })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(document.querySelector('.vue-treeselect__count')).not.toBeNull()
  })

  it('search counts reflect matched children and refresh on query change', async () => {
    const w = mountTs({ options: opts(), showCount: true, showCountOnSearch: true })
    await openMenu(w)
    await typeSearch(w, 'a')
    expect(countText('a')).toBe('(2)')
    expect(countText('b')).toBe('(1)')
    await typeSearch(w, 'b')
    expect(countText('a')).toBe('(1)')
    expect(countText('b')).toBe('(2)')
  })
})
