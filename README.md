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

## Customizing styles

Instead of the compiled CSS you can use the SCSS source and configure it with variables
(see the top of [`sass/style.scss`](./sass/style.scss) for all of them):

```scss
@use "@eav93/vue3-treeselect/sass/style.scss" with (
  $treeselect-assets-path: "@eav93/vue3-treeselect/assets",
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
