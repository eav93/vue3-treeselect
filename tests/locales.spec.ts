import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { TREESELECT_LOCALE, locales, resolveLocale, ru } from '@/locales'
import { Treeselect, cleanup, mountTs, openMenu, root, settle, typeSearch } from './helpers'

afterEach(cleanup)

const options = [{ id: 'a', label: 'Apple' }]
const placeholder = (w: any) => root(w).querySelector('.vue-treeselect__placeholder')!.textContent!.trim()
const menuText = () => document.querySelector('.vue-treeselect__menu')!.textContent!.trim()

describe('locale', () => {
  it('uses English by default', () => {
    expect(placeholder(mountTs({ options }))).toBe('Select...')
  })

  it('accepts a built-in language code', async () => {
    const w = mountTs({ options, locale: 'ru' })
    expect(placeholder(w)).toBe('Выберите...')
    await openMenu(w)
    await typeSearch(w, 'zzz')
    expect(menuText()).toBe('Ничего не найдено')
  })

  it('maps regional codes to the language and unknown codes to English', () => {
    expect(resolveLocale('ru-RU')).toBe(ru)
    expect(resolveLocale('xx')).toBe(locales.en)
    expect(placeholder(mountTs({ options, locale: 'xx' }))).toBe('Select...')
  })

  it('accepts partial texts, the rest stays English', () => {
    const w = mountTs({ options, locale: { placeholder: 'Pick one' }, clearable: true, modelValue: 'a' })
    expect(root(w).querySelector('.vue-treeselect__x-container')!.getAttribute('title')).toBe('Clear value')
    expect(root(w).querySelector('.vue-treeselect__placeholder')!.textContent!.trim()).toBe('Pick one')
  })

  it('text props take precedence over the locale', () => {
    const w = mountTs({ options, locale: 'ru', placeholder: 'Город' })
    expect(placeholder(w)).toBe('Город')
  })

  it('can be provided app-wide, the prop still wins', async () => {
    const App = defineComponent({
      render: () => h('div', [
        h(Treeselect, { options, class: 'first' }),
        h(Treeselect, { options, locale: 'de', class: 'second' }),
      ]),
    })
    const w = mount(App, { attachTo: document.body, global: { provide: { [TREESELECT_LOCALE as symbol]: 'ru' } } })
    await settle()
    expect(w.find('.first .vue-treeselect__placeholder').text()).toBe('Выберите...')
    expect(w.find('.second .vue-treeselect__placeholder').text()).toBe('Auswählen...')
    w.unmount()
  })

  it('every built-in locale defines every text', () => {
    const keys = Object.keys(locales.en).sort()
    for (const [code, texts] of Object.entries(locales)) {
      expect(Object.keys(texts).sort(), code).toEqual(keys)
      expect(texts.limitText(3), code).toContain('3')
    }
  })
})
