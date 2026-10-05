/**
 * Performance benchmark for large trees (uses only the public component API).
 * Run with `npm run bench`. Numbers are printed, nothing is asserted.
 */
import { afterEach, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import Treeselect from '@/components/Treeselect.vue'

const VIRTUAL = process.env.BENCH_VIRTUAL !== '0'

function genTree(roots: number, branching: number, depth: number) {
  let n = 0
  const words = ['alpha', 'beta', 'gamma', 'delta', 'omega', 'sigma', 'kappa', 'theta']
  const make = (level: number, path: string): any => {
    const id = 'n' + (n++)
    const label = words[n % words.length] + ' ' + path + ' ' + id
    if (level >= depth) return { id, label }
    const children = []
    for (let i = 0; i < branching; i++) children.push(make(level + 1, path + '.' + i))
    return { id, label, children }
  }
  const options = []
  for (let i = 0; i < roots; i++) options.push(make(0, '' + i))
  return { options, count: n }
}

const results: [string, number][] = []

async function measure(label: string, fn: () => any): Promise<number> {
  const start = performance.now()
  await fn()
  const time = performance.now() - start
  results.push([label, time])
  console.log(`${label.padEnd(64)} ${time.toFixed(1).padStart(9)} ms`)
  return time
}

let wrapper: VueWrapper<any> | null = null
afterEach(() => {
  wrapper?.unmount()
  wrapper = null
  document.body.innerHTML = ''
})

const mountTs = (props: Record<string, any>) => {
  wrapper = mount(Treeselect as any, { props, attachTo: document.body })
  return wrapper
}

const flush = async () => {
  await nextTick()
  await nextTick()
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const typeSearch = async (w: VueWrapper<any>, value: string) => {
  const input = w.find('input.vue-treeselect__input')
  ;(input.element as HTMLInputElement).value = value
  await input.trigger('input')
  await flush()
}

test('55k nodes, collapsed, multiple', async () => {
  const { options, count } = genTree(50, 10, 3)
  console.log(`\n==== ${count} nodes (50 x 10^3), collapsed, multiple`)
  let w!: VueWrapper<any>
  await measure('mount', async () => {
    w = mountTs({ options, multiple: true, modelValue: [] })
    await flush()
  })
  const vm = w.vm
  const root = vm.getNode(options[0].id)
  await measure('select root branch (1111 nodes)', async () => { vm.select(root); await flush() })
  await measure('deselect root branch (1111 nodes)', async () => { vm.select(root); await flush() })
  const leaves = options.slice(1, 3).flatMap((r: any) => r.children.flatMap((c: any) => c.children.flatMap((cc: any) => cc.children)))
  const picks = leaves.slice(0, 200)
  const total = await measure('select 200 leaves one by one (total)', async () => {
    for (const leaf of picks) vm.select(vm.getNode(leaf.id))
    await flush()
  })
  console.log(`${'  -> per click'.padEnd(64)} ${(total / picks.length).toFixed(2).padStart(9)} ms`)
  // Menu stays closed: rendering 55k search results without virtualScroll runs out of memory
  for (const q of ['a', 'al', 'alp']) {
    await sleep(250) // let the input debounce settle, so each search runs immediately
    await measure(`search "${q}" (menu closed)`, () => typeSearch(w, q))
  }
  await sleep(250)
  await typeSearch(w, '')
  await measure('replace options (new array)', async () => {
    await w.setProps({ options: genTree(50, 10, 3).options })
    await flush()
  })
})

test('25k nodes, wide (5 x 5000)', async () => {
  const { options, count } = genTree(5, 5000, 1)
  console.log(`\n==== ${count} nodes (5 x 5000), multiple`)
  const w = mountTs({ options, multiple: true, modelValue: [] })
  await flush()
  const vm = w.vm
  const root = vm.getNode(options[0].id)
  await measure('select branch with 5000 children', async () => { vm.select(root); await flush() })
  await measure('deselect branch with 5000 children', async () => { vm.select(root); await flush() })
})

if (VIRTUAL) {
  test('55k nodes, search with open menu, virtualScroll', async () => {
    const { options, count } = genTree(50, 10, 3)
    console.log(`\n==== ${count} nodes, multiple, alwaysOpen, virtualScroll`)
    let w!: VueWrapper<any>
    await measure('mount + first render', async () => {
      w = mountTs({ options, multiple: true, alwaysOpen: true, modelValue: [], virtualScroll: true, optionHeight: 30 })
      await flush()
    })
    for (const q of ['a', 'al', 'alp']) {
      await sleep(250)
      await measure(`search "${q}" + render`, () => typeSearch(w, q))
    }
    console.log(`  rendered options: ${document.querySelectorAll('.vue-treeselect__option').length}`)
  })
}

for (const virtualScroll of VIRTUAL ? [false, true] : [false]) {
  test(`11k nodes rendered, all expanded${virtualScroll ? ', virtualScroll' : ''}`, async () => {
    const { options, count } = genTree(10, 10, 3)
    console.log(`\n==== ${count} nodes all expanded, multiple, alwaysOpen${virtualScroll ? ', virtualScroll' : ''}`)
    let w!: VueWrapper<any>
    await measure('mount + first render', async () => {
      w = mountTs({
        options,
        multiple: true,
        alwaysOpen: true,
        defaultExpandLevel: Infinity,
        modelValue: [],
        virtualScroll,
        optionHeight: 30,
      })
      await flush()
    })
    console.log(`  rendered options: ${document.querySelectorAll('.vue-treeselect__option').length}`)
    const vm = w.vm
    const leaf = vm.getNode(options[1].children[0].children[0].children[0].id)
    await measure('select one leaf + render', async () => { vm.select(leaf); await flush() })
    await measure('select root branch + render', async () => { vm.select(vm.getNode(options[0].id)); await flush() })
    await sleep(250)
    await measure('search "alp" + render', () => typeSearch(w, 'alp'))
    await sleep(250)
    await measure('clear search + render', () => typeSearch(w, ''))
  })
}
