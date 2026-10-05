/**
 * Escape a value for use in a CSS selector (e.g. an attribute value)
 */
export function cssEscape(value: string): string {
  return typeof CSS !== 'undefined' && CSS.escape ? CSS.escape(value) : value.replace(/["\\]/g, '\\$&')
}
