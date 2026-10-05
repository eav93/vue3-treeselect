import { InjectionKey } from 'vue';
/**
 * All texts shown by the component. Each one can also be set with the prop of the same name,
 * which takes precedence over the locale.
 */
export interface TreeselectTexts {
    placeholder: string;
    noResultsText: string;
    noOptionsText: string;
    noChildrenText: string;
    loadingText: string;
    searchPromptText: string;
    retryText: string;
    retryTitle: string;
    clearAllText: string;
    clearValueText: string;
    limitText: (count: number) => string;
}
/**
 * A locale: (partial) texts, or the code of a registered locale (`'en'` is built in)
 */
export type TreeselectLocale = string | Partial<TreeselectTexts>;
export declare const en: TreeselectTexts;
/**
 * Make a locale available by code: `registerLocale('ru', ru)` → `<Treeselect locale="ru" />`
 */
export declare function registerLocale(code: string, texts: Partial<TreeselectTexts>): void;
/**
 * Provide a locale for all Treeselect components of an app:
 * `app.provide(TREESELECT_LOCALE, ru)`. The `locale` prop takes precedence.
 */
export declare const TREESELECT_LOCALE: InjectionKey<TreeselectLocale>;
/**
 * Resolve a locale (code or partial texts) to complete texts, falling back to English
 */
export declare function resolveLocale(locale: TreeselectLocale | null | undefined): TreeselectTexts;
