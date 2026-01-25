export function onLeftClick<T extends Function>(mouseDownHandler: T): (this: any, evt: MouseEvent, ...args: any[]) => void {
  return function onMouseDown(this: any, evt: MouseEvent, ...args: any[]): void {
    if (evt.type === 'mousedown' && evt.button === 0) {
      mouseDownHandler.call(this, evt, ...args)
    }
  }
}
