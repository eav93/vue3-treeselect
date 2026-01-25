import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
        },
    },

    build: {
        lib: {
            entry: new URL('./src/index.ts', import.meta.url).pathname,
            name: 'Vue3Treeselect',
            formats: ['es', 'cjs', 'umd'],
            fileName: (format) => {
                if (format === 'es') return 'index.mjs'
                if (format === 'cjs') return 'index.js'
                return 'index.umd.js'
            },
        },

        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: { vue: 'Vue' }, // используется только UMD, для es/cjs просто игнорируется
            },
        },

        sourcemap: 'hidden',
    },
})
