import { noop } from './noop'
import { NODE_ENV } from './env'

export const warning = NODE_ENV === 'production'
  ? /* istanbul ignore next */ noop
  : function warning(checker: () => boolean, complainer: () => string): void {
    if (!checker()) {
      const message = ['[Vue-Treeselect Warning]'].concat(complainer())
      // eslint-disable-next-line no-console
      console.error(...message)
    }
  }
