function isPlainObject(value: any): boolean {
  if (value == null || typeof value !== 'object') return false
  return Object.getPrototypeOf(value) === Object.prototype
}

function copy(obj: any, key: string, value: any): void {
  if (isPlainObject(value)) {
    obj[key] || (obj[key] = {})
    deepExtend(obj[key], value)
  } else {
    obj[key] = value
  }
}

export function deepExtend<T extends object, S extends object>(target: T, source: S): T & S {
  if (isPlainObject(source)) {
    const keys = Object.keys(source)

    for (let i = 0, len = keys.length; i < len; i++) {
      copy(target, keys[i], (source as any)[keys[i]])
    }
  }

  return target as T & S
}
