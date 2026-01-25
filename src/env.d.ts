/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  // Used for TypeScript module resolution
  // eslint-disable-next-line import/no-default-export
  export default component
}
