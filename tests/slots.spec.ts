import { describe, it, expect, afterEach } from 'vitest'
import { h } from 'vue'
import { mountTs, cleanup, root, openMenu, findOption } from './helpers'

afterEach(cleanup)

const opts = () => [
  { id: 'a', label: 'a', children: [{ id: 'aa', label: 'aa' }, { id: 'ab', label: 'ab' }] },
  { id: 'b', label: 'b' },
]

describe('slots', () => {
  it('option-label receives { node, shouldShowCount, count, labelClassName, countClassName }', async () => {
    const received: Record<string, any> = {}
    const w = mountTs({ options: opts(), defaultExpandLevel: Infinity, showCount: true }, {
      slots: {
        'option-label': (p: any) => {
          received[p.node.id] = p
          return h('label', { class: [p.labelClassName, 'custom-label'] }, [
            `${p.node.isBranch ? 'Branch' : 'Leaf'}: ${p.node.label}`,
            p.shouldShowCount ? h('span', { class: p.countClassName }, `(${p.count})`) : null,
          ])
        },
      },
    })
    await openMenu(w)
    expect(findOption('a')!.querySelector('.vue-treeselect__label')!.textContent!.trim()).toBe('Branch: a(2)')
    expect(findOption('aa')!.querySelector('.vue-treeselect__label')!.textContent!.trim()).toBe('Leaf: aa')
    expect(findOption('b')!.querySelector('.vue-treeselect__label')!.textContent!.trim()).toBe('Leaf: b')
    expect(received.a.shouldShowCount).toBe(true)
    expect(received.a.count).toBe(2)
    expect(received.a.labelClassName).toBe('vue-treeselect__label')
    expect(received.a.countClassName).toBe('vue-treeselect__count')
    expect(received.aa.shouldShowCount).toBe(false)
    expect(document.querySelectorAll('.custom-label').length).toBe(4)
  })

  it('value-label receives { node } in single mode', () => {
    const w = mountTs({ options: opts(), modelValue: 'aa' }, {
      slots: { 'value-label': ({ node }: any) => h('span', { class: 'custom-value' }, `V:${node.label}:${node.id}`) },
    })
    const single = root(w).querySelector('.vue-treeselect__single-value')!
    expect(single.querySelector('.custom-value')).not.toBeNull()
    expect(single.textContent!.trim()).toBe('V:aa:aa')
  })

  it('value-label receives { node } in multiple mode', () => {
    const w = mountTs({ options: opts(), multiple: true, modelValue: ['b', 'aa'] }, {
      slots: { 'value-label': ({ node }: any) => h('span', { class: 'custom-value' }, `V:${node.label}`) },
    })
    const items = Array.from(root(w).querySelectorAll('.vue-treeselect__multi-value-item'))
    expect(items.map(i => i.textContent!.trim())).toEqual(['V:b', 'V:aa'])
  })

  it('before-list and after-list are rendered in the menu', async () => {
    const w = mountTs({ options: opts() }, {
      slots: {
        'before-list': () => h('div', { class: 'my-before' }, 'BEFORE'),
        'after-list': () => h('div', { class: 'my-after' }, 'AFTER'),
      },
    })
    await openMenu(w)
    const menu = root(w).querySelector('.vue-treeselect__menu')!
    expect(menu.querySelector('.my-before')).not.toBeNull()
    expect(menu.querySelector('.my-after')).not.toBeNull()
    const text = menu.textContent!
    expect(text.indexOf('BEFORE')).toBeLessThan(text.indexOf('AFTER'))
  })
})
