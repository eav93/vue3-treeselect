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
 * A locale: a language code of a built-in locale or (partial) texts
 */
export type TreeselectLocale = string | Partial<TreeselectTexts>;
export declare const en: TreeselectTexts;
export declare const ru: TreeselectTexts;
export declare const uk: TreeselectTexts;
export declare const de: TreeselectTexts;
export declare const fr: TreeselectTexts;
export declare const es: TreeselectTexts;
export declare const it: TreeselectTexts;
export declare const pt: TreeselectTexts;
export declare const pl: TreeselectTexts;
export declare const tr: TreeselectTexts;
export declare const zh: TreeselectTexts;
export declare const ja: TreeselectTexts;
export declare const ar: TreeselectTexts;
export declare const hi: TreeselectTexts;
export declare const ko: TreeselectTexts;
export declare const nl: TreeselectTexts;
export declare const sv: TreeselectTexts;
export declare const cs: TreeselectTexts;
export declare const vi: TreeselectTexts;
export declare const id: TreeselectTexts;
export declare const he: TreeselectTexts;
export declare const ro: TreeselectTexts;
/**
 * Built-in locales by language code
 */
export declare const locales: Record<string, TreeselectTexts>;
/**
 * Provide a locale for all Treeselect components of an app:
 * `app.provide(TREESELECT_LOCALE, 'ru')`. The `locale` prop takes precedence.
 */
export declare const TREESELECT_LOCALE: InjectionKey<TreeselectLocale>;
/**
 * Resolve a locale (code or partial texts) to complete texts, falling back to English
 */
export declare function resolveLocale(locale: TreeselectLocale | null | undefined): TreeselectTexts;
