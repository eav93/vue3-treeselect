declare module 'watch-size' {
  function watchSize(
    el: HTMLElement,
    listener: (size: { width: number; height: number }) => void
  ): () => void
  export = watchSize
}
