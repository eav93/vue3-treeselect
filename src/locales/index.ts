import { warning } from '@/utils'
import type { InjectionKey } from 'vue'

/**
 * All texts shown by the component. Each one can also be set with the prop of the same name,
 * which takes precedence over the locale.
 */
export interface TreeselectTexts {
  placeholder: string
  noResultsText: string
  noOptionsText: string
  noChildrenText: string
  loadingText: string
  searchPromptText: string
  retryText: string
  retryTitle: string
  clearAllText: string
  clearValueText: string
  limitText: (count: number) => string
  createText: (query: string) => string
}

/**
 * A locale: (partial) texts, or the code of a registered locale (`'en'` is built in)
 */
export type TreeselectLocale = string | Partial<TreeselectTexts>

export const en: TreeselectTexts = {
  placeholder: 'Select...',
  noResultsText: 'No results found...',
  noOptionsText: 'No options available.',
  noChildrenText: 'No sub-options.',
  loadingText: 'Loading...',
  searchPromptText: 'Type to search...',
  retryText: 'Retry?',
  retryTitle: 'Click to retry',
  clearAllText: 'Clear all',
  clearValueText: 'Clear value',
  limitText: count => `and ${count} more`,
  createText: query => `Create "${query}"`,
}

/**
 * Locales usable by code with the `locale` prop. Only English is built in: other languages
 * are separate entry points (`@eav93/vue3-treeselect/locales/ru`) so that they are only
 * bundled when imported. Register them with `registerLocale` to use them by code.
 */
const registry: Record<string, TreeselectTexts> = { en }

/**
 * Make a locale available by code: `registerLocale('ru', ru)` → `<Treeselect locale="ru" />`
 */
export function registerLocale(code: string, texts: Partial<TreeselectTexts>): void {
  registry[code] = { ...en, ...texts }
}

/**
 * Provide a locale for all Treeselect components of an app:
 * `app.provide(TREESELECT_LOCALE, ru)`. The `locale` prop takes precedence.
 */
export const TREESELECT_LOCALE: InjectionKey<TreeselectLocale> = Symbol('vue-treeselect-locale')

const warnedLocales = new Set<string>()

/**
 * A locale code that is not registered falls back to English: warn once per code (development builds),
 * the language files are separate entry points and are easy to forget
 */
function warnUnknownLocale(code: string): void {
  if (warnedLocales.has(code)) return
  warnedLocales.add(code)
  warning(
    () => false,
    () => `Locale "${code}" is not registered, English is used. Import it and pass the texts `
      + `(\`import { ${code.split(/[-_]/)[0]} } from '@eav93/vue3-treeselect/locales/${code.split(/[-_]/)[0]}'\`) `
      + 'or register it with `registerLocale`.',
  )
}

/**
 * Resolve a locale (code or partial texts) to complete texts, falling back to English
 */
export function resolveLocale(locale: TreeselectLocale | null | undefined): TreeselectTexts {
  if (!locale) return en
  if (typeof locale === 'string') {
    // "ru-RU" → "ru"
    const texts = registry[locale] || registry[locale.toLowerCase().split(/[-_]/)[0]]
    if (!texts) warnUnknownLocale(locale)
    return texts || en
  }
  return { ...en, ...locale }
}
