import { describe, expect, it } from 'vitest'
import { resolve } from 'path'
import { pathToFileURL } from 'url'
import * as sass from 'sass'

const root = resolve(import.meta.dirname, '..')

function compile(config = ''): string {
  return sass.compileString(`@use "sass/style"${config ? ` with (${config})` : ''};`, {
    loadPaths: [root],
    importers: [{
      // material-colors ships both .sass and .scss files
      findFileUrl: (url: string) => url.startsWith('material-colors') || url.startsWith('sass-easing')
        ? new URL(pathToFileURL(resolve(root, 'node_modules', url + (url.startsWith('material-colors') ? '.scss' : ''))))
        : null,
    }],
    silenceDeprecations: ['import'],
  }).css
}

/** The declarations of the first rule with the selector */
function rule(css: string, selector: string): string {
  const start = css.indexOf(selector + ' {')
  expect(start, `rule ${selector}`).toBeGreaterThanOrEqual(0)
  return css.slice(start, css.indexOf('}', start))
}

const HOVER_SELECTOR = '.vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):not(.vue-treeselect__multi-value-item-new):hover'

describe('styles', () => {
  it('does not emit the multi-value hover rule by default (CSS overrides keep working)', () => {
    expect(compile()).not.toContain(HOVER_SELECTOR)
  })

  it('emits the multi-value hover rule when the hover variables are configured', () => {
    const css = compile('$treeselect-multi-value-item-bg-hover: #123456')
    expect(rule(css, HOVER_SELECTOR)).toContain('#123456')
    expect(compile('$treeselect-multi-value-font-color-hover: #654321')).toContain(HOVER_SELECTOR)
  })

  it('indents the rows with the `--level` custom property instead of per-level rules', () => {
    const css = compile()
    expect(rule(css, '.vue-treeselect__option')).toContain(
      'padding-inline-start: calc(var(--_ts-padding) + var(--level, 0) * var(--_ts-narrow-cell-width))',
    )
    expect(rule(css, '.vue-treeselect__list-item > .vue-treeselect__tip')).toContain(
      'calc(var(--_ts-padding) + (var(--level, 0) + 1) * var(--_ts-narrow-cell-width))',
    )
    expect(css).not.toContain('indent-level')
    // deprecated, still accepted
    expect(compile('$treeselect-max-level: 20')).not.toContain('indent-level-8')
  })

  it('uses logical properties for RTL, except for the arrow direction', () => {
    const css = compile()
    const arrowRule = rule(css, '[dir=rtl] .vue-treeselect,\n[dir=rtl] .vue-treeselect__portal-target,\n.vue-treeselect__portal-target[dir=rtl]')
    expect(arrowRule).toContain('--vue-treeselect-arrow-direction: -1')
    expect(css.replace(arrowRule, '')).not.toContain('[dir')
    expect(rule(css, '.vue-treeselect__option-arrow')).toContain('rotate(calc(var(--vue-treeselect-arrow-direction, 1) * -90deg))')
    expect(css).not.toMatch(/padding-(left|right): [^;]*(level|cell)/)
    expect(css).toContain('text-align: start')
  })

  it('uses the Vue 3 transition class names', () => {
    const css = compile()
    expect(css).toContain('.vue-treeselect__multi-value-item--transition-enter-from')
    expect(css).toContain('.vue-treeselect__multi-value-item--transition-leave-to')
    expect(css).not.toMatch(/transition-enter[,\s]/)
  })

  it('does not transition `all`', () => {
    expect(compile()).not.toMatch(/transition(-property)?:[^;]*\ball\b/)
  })

  it('exposes the SCSS values as CSS custom properties', () => {
    const css = compile('$treeselect-control-border-color: #abcdef, $treeselect-padding: 7px')
    const theme = rule(css, '.vue-treeselect,\n.vue-treeselect__portal-target')
    expect(theme).toContain('--_ts-control-border-color: var(--vue-treeselect-control-border-color, #abcdef)')
    expect(theme).toContain('--_ts-padding: var(--vue-treeselect-padding, 7px)')
    expect(theme).toContain('--_ts-control-inner-height: calc(var(--_ts-control-height) - 2 * var(--_ts-control-border-width))')
    expect(rule(css, '.vue-treeselect__control')).toContain('var(--_ts-control-border-color)')
    // the compiled default is not repeated in the rules
    expect(css.split('#abcdef')).toHaveLength(2)
    expect(compile('$treeselect-control-inner-height: 30px')).toContain('--_ts-control-inner-height: 30px')
  })

  it('draws the checkbox marks as SVG masks painted with the mark color', () => {
    const css = compile()
    expect(css).not.toContain('.png')
    const marks = rule(css, '.vue-treeselect__check-mark,\n.vue-treeselect__minus-mark')
    expect(marks).toContain('background-color: var(--_ts-checkbox-mark-color)')
    expect(marks).not.toContain('background-image')
    expect(rule(css, '.vue-treeselect__check-mark')).toMatch(/^\s*mask-image: url\("data:image\/svg\+xml,/m)
    expect(rule(css, '.vue-treeselect__check-mark')).toContain('-webkit-mask-image')
    expect(css).toContain('--_ts-checkbox-mark-color: var(--vue-treeselect-checkbox-mark-color, #fff)')
    expect(css).toContain('--_ts-checkbox-mark-color-disabled: var(--vue-treeselect-checkbox-mark-color-disabled, #e1e1e1)')
  })

  it('accepts custom mark images', () => {
    const css = compile(`$treeselect-checkbox-checked-image: url("data:image/svg+xml,custom"), $treeselect-checkbox-disabled-checked-image: url("data:image/svg+xml,custom-disabled")`)
    expect(rule(css, '.vue-treeselect__check-mark')).toContain('mask-image: url("data:image/svg+xml,custom")')
    expect(rule(css, '.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark')).toContain('mask-image: url("data:image/svg+xml,custom-disabled")')
    // by default the disabled marks only differ in color
    expect(rule(compile(), '.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark,\n.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark')).not.toContain('mask')
    expect(compile()).not.toContain('.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark {')
  })

  it('still accepts the deprecated PNG icon variables (ignored)', () => {
    const css = compile(`$treeselect-assets-path: "/img", $treeselect-checkbox-checked-icon: "/img/checkbox-checked.png", $treeselect-checkbox-disabled-indeterminate-icon: "/img/x.png"`)
    expect(css).not.toContain('.png')
    expect(css).not.toContain('/img')
    expect(css).toBe(compile())
  })

  it('option blocks skip rendering outside the viewport unless disabled', () => {
    const css = compile()
    expect(rule(css, '.vue-treeselect__list-chunk')).toContain('content-visibility: var(--vue-treeselect-option-content-visibility, auto)')
    expect(rule(css, '.vue-treeselect__option')).not.toContain('content-visibility')
    expect(css).not.toContain('contain-intrinsic-size')
    expect(compile('$treeselect-option-content-visibility: visible')).toContain('--vue-treeselect-option-content-visibility, visible)')
  })

  it('removes the dead rules', () => {
    const css = compile()
    for (const dead of ['prepare-enter', '::-ms-clear', '__menu-placeholder', '__menu--transition', '-webkit-overflow-scrolling', 'transition: 0s']) {
      expect(css).not.toContain(dead)
    }
  })
})
