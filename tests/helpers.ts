import { mount, flushPromises, VueWrapper, DOMWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import Treeselect from '@/components/Treeselect.vue'

export { Treeselect, flushPromises, nextTick }

export const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms))

export type TsWrapper = VueWrapper<any>

const mounted: TsWrapper[] = []

export function mountTs(props: Record<string, any> = {}, options: Record<string, any> = {}): TsWrapper {
  const w = mount(Treeselect as any, {
    props,
    attachTo: document.body,
    ...options,
  }) as TsWrapper
  mounted.push(w)
  return w
}

export function cleanup() {
  while (mounted.length) {
    const w = mounted.pop()!
    try { w.unmount() } catch { /* already unmounted */ }
  }
  document.body.innerHTML = ''
}

/** Simulate a left mousedown on a DOM element (wrapper or Element). */
export async function leftClick(target: DOMWrapper<Element> | VueWrapper<any> | Element) {
  const el = (target as any).element ?? target
  el.dispatchEvent(new MouseEvent('mousedown', { button: 0, bubbles: true, cancelable: true }))
  await nextTick()
}

export const root = (w: TsWrapper): HTMLElement => w.element as HTMLElement

/** Menu may be inside wrapper or portaled to document.body; search whole document. */
export function findOption(id: string | number): HTMLElement | null {
  return document.querySelector(`.vue-treeselect__option[data-id="${id}"]`)
}

export function findOptionLabelContainer(id: string | number): HTMLElement {
  const opt = findOption(id)
  if (!opt) throw new Error(`option ${id} not rendered`)
  return opt.querySelector('.vue-treeselect__label-container') as HTMLElement
}

export async function clickOption(id: string | number) {
  await leftClick(findOptionLabelContainer(id))
}

export async function clickArrow(id: string | number) {
  const opt = findOption(id)
  if (!opt) throw new Error(`option ${id} not rendered`)
  await leftClick(opt.querySelector('.vue-treeselect__option-arrow-container') as HTMLElement)
}

export function visibleOptionIds(): string[] {
  // Options hidden by a search are not rendered
  return optionIds()
}

export function optionIds(): string[] {
  return Array.from(document.querySelectorAll<HTMLElement>('.vue-treeselect__option'))
    .map(el => el.getAttribute('data-id')!)
}

export function checkboxState(id: string | number): 'checked' | 'indeterminate' | 'unchecked' | null {
  const opt = findOption(id)
  const cb = opt?.querySelector('.vue-treeselect__checkbox')
  if (!cb) return null
  if (cb.classList.contains('vue-treeselect__checkbox--checked')) return 'checked'
  if (cb.classList.contains('vue-treeselect__checkbox--indeterminate')) return 'indeterminate'
  if (cb.classList.contains('vue-treeselect__checkbox--unchecked')) return 'unchecked'
  return null
}

export function highlightedId(): string | null {
  const el = document.querySelector('.vue-treeselect__option--highlight')
  return el ? el.getAttribute('data-id') : null
}

export function getInput(w: TsWrapper): HTMLInputElement {
  return root(w).querySelector('.vue-treeselect__input') as HTMLInputElement
}

export async function keyDown(w: TsWrapper, key: string, extra: KeyboardEventInit = {}) {
  const input = getInput(w)
  input.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...extra }))
  await nextTick()
}

export async function typeSearch(w: TsWrapper, text: string) {
  const input = getInput(w)
  input.value = text
  input.dispatchEvent(new Event('input', { bubbles: true }))
  await sleep(25)
  await flushPromises()
}

export async function openMenu(w: TsWrapper) {
  w.vm.openMenu()
  await nextTick()
  await nextTick()
}

/** last emitted value of update:modelValue */
export function lastModel(w: TsWrapper) {
  const ev = w.emitted('update:modelValue') as any[][] | undefined
  return ev ? ev[ev.length - 1][0] : undefined
}

/** Mount with v-model-like behavior: modelValue prop follows update:modelValue. */
export function mountModel(props: Record<string, any> = {}, options: Record<string, any> = {}) {
  const holder: { w?: TsWrapper } = {}
  const w: TsWrapper = mountTs({
    ...props,
    'onUpdate:modelValue': (v: any) => holder.w?.setProps({ modelValue: v }),
  }, options)
  holder.w = w
  return w
}

export async function settle() {
  await flushPromises()
  await nextTick()
}

export function valueLabels(w: TsWrapper): string[] {
  const r = root(w)
  const single = r.querySelector('.vue-treeselect__single-value')
  if (single) return [single.textContent!.trim()]
  return Array.from(r.querySelectorAll('.vue-treeselect__multi-value-item')).map(e => e.textContent!.trim())
}
