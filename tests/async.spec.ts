import { describe, it, expect, afterEach, vi } from 'vitest'
import { defineComponent, h, ref, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import {
  Treeselect, mountTs, cleanup, root, openMenu, typeSearch, findOption, optionIds,
  clickArrow, settle, sleep, nextTick, clickOption, lastModel, mountModel,
} from './helpers'

afterEach(cleanup)

const menuEl = (w: any): HTMLElement | null => root(w).querySelector('.vue-treeselect__menu')
const menuText = (w: any) => (menuEl(w)?.textContent ?? '').trim()

/** Host component holding options in a ref, so that loadOptions can assign reactive data. */
function mountHost(initialOptions: any, extraProps: Record<string, any>, loadOptions: (ctx: any, opts: any) => any) {
  const options = ref<any>(initialOptions)
  const tsRef = ref<any>()
  const Host = defineComponent({
    setup() {
      return () => h(Treeselect as any, {
        ref: tsRef,
        options: options.value,
        loadOptions: (ctx: any) => loadOptions(ctx, options),
        ...extraProps,
      })
    },
  })
  const wrapper = mount(Host, { attachTo: document.body })
  return { wrapper, options, ts: () => tsRef.value, el: () => wrapper.element as HTMLElement }
}

describe('LOAD_ROOT_OPTIONS', () => {
  it('loads root options on mount (callback style, ref options)', async () => {
    const DELAY = 10
    const spy = vi.fn()
    const host = mountHost(null, {}, ({ action, callback }, options) => {
      spy(action)
      setTimeout(() => {
        options.value = [{ id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }] }, { id: 'b', label: 'b' }]
        callback()
      }, DELAY)
    })
    expect(spy).toHaveBeenCalledWith('LOAD_ROOT_OPTIONS')
    host.ts().openMenu()
    await nextTick()
    expect(host.el().querySelector('.vue-treeselect__loading-tip')).not.toBeNull()
    await sleep(DELAY + 5)
    await settle()
    expect(host.el().querySelector('.vue-treeselect__loading-tip')).toBeNull()
    expect(optionIds()).toEqual(['a', 'b'])
    host.wrapper.unmount()
  })

  it('autoLoadRootOptions=false defers loading until menu opens; promise style', async () => {
    const spy = vi.fn()
    const host = mountHost(null, { autoLoadRootOptions: false }, async ({ action }, options) => {
      spy(action)
      await sleep(5)
      options.value = [{ id: 'x', label: 'x' }]
    })
    expect(spy).not.toHaveBeenCalled()
    host.ts().openMenu()
    await nextTick()
    expect(spy).toHaveBeenCalledWith('LOAD_ROOT_OPTIONS')
    await sleep(15)
    await settle()
    expect(optionIds()).toEqual(['x'])
    host.wrapper.unmount()
  })

  it('shows error tip on failure and retries', async () => {
    let calls = 0
    const host = mountHost(null, { autoLoadRootOptions: false }, ({ callback }, options) => {
      calls++
      if (calls === 1) callback(new Error('boom'))
      else { options.value = [{ id: 'x', label: 'x' }]; callback() }
    })
    host.ts().openMenu()
    await settle()
    expect(host.el().textContent).toContain('boom')
    const retry = host.el().querySelector('.vue-treeselect__retry') as HTMLElement
    expect(retry).not.toBeNull()
    retry.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true }))
    retry.dispatchEvent(new MouseEvent('click', { button: 0, bubbles: true }))
    await settle()
    expect(calls).toBe(2)
    expect(optionIds()).toEqual(['x'])
    host.wrapper.unmount()
  })
})

describe('LOAD_CHILDREN_OPTIONS', () => {
  it('callback style, children assigned into plain (non-reactive) options', async () => {
    const DELAY = 10
    const options = [{ id: 'a', label: 'a', children: null }]
    const loadOptions = vi.fn(({ action, parentNode, callback }: any) => {
      expect(action).toBe('LOAD_CHILDREN_OPTIONS')
      setTimeout(() => {
        parentNode.children = [{ id: 'aa', label: 'aa' }]
        callback()
      }, DELAY)
    })
    const w = mountTs({ options, loadOptions })
    await openMenu(w)
    expect(w.vm.getNode('a').isBranch).toBe(true)
    await clickArrow('a')
    expect(loadOptions).toHaveBeenCalledTimes(1)
    expect(root(w).querySelector('.vue-treeselect__loading-tip')).not.toBeNull()
    await sleep(DELAY + 5)
    await settle()
    expect(root(w).querySelector('.vue-treeselect__loading-tip')).toBeNull()
    expect(findOption('aa')).not.toBeNull()
    expect(w.vm.getNode('aa')).toBeTruthy()
    expect(w.vm.getNode('aa').parentNode.id).toBe('a')
  })

  it('promise style, children assigned into plain options', async () => {
    const options = [{ id: 'a', label: 'a', children: null }]
    const w = mountTs({
      options,
      async loadOptions({ parentNode }: any) {
        await sleep(5)
        parentNode.children = [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }]
      },
    })
    await openMenu(w)
    await clickArrow('a')
    await sleep(15)
    await settle()
    expect(findOption('aa')).not.toBeNull()
    expect(findOption('ab')).not.toBeNull()
  })

  it('promise style, children assigned into reactive ref options', async () => {
    const host = mountHost([{ id: 'a', label: 'a', children: null }], {}, async ({ parentNode }) => {
      await sleep(5)
      parentNode.children = [{ id: 'aa', label: 'aa' }]
    })
    host.ts().openMenu()
    await settle()
    await clickArrow('a')
    await sleep(15)
    await settle()
    expect(findOption('aa')).not.toBeNull()
    expect(host.ts().getNode('aa')).toBeTruthy()
    host.wrapper.unmount()
  })

  it('callback style, children assigned into reactive() options', async () => {
    const options = reactive([{ id: 'a', label: 'a', children: null as any }])
    const w = mountTs({
      options,
      loadOptions({ parentNode, callback }: any) {
        setTimeout(() => { parentNode.children = [{ id: 'aa', label: 'aa' }]; callback() }, 5)
      },
    })
    await openMenu(w)
    await clickArrow('a')
    await sleep(15)
    await settle()
    expect(findOption('aa')).not.toBeNull()
  })

  it('rejected promise shows error tip and can be retried', async () => {
    let called = false
    const options = [{ id: 'a', label: 'a', children: null as any }]
    const w = mountTs({
      options,
      async loadOptions({ parentNode }: any) {
        await sleep(5)
        if (called) parentNode.children = [{ id: 'aa', label: 'aa' }]
        else { called = true; throw new Error('test-error') }
      },
    })
    await openMenu(w)
    await clickArrow('a')
    await sleep(15)
    await settle()
    expect(root(w).textContent).toContain('test-error')
    const retry = root(w).querySelector('.vue-treeselect__retry')!
    retry.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true }))
    await sleep(15)
    await settle()
    expect(findOption('aa')).not.toBeNull()
  })

  it('does not call loadOptions twice while in flight', async () => {
    const loadOptions = vi.fn(() => { /* never resolves */ })
    const w = mountTs({ options: [{ id: 'a', label: 'a', children: null }], loadOptions })
    await openMenu(w)
    await clickArrow('a') // expand
    await clickArrow('a') // collapse
    await clickArrow('a') // expand again
    expect(loadOptions).toHaveBeenCalledTimes(1)
  })

  it('children loaded into a checked branch become checked', async () => {
    const options = [{ id: 'a', label: 'a', children: null as any }]
    const w = mountTs({
      options, multiple: true, modelValue: ['a'],
      loadOptions({ parentNode, callback }: any) {
        parentNode.children = [{ id: 'aa', label: 'aa' }]
        callback()
      },
    })
    await openMenu(w)
    await clickArrow('a')
    await settle()
    expect(findOption('aa')!.classList.contains('vue-treeselect__option--selected')).toBe(true)
  })
})

describe('async search (ASYNC_SEARCH)', () => {
  it('basic: prompt, loading, results', async () => {
    let id = 0
    const DELAY = 30
    const w = mountTs({
      async: true,
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') {
          setTimeout(() => callback(null, [{ id: id++, label: searchQuery }]), DELAY)
        }
      },
    })
    await openMenu(w)
    expect(menuText(w)).toBe('Type to search...')
    await typeSearch(w, 'a')
    expect(menuText(w)).toBe('Loading...')
    await sleep(DELAY + 80)
    await settle()
    expect(menuText(w)).toBe('a')
    await typeSearch(w, '')
    expect(menuText(w)).toBe('Type to search...')
    await typeSearch(w, 'b')
    await sleep(DELAY + 80)
    await settle()
    expect(menuText(w)).toBe('b')
  })

  it('selecting an async search result emits its id and keeps label after query changes', async () => {
    const w = mountModel({
      async: true,
      multiple: true,
      modelValue: [],
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') callback(null, [{ id: searchQuery, label: `L-${searchQuery}` }])
      },
    })
    await openMenu(w)
    await typeSearch(w, 'foo')
    await clickOption('foo')
    await settle()
    expect(lastModel(w)).toEqual(['foo'])
    await typeSearch(w, 'bar')
    expect(root(w).querySelector('.vue-treeselect__multi-value-item')!.textContent).toContain('L-foo')
  })

  it('defaultOptions as array is shown before searching', async () => {
    const w = mountTs({
      async: true,
      defaultOptions: [{ id: 'default', label: 'default' }],
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') callback(null, [{ id: searchQuery, label: searchQuery }])
      },
    })
    await openMenu(w)
    expect(menuText(w)).not.toContain('Type to search...')
    expect(menuText(w)).toContain('default')
    await typeSearch(w, 'test')
    expect(menuText(w)).toContain('test')
    await typeSearch(w, '')
    expect(menuText(w)).toContain('default')
  })

  it('defaultOptions=true loads with empty query on mount', async () => {
    const DELAY = 60
    const calls: string[] = []
    const w = mountTs({
      async: true,
      defaultOptions: true,
      loadOptions({ action, searchQuery, callback }: any) {
        if (action === 'ASYNC_SEARCH') {
          calls.push(searchQuery)
          setTimeout(() => {
            const o = searchQuery === '' ? 'default' : searchQuery
            callback(null, [{ id: o, label: o }])
          }, DELAY)
        }
      },
    })
    expect(calls).toEqual([''])
    await openMenu(w)
    expect(menuText(w)).toBe('Loading...')
    await sleep(DELAY + 5)
    await settle()
    expect(menuText(w)).toBe('default')
    await typeSearch(w, 'test')
    expect(menuText(w)).toBe('Loading...')
    await sleep(DELAY + 5)
    await settle()
    expect(menuText(w)).toBe('test')
    await typeSearch(w, '')
    expect(menuText(w)).toBe('default')
  })

  it('shows noResultsText when search returns []', async () => {
    const w = mountTs({
      async: true,
      loadOptions({ callback }: any) { callback(null, []) },
    })
    await openMenu(w)
    await typeSearch(w, 'nothing')
    expect(menuText(w)).toBe('No results found...')
  })

  it('promise-style ASYNC_SEARCH (returns options)', async () => {
    const w = mountTs({
      async: true,
      async loadOptions({ action, searchQuery }: any) {
        if (action === 'ASYNC_SEARCH') {
          await sleep(5)
          return [{ id: 'p-' + searchQuery, label: 'p-' + searchQuery }]
        }
      },
    })
    await openMenu(w)
    await typeSearch(w, 'x')
    await sleep(15)
    await settle()
    expect(menuText(w)).toBe('p-x')
  })

  describe('cacheOptions', () => {
    const make = (cacheOptions: boolean) => {
      const calls: string[] = []
      const w = mountTs({
        async: true,
        cacheOptions,
        loadOptions({ action, searchQuery, callback }: any) {
          if (action === 'ASYNC_SEARCH') {
            calls.push(searchQuery)
            callback(null, [{ id: searchQuery, label: searchQuery }])
          }
        },
      })
      return { w, calls }
    }

    it('cacheOptions=true reuses cached results', async () => {
      const { w, calls } = make(true)
      await openMenu(w)
      for (const q of ['a', 'b', 'a', 'b']) await typeSearch(w, q)
      expect(calls).toEqual(['a', 'b'])
      expect(menuText(w)).toBe('b')
    })

    it('cacheOptions=false re-requests each time', async () => {
      const { w, calls } = make(false)
      await openMenu(w)
      for (const q of ['a', 'b', 'a', 'b']) await typeSearch(w, q)
      expect(calls).toEqual(['a', 'b', 'a', 'b'])
    })
  })
})
