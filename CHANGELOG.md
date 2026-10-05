# Changelog

## 0.7.0

Performance (measured in Chrome, 11k expanded rows unless noted; see `npm run bench:browser` and
`bench/browser/perf.mjs`):

- Rows are rendered in blocks (`.vue-treeselect__list-chunk`, ~100 rows) with stable membership;
  `content-visibility: auto` applies to blocks instead of rows, so the browser no longer re-checks
  every row on each scroll or layout. Scrolling 46–59 → 16.6 ms/frame (60 fps), ArrowDown 40 → 16 ms,
  selecting an option with the menu open 44 → 16.6 ms, opening the menu until all rows are rendered
  784 → 377 ms, clearing a search 1.0 → 0.43 s. 55k rows: rendered after 6.4 s instead of over 2 minutes.
- Option rows are a render function: no comment or fragment nodes (224 instead of 282 DOM nodes per
  20 rows), lighter mount and unmount.
- Search: row objects are reused between searches, node flags are only written when they change,
  keyboard navigation scans from the current row instead of indexing all options.
- Reactive `options` (`ref([...])`) are normalized from their raw objects: as fast as plain arrays
  (was 2.2x slower). Children loaded with `loadOptions` always re-initialize the tree.
- The first chunk of progressive rendering is scheduled after the first frame.
- Dependencies `lodash`, `watch-size` and `is-promise` replaced by small built-ins (`ResizeObserver`
  for the menu size): the ES bundle is 20.5 kB gzip (was 21.5 kB, 25.4 kB with the inline locales of 0.5).
- **Breaking:** the `assets` directory (PNG checkbox icons) is no longer shipped.

- Styles: runtime theming with CSS custom properties. Every color and size of the stylesheet has a
  `--vue-treeselect-<name>` property (`--vue-treeselect-control-border-color` for
  `$treeselect-control-border-color`, ...) with the SCSS value as the default; set them on
  `.vue-treeselect` or on `:root` (which also covers the menu with `appendToBody`). The SCSS
  variables keep working as before.
- Styles: the indentation is computed from the `--level` custom property of the rows
  (`padding + level * $treeselect-narrow-cell-width`) instead of generated per-level rules, so it
  works at any depth (levels above `$treeselect-max-level` = 8 were not indented).
  `$treeselect-max-level` is deprecated and ignored. The `.vue-treeselect__indent-level-N` classes
  are still set. Custom `padding-left` rules on `.vue-treeselect__option` now have the same
  specificity as the indentation rule (`padding-inline-start`): they used to be overridden by it.
- Styles: right-to-left layout uses CSS logical properties (`padding-inline-*`, `text-align: start`,
  ...), so it also follows `direction: rtl` set with CSS. The only `[dir="rtl"]` rule left mirrors
  the branch arrows with `--vue-treeselect-arrow-direction: -1`.
- Styles: checkbox marks are CSS masks painted with `$treeselect-checkbox-icon-color` / `-disabled`
  (`--vue-treeselect-checkbox-mark-color` / `-disabled` at runtime). `$treeselect-checkbox-checked-image`
  & co. are now mask images: only the shape of a custom image matters, its colors are ignored.
  **Breaking:** the PNG icons of vue-treeselect are not supported anymore. `$treeselect-assets-path`
  and `$treeselect-checkbox-checked-icon` / `-indeterminate-icon` / `-disabled-*-icon` are still
  accepted by `@use ... with (...)` but ignored.
- Styles: `content-visibility: auto` is applied to blocks of rows (`.vue-treeselect__list-chunk`) instead
  of every row; `$treeselect-option-content-visibility` keeps its meaning (also
  `--vue-treeselect-option-content-visibility`). `$treeselect-option-intrinsic-height` and
  `treeselect-line-height-to-length()` are removed (the component sets the intrinsic size of a block).
- Styles: the multi-value chip enter transition works again (Vue 3 class name `-enter-from`; the
  Vue 2 `-enter` class was never applied). Transitions name their properties instead of `all`.
  `$treeselect-multi-value-item-bg-new-hover` is applied to hovered new chips (it was declared but unused).
- Styles: removed dead CSS (`--prepare-enter` arrow rules, `::-ms-clear`, `.vue-treeselect__menu-placeholder`,
  empty menu transition rules, IE/iOS workarounds). The `str-replace` function and `retina` mixin are gone.

## 0.6.0

- Locales are separate entry points: `import { ru } from '@eav93/vue3-treeselect/locales/ru'`.
  Only English is in the main bundle, other languages are bundled only when imported (each < 1 kB).
  **Breaking:** language codes with the `locale` prop (`locale="ru"`) require `registerLocale('ru', ru)`
  first; `locales` is no longer exported from the package root. Pass the locale object instead
  (`:locale="ru"`, `app.provide(TREESELECT_LOCALE, ru)`).

## 0.5.1

- 10 more locales: `ar`, `hi`, `ko`, `nl`, `sv`, `cs`, `vi`, `id`, `he`, `ro` (22 in total).

## 0.5.0

- Localization: built-in texts for `en`, `ru`, `uk`, `de`, `fr`, `es`, `it`, `pt`, `pl`, `tr`, `zh`, `ja`.
  Use the `locale` prop (a language code or your own texts) or provide a locale app-wide with
  `app.provide(TREESELECT_LOCALE, 'ru')`. The text props (`placeholder`, `noResultsText`, ...) keep
  working and take precedence. Exported: `locales`, the individual locales, `TREESELECT_LOCALE`,
  `resolveLocale`, types `TreeselectTexts` / `TreeselectLocale`.

## 0.4.0

- Checkbox marks are inline SVG instead of PNG images: no asset files and no `$treeselect-assets-path`
  needed, crisp at any size and zoom, ~3.5 kB less CSS. New variables: `$treeselect-checkbox-icon-color`
  (`-disabled`) for the colors and `$treeselect-checkbox-checked-image` / `-indeterminate-image`
  (`-disabled-...`) for custom marks, e.g. the Bootstrap ones. The marks are centered in the checkbox
  (they were 1 px off to the right) and can be sized in `%` (`$treeselect-checkbox-icon-width/height`).
  The PNG icons are still shipped and used when `$treeselect-checkbox-checked-icon` & co. are set to a path.
- `$treeselect-checkbox-border-radius` is applied (it was declared but unused).

## 0.3.2

- Built with Vite 8 (Rolldown): the ES build is ~11% smaller. No changes in behavior or styles
  (checked with the test suite and pixel comparison of rendered menus).
- Tooling: Vue 3.5.43, TypeScript 6 (TypeScript 7 doesn't provide the JS API that `vue-tsc` and
  the type declaration generator need yet), Sass 1.105, Vitest 5; configs are ESM (`.mts`).

## 0.3.1

Bugs reported in [riophae/vue-treeselect](https://github.com/riophae/vue-treeselect) and the Vue 3 ports that also affected this fork:

- The search is re-run when the options change while searching, keeping the branches the user expanded (riophae#556).
- After a search the first match is highlighted, so Enter selects it instead of its ancestor (#445, #178, #471).
- Collapsing and expanding a branch with matches during a search keeps showing only the matches (#313, #354).
- Reopening a single select highlights the selected option (#197).
- Home, End, ← and → move the caret while the search input has text.
- `clearOnSelect` works in async search mode (#312, #435).
- In flat mode `autoSelectAncestors` + `autoSelectDescendants` (and the deselect pair) can be combined (#260, #325).
- No duplicate ids in the value after the options of a selected branch change (#376).
- Backspace / Delete don't clear a single value when `clearable` is `false` (#235).
- A value missing from the options doesn't go through the `normalizer` anymore, which crashed normalizers expecting the user's data shape (#550, #491).
- `modelValue: ''` shows the placeholder in single mode, unless an option has the id `''` (#324, #173).
- In-place changes of a reactive `modelValue` array are applied.
- Changing `defaultOptions` is applied in async mode while the search is empty (#535, #203).
- `mousedown` is not stopped anymore, so parent elements receive it (#454).
- Form controls rendered in the `before-list` / `after-list` slots can be focused without closing the menu (#284, #516).
- With `searchable: false`, clicking the control toggles the menu (#497).
- `<KeepAlive>`: the menu is closed when the component is deactivated.
- SSR: no hydration mismatch with `appendToBody` (the portal is rendered after mount), default instance ids come from `useId()`.
- `appendToBody` keeps the text direction (`dir`) of the control (#495).
- `import Treeselect from '@eav93/vue3-treeselect'` returns the component in Node (SSR, Nuxt, vitest): the package has an `exports` map. Any file of the package can still be imported (`./*`).
- Types: `options` / `defaultOptions` accept readonly arrays and any object shape (for use with `normalizer`); slots are typed.

## 0.3.0

### Fixed (regressions of the Composition API rewrite)

- Async search (`async: true`) crashed when rendering the menu and never showed results.
- Clicking the control did not focus the input (no search by mouse, no `--focused` class); `focusInput()` / `blurInput()` did nothing; `autoFocus` was ignored.
- Branch counts (`showCount`) were always `0`, `isDefaultExpanded` on nested nodes did not expand ancestors, and `hasDisabledDescendants` was never set, so selecting a parent also selected its disabled descendants.
- Checkboxes were never shown in `multiple` mode.
- Slots `option-label`, `value-label`, `before-list` and `after-list` were ignored.
- Arrow placeholders for leaves, `flattenSearchResults` and `showCountOnSearch` did not work.
- Backspace/Delete and End did not work for a node with id `0`.
- `traverseAllNodesDFS` / `traverseAllNodesByIndex` exposed on the component ref required the root nodes as first argument.
- Changing the `instance-id` prop was not reflected in emitted events.
- `import Treeselect from '@eav93/vue3-treeselect'` (default export) works again.
- Restored prop validation warnings (`async` without `searchable`, `flat` without `multiple`, ...).

### Fixed (inherited from vue-treeselect)

- `hasDisabledDescendants` now propagates to all ancestors (riophae/vue-treeselect#305): selecting a grandparent no longer selects a disabled grandchild.
- Enter no longer selects a highlighted option that is hidden by the current search.
- Search is not triggered in the middle of an IME composition (Chinese, Japanese, Korean input).
- `appendToBody` uses `<Teleport>` instead of a separate Vue app, so plugins, global components and `provide` work inside the menu and its slots.
- Remote search no longer leaks a deep watcher per call.
- Promise-based `loadOptions` can resolve with the options for `ASYNC_SEARCH`.
- Children loaded with `loadOptions` appear for non-reactive options as well (plain arrays, `shallowRef`, `markRaw`).
- `$treeselect-multi-value-item-bg-hover` / `$treeselect-multi-value-font-color-hover` work: the hover selector inherited from vue-treeselect never matched. The rule is only emitted when one of these variables is configured, so CSS overrides of the item colors are not affected.
- UMD build no longer throws `process is not defined` when used without a bundler.

### Performance

Measured on trees with 11k–55k nodes (see `npm run bench`):

- Nodes are `shallowReactive` instead of deeply reactive.
- Selection changes update checkbox states incrementally (O(changed nodes × depth)) instead of rebuilding them for the whole tree, and only the affected options re-render. Deselecting a branch with 5000 children went from ~28 s to ~50 ms.
- Local search is a single pass over the tree.
- Tree traversals, value computation and keyboard navigation no longer have quadratic parts.
- Large multi-value selections skip `TransitionGroup` animations.
- Option rows use flexbox instead of `display: table` and `content-visibility: auto`, so the browser skips style and layout of rows outside the menu viewport. Set `$treeselect-option-content-visibility: visible` if a custom `option-label` slot renders content outside of its row (it would be clipped).
- Removed the per-branch `<Transition>` around option arrows: its "prepare" animation never ran under Vue 3 (the CSS targets Vue 2's `-enter` class), but it cost ~110 ms for 1000 expanded branches.
- The menu is rendered as a flat list of rows (one pass over the tree, shared with keyboard navigation) instead of recursive option components with a `<Transition>` per branch. Options hidden by a search are not rendered at all.
- Option rows are lightweight: no computed properties, no listeners (mouse events are delegated to the list), the arrow is an inline SVG.
- Large lists are rendered progressively: the first screens synchronously, the rest in ~25 ms chunks between frames. Keyboard navigation, `End` and scrolling render the needed rows immediately.
- Opening a menu with 11k expanded options in Chrome (`npm run bench:browser`): first paint ~1200 ms → ~130 ms, longest main-thread block ~1175 ms → ~100 ms, all rows rendered after ~900 ms; ~100 ms with `virtualScroll`.
- New `virtualScroll` prop renders only the visible options; recommended for large expanded trees and search results.

### Added

- `virtualScroll` and `optionHeight` props.
- `searchDebounceDelay` prop (default 200 ms).
- Type declarations (`dist/types`).
- Test suite (`npm test`) and benchmarks (`npm run bench` in happy-dom, `npm run bench:browser` in Chrome).

### Changed

- Options are rendered as a flat list: `.vue-treeselect__list-item` elements are no longer nested in per-branch `.vue-treeselect__list` elements (indentation still uses `.vue-treeselect__indent-level-N`), the `vue-treeselect__list--transition` hook for expand/collapse animations is gone, and options hidden by a search are removed from the DOM instead of getting `vue-treeselect__option--hide` (both CSS rules were removed).
- Internal composables are no longer exported from the package entry.
- `TreeselectInstance` type is now `TreeselectContext` (the old name is kept as a deprecated alias).
- For best performance with large trees pass non-reactive options (`shallowRef` or `markRaw`) and replace the array to update them. Reactive options are still deep-watched for compatibility.
