export function onLeftClick<T extends Function>(mouseDownHandler: T): (evt: MouseEvent, ...args: any[]) => void {
  return function onMouseDown(evt: MouseEvent, ...args: any[]): void {
    if (evt.type === 'mousedown' && evt.button === 0) {
      mouseDownHandler.call(this, evt, ...args)
    }
  }
}
