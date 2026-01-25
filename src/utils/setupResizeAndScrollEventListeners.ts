function findScrollParents($el: HTMLElement): (HTMLElement | Window)[] {
  const $scrollParents: (HTMLElement | Window)[] = []
  let $parent: HTMLElement | null = $el.parentNode as HTMLElement | null

  while ($parent && $parent.nodeName !== 'BODY' && $parent.nodeType === document.ELEMENT_NODE) {
    if (isScrollElement($parent)) $scrollParents.push($parent)
    $parent = $parent.parentNode as HTMLElement | null
  }
  $scrollParents.push(window)

  return $scrollParents
}

function isScrollElement($el: HTMLElement): boolean {
  // Firefox wants us to check `-x` and `-y` variations as well
  const { overflow, overflowX, overflowY } = getComputedStyle($el)
  return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)
}

export function setupResizeAndScrollEventListeners(
  $el: HTMLElement,
  listener: EventListener
): () => void {
  const $scrollParents = findScrollParents($el)

  window.addEventListener('resize', listener, { passive: true } as AddEventListenerOptions)
  $scrollParents.forEach(scrollParent => {
    scrollParent.addEventListener('scroll', listener, { passive: true } as AddEventListenerOptions)
  })

  return function removeEventListeners(): void {
    window.removeEventListener('resize', listener, { passive: true } as AddEventListenerOptions)
    $scrollParents.forEach($scrollParent => {
      $scrollParent.removeEventListener('scroll', listener, { passive: true } as AddEventListenerOptions)
    })
  }
}
