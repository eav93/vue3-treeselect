import watchSizeForBrowsersOtherThanIE9 from 'watch-size'
import { removeFromArray } from './removeFromArray'

interface SizeWatchItem {
  $el: HTMLElement
  listener: (size: { width: number; height: number }) => void
  lastWidth: number | null
  lastHeight: number | null
}

let intervalId: ReturnType<typeof setInterval> | null
const registered: SizeWatchItem[] = []
const INTERVAL_DURATION = 100

function run(): void {
  intervalId = setInterval(() => {
    registered.forEach(test)
  }, INTERVAL_DURATION)
}

function stop(): void {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function test(item: SizeWatchItem): void {
  const { $el, listener, lastWidth, lastHeight } = item
  const width = $el.offsetWidth
  const height = $el.offsetHeight

  if (lastWidth !== width || lastHeight !== height) {
    item.lastWidth = width
    item.lastHeight = height

    listener({ width, height })
  }
}

function watchSizeForIE9(
  $el: HTMLElement,
  listener: (size: { width: number; height: number }) => void
): () => void {
  const item: SizeWatchItem = {
    $el,
    listener,
    lastWidth: null,
    lastHeight: null,
  }
  const unwatch = (): void => {
    removeFromArray(registered, item)
    if (!registered.length) stop()
  }

  registered.push(item)
  // The original watch-size will call the listener on initialization.
  // Keep the same behavior here.
  test(item)
  run()

  return unwatch
}

export function watchSize(
  $el: HTMLElement,
  listener: (size: { width: number; height: number }) => void
): () => void {
  // See: https://stackoverflow.com/a/31293352
  const isIE9 = (document as any).documentMode === 9
  // watch-size will call the listener on initialization.
  // Disable this behavior with a lock to achieve a clearer code logic.
  let locked = true
  const wrappedListener = (...args: [{ width: number; height: number }]): void => {
    if (!locked) listener(...args)
  }
  const implementation = isIE9
    ? watchSizeForIE9
    : watchSizeForBrowsersOtherThanIE9
  const removeSizeWatcher = implementation($el, wrappedListener)
  locked = false // unlock after initialization

  return removeSizeWatcher
}
