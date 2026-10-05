import { afterEach, describe, expect, it } from 'vitest'
import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import { TREESELECT_LOCALE, en, registerLocale, resolveLocale } from '@/locales'
import { ru } from '@/locales/ru'
import { de } from '@/locales/de'
import { readdirSync } from 'fs'
import { resolve } from 'path'
import { Treeselect, cleanup, mountTs, openMenu, root, settle, typeSearch } from './helpers'

afterEach(cleanup)

const options = [{ id: 'a', label: 'Apple' }]

const placeholder = (w: any) => root(w).querySelector('.vue-treeselect__placeholder')!.textContent!.trim()
const menuText = () => document.querySelector('.vue-treeselect__menu')!.textContent!.trim()

describe('locale', () => {
  it('uses English by default', () => {
    expect(placeholder(mountTs({ options }))).toBe('Select...')
  })

  it('accepts locale texts imported from a locale entry', async () => {
    const w = mountTs({ options, locale: ru })
    expect(placeholder(w)).toBe('Выберите...')
    await openMenu(w)
    await typeSearch(w, 'zzz')
    expect(menuText()).toBe('Ничего не найдено')
  })

  it('registered locales can be used by code, regional codes map to the language', () => {
    registerLocale('ru', ru)
    expect(resolveLocale('ru').placeholder).toBe(ru.placeholder)
    expect(resolveLocale('ru-RU').placeholder).toBe(ru.placeholder)
    expect(placeholder(mountTs({ options, locale: 'ru' }))).toBe('Выберите...')
  })

  it('unknown codes fall back to English', () => {
    expect(resolveLocale('xx')).toBe(en)
    expect(placeholder(mountTs({ options, locale: 'xx' }))).toBe('Select...')
  })

  it('accepts partial texts, the rest stays English', () => {
    const w = mountTs({ options, locale: { placeholder: 'Pick one' }, clearable: true, modelValue: 'a' })
    expect(root(w).querySelector('.vue-treeselect__x-container')!.getAttribute('title')).toBe('Clear value')
    expect(root(w).querySelector('.vue-treeselect__placeholder')!.textContent!.trim()).toBe('Pick one')
  })

  it('text props take precedence over the locale', () => {
    const w = mountTs({ options, locale: ru, placeholder: 'Город' })
    expect(placeholder(w)).toBe('Город')
  })

  it('can be provided app-wide, the prop still wins', async () => {
    const App = defineComponent({
      render: () => h('div', [
        h(Treeselect, { options, class: 'first' }),
        h(Treeselect, { options, locale: de, class: 'second' }),
      ]),
    })
    const w = mount(App, { attachTo: document.body, global: { provide: { [TREESELECT_LOCALE as symbol]: ru } } })
    await settle()
    expect(w.find('.first .vue-treeselect__placeholder').text()).toBe('Выберите...')
    expect(w.find('.second .vue-treeselect__placeholder').text()).toBe('Auswählen...')
    w.unmount()
  })

  it('every locale entry defines every text', async () => {
    const keys = Object.keys(en).sort()
    const files = readdirSync(resolve(import.meta.dirname, '../src/locales')).filter(f => f !== 'index.ts')
    expect(files.length).toBe(21)
    for (const file of files) {
      const code = file.replace('.ts', '')
      const texts = (await import(`../src/locales/${code}.ts`))[code]
      expect(Object.keys(texts).sort(), code).toEqual(keys)
      expect(texts.limitText(3), code).toContain('3')
    }
  })
})
