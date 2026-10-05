# Changelog

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
