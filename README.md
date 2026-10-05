# @eav93/vue3-treeselect

A multi-select component with nested options for **Vue 3.5+**, written in TypeScript.

> **This is a fork with fixes.** It continues
> [riophae/vue-treeselect](https://github.com/riophae/vue-treeselect) (Vue 2) →
> [megafetis/vue3-treeselect](https://github.com/megafetis/vue3-treeselect) →
> [SODA-NL/vue3-treeselect](https://github.com/SODA-NL/vue3-treeselect).
>
> Compared to the other Vue 3 ports it is:
>
> - rewritten with the Composition API and TypeScript (types are included);
> - fixed: async search, focus handling, checkboxes, counts, disabled descendants, slots,
>   keyboard navigation, IME input, `appendToBody` (now a `<Teleport>`), a watcher leak in
>   async search and more, see the [changelog](./CHANGELOG.md);
> - much faster on large trees (tens of thousands of nodes): incremental selection state,
>   single-pass search, a flat and progressively rendered menu and optional virtual scrolling;
> - covered by a test suite.
>
> The API is the API of vue-treeselect, so its [documentation](https://vue-treeselect.js.org/)
> applies, with the differences listed below.

## Installation

```sh
npm install @eav93/vue3-treeselect
```

`vue` `^3.5` is a peer dependency.

## Usage

```vue
<template>
  <Treeselect v-model="value" :options="options" :multiple="true" placeholder="Select..." />
</template>

<script setup>
import { ref } from 'vue'
import { Treeselect } from '@eav93/vue3-treeselect'
import '@eav93/vue3-treeselect/dist/vue3-treeselect.css'

const value = ref([])
const options = [
  {
    id: 'fruits',
    label: 'Fruits',
    children: [
      { id: 'apple', label: 'Apple' },
      { id: 'banana', label: 'Banana', isDisabled: true },
    ],
  },
  { id: 'vegetables', label: 'Vegetables' },
]
</script>
```

The component is also the default export (`import Treeselect from '@eav93/vue3-treeselect'`).
A UMD build is available as `dist/vue3-treeselect.umd.js` (global `Vue3Treeselect`).

## Differences from vue-treeselect

- `v-model` uses `modelValue` / `update:modelValue`. All events (`update:modelValue`, `select`,
  `deselect`, `open`, `close`, `search-change`) get the instance id as the last argument.
- Slots: `option-label` (`{ node, shouldShowCount, count, labelClassName, countClassName }`),
  `value-label` (`{ node }`), `before-list`, `after-list`.
- `loadOptions` may return a promise; for `ASYNC_SEARCH` the resolved value is used as the options.
- Selecting a branch never selects its disabled descendants, at any depth.
- After a search the first match is highlighted (Enter selects it), and the options can change
  during a search.
- Works with SSR (`appendToBody` included) and `<KeepAlive>`; slots and props are typed.
- New props:

  | Prop | Default | Description |
  | --- | --- | --- |
  | `virtualScroll` | `false` | Render only the options in the visible part of the menu. Rows must have a fixed height. |
  | `optionHeight` | measured | Row height in px for `virtualScroll`. |
  | `searchDebounceDelay` | `200` | Debounce delay of the search input in ms. |

- Methods available on the component ref: `openMenu`, `closeMenu`, `toggleMenu`, `toggleExpanded`,
  `select`, `clear`, `removeLastValue`, `getValue`, `getNode`, `isSelected`, `focusInput`,
  `blurInput`, `getInput`, `getMenu`, `getControl`, `initialize`, `loadRootOptions`,
  `traverseAllNodesDFS`, `traverseAllNodesByIndex`, `traverseDescendantsBFS`,
  `traverseDescendantsDFS`, and the state `forest`, `menu`, `trigger`, `localSearch`,
  `selectedNodes`, `internalValue`.
- The menu is a flat list: `.vue-treeselect__list-item` rows are indented with
  `.vue-treeselect__indent-level-N` classes instead of being nested, and options hidden by
  a search are not rendered.

## Localization

All texts are English by default. Other languages are separate entry points, so only the
languages you import end up in your bundle (each one is under 1 kB).

**For the whole app** (recommended): provide the locale once, every `<Treeselect>` picks it up.

```js
import { createApp } from 'vue'
import { TREESELECT_LOCALE } from '@eav93/vue3-treeselect'
import { ru } from '@eav93/vue3-treeselect/locales/ru'

createApp(App)
  .provide(TREESELECT_LOCALE, ru)
  .mount('#app')
```

**For one component**: the `locale` prop.

```vue
<script setup>
import { de } from '@eav93/vue3-treeselect/locales/de'
</script>

<template>
  <Treeselect :options="options" :locale="de" />
</template>
```

**By language code**: register the locales you use, then pass the code. Regional codes
(`ru-RU`) map to the language.

```js
import { registerLocale } from '@eav93/vue3-treeselect'
import { ru } from '@eav93/vue3-treeselect/locales/ru'
import { uk } from '@eav93/vue3-treeselect/locales/uk'

registerLocale('ru', ru)
registerLocale('uk', uk)
```

```vue
<Treeselect :options="options" :locale="currentLanguage" />  <!-- 'ru', 'uk', 'en' -->
```

**Your own texts**: pass an object; missing texts stay English. Everything can be overridden,
including the texts of an imported locale:

```vue
<Treeselect :locale="{ placeholder: 'Pick one', noResultsText: 'Nothing found' }" />
<Treeselect :locale="{ ...ru, placeholder: 'Город' }" />
```

The text props (`placeholder`, `noResultsText`, `noOptionsText`, `noChildrenText`, `loadingText`,
`searchPromptText`, `retryText`, `retryTitle`, `clearAllText`, `clearValueText`, `limitText`)
take precedence over the locale, so `placeholder` can still be set per component. Order of
precedence: text prop → `locale` prop → app-wide locale → English.

Available locales (`@eav93/vue3-treeselect/locales/<code>`): `ar`, `cs`, `de`, `es`, `fr`, `he`,
`hi`, `id`, `it`, `ja`, `ko`, `nl`, `pl`, `pt`, `ro`, `ru`, `sv`, `tr`, `uk`, `vi`, `zh`
(`en` is exported from the package root). `ar` and `he` are right-to-left: set `dir="rtl"` on
a parent element, the menu follows it (also with `appendToBody`).

With the UMD build (no bundler) there are no locale files: pass your texts as an object.

## Customizing styles

Instead of the compiled CSS you can use the SCSS source and configure it with variables
(see the top of [`sass/style.scss`](./sass/style.scss) for all of them):

```scss
@use "@eav93/vue3-treeselect/sass/style.scss" with (
  $treeselect-control-border-color: #ced4da,
  $treeselect-control-border-color-focus: #86b7fe,
  $treeselect-option-bg-highlight: #f5f6fe,
  $treeselect-checkbox-color-highlight: #26a65b,
  $treeselect-multi-value-item-bg: #26a65b,
  $treeselect-multi-value-item-bg-hover: #2bbb66,
  $treeselect-multi-value-font-color: #fff,
);
```

The SCSS needs the `material-colors` and `sass-easing` packages, which are installed as
dependencies. Configuring variables is preferable to overriding the generated rules with CSS:
it covers all states (hover, focus, disabled) and doesn't fight selector specificity.

Checkbox marks are SVG; their colors are `$treeselect-checkbox-icon-color` / `-disabled`, and they can be
replaced with any CSS image. For example, Bootstrap-like checkboxes:

```scss
@use "@eav93/vue3-treeselect/sass/style.scss" with (
  $treeselect-checkbox-size: 1em,
  $treeselect-checkbox-border-radius: 0.25em,
  $treeselect-checkbox-color: var(--bs-border-color),
  $treeselect-checkbox-color-highlight: var(--bs-primary),
  $treeselect-checkbox-icon-width: 100%,
  $treeselect-checkbox-icon-height: 100%,
  $treeselect-checkbox-checked-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"),
  $treeselect-checkbox-indeterminate-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"),
);
```

Option rows use `content-visibility: auto`, so the browser skips rendering of rows outside the
menu viewport. It clips content overflowing a row; if a custom `option-label` slot renders
something outside of the row, set `$treeselect-option-content-visibility: visible`.

## Large trees

- Pass non-reactive options, e.g. `shallowRef` or `markRaw`, and replace the array to update them.
  Reactive options are deep-watched (for compatibility), which costs memory and time on large trees.
- The menu renders the first screens at once and the rest progressively, without blocking the page.
  For very large expanded trees or search results use `virtualScroll`.
- `npm run bench:browser` measures opening a menu with 11k expanded options in Chrome
  (about 130 ms to the first paint, about 100 ms with `virtualScroll`).

## Development

Requires Node.js 20.19+ or 22.12+ (Vite 8).

```sh
npm install
npm test               # tests (vitest + happy-dom)
npm run type-check
npm run build          # dist/ (ES, CJS, UMD, CSS, type declarations)
npm run bench          # benchmark in happy-dom
npm run bench:browser  # benchmark in Chrome (CHROME_PATH, BASE_REF=<git ref> to compare)
```

## License

MIT. Originally created by [Riophae Lee](https://github.com/riophae) and ported to Vue 3 by
[megafetis](https://github.com/megafetis).
