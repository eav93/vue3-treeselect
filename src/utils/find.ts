export function find<T>(
  arr: T[],
  predicate: (value: T, index: number, arr: T[]) => boolean,
  ctx?: any
): T | undefined {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (predicate.call(ctx, arr[i], i, arr)) return arr[i]
  }
  return undefined
}
