/**
 * NODE_ENV of the consumer's build.
 * `process.env.NODE_ENV` is replaced statically by bundlers; the UMD build
 * used directly in a browser has no `process`, which is treated as production.
 */
export const NODE_ENV: string = (() => {
  try {
    return process.env.NODE_ENV || 'production'
  } catch {
    return 'production'
  }
})()
