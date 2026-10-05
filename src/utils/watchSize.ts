export interface Size {
  width: number
  height: number
}

/**
 * Call `listener` when the size of an element changes (not on registration).
 * @returns a function that stops watching
 */
export function watchSize($el: HTMLElement, listener: (size: Size) => void): () => void {
  if (typeof ResizeObserver === 'undefined') return () => {}

  let lastWidth = $el.offsetWidth
  let lastHeight = $el.offsetHeight
  const observer = new ResizeObserver(() => {
    const width = $el.offsetWidth
    const height = $el.offsetHeight
    if (width === lastWidth && height === lastHeight) return
    lastWidth = width
    lastHeight = height
    listener({ width, height })
  })
  observer.observe($el)

  return () => observer.disconnect()
}
