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

const HOVER_SELECTOR = '.vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):not(.vue-treeselect__multi-value-item-new):hover'

describe('styles', () => {
  it('does not emit the multi-value hover rule by default (CSS overrides keep working)', () => {
    expect(compile()).not.toContain(HOVER_SELECTOR)
  })

  it('emits the multi-value hover rule when the hover variables are configured', () => {
    const css = compile('$treeselect-multi-value-item-bg-hover: #123456')
    const rule = css.slice(css.indexOf(HOVER_SELECTOR))
    expect(rule.slice(0, rule.indexOf('}'))).toContain('background: #123456')
    expect(compile('$treeselect-multi-value-font-color-hover: #654321')).toContain(HOVER_SELECTOR)
  })

  it('option rows skip rendering outside the viewport unless disabled', () => {
    expect(compile()).toContain('content-visibility: auto')
    expect(compile('$treeselect-option-content-visibility: visible')).not.toContain('contain-intrinsic-size')
  })
})
