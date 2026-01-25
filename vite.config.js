import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'styles/assets/*',
                    dest: '.',
                },
            ],
        }),
    ],

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
                globals: { vue: 'Vue' },
                assetFileNames: 'assets/[name][extname]',
            },
        },

        sourcemap: 'hidden',
        copyPublicDir: true,
    },
})
