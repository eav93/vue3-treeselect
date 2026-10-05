export interface DebouncedFunction<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void
  /** Drop a pending trailing call */
  cancel: () => void
  /** Run a pending trailing call now */
  flush: () => void
}

/**
 * Debounce with leading and trailing calls (like lodash's `{ leading: true, trailing: true }`):
 * the first call runs immediately, further calls within `wait` ms run once at the end.
 */
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  wait: number,
  options: { leading?: boolean, trailing?: boolean } = {}
): DebouncedFunction<T> {
  const { leading = false, trailing = true } = options
  let timer: ReturnType<typeof setTimeout> | null = null
  let pendingArgs: Parameters<T> | null = null

  const invoke = (): void => {
    const args = pendingArgs
    pendingArgs = null
    if (args) fn(...args)
  }

  const onTimeout = (): void => {
    timer = null
    if (trailing) invoke()
    else pendingArgs = null
  }

  const debounced = ((...args: Parameters<T>) => {
    const isFirstCall = timer === null
    if (timer) clearTimeout(timer)
    timer = setTimeout(onTimeout, wait)
    if (isFirstCall && leading) {
      fn(...args)
    } else {
      pendingArgs = args
    }
  }) as DebouncedFunction<T>

  debounced.cancel = () => {
    if (timer) clearTimeout(timer)
    timer = null
    pendingArgs = null
  }

  debounced.flush = () => {
    if (timer) clearTimeout(timer)
    timer = null
    invoke()
  }

  return debounced
}
