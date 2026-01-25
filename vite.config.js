import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            '@': path.resolve(pathSegments, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'Vue3Treeselect',
            fileName: 'vue3-treeselect'
        },
        rollupOptions: {
            external: ['vue'],
            output: [
                {
                    format: 'es',
                    exports: 'named',
                    entryFileNames: '[name].mjs'
                },
                {
                    format: 'cjs',
                    exports: 'named',
                    entryFileNames: '[name].js'
                },
                {
                    format: 'umd',
                    exports: 'named',
                    entryFileNames: '[name].umd.js',
                    name: 'Vue3Treeselect',
                    globals: {
                        vue: 'Vue'
                    }
                }
            ]
        },
        commonjsOptions: {
            requireReturnsDefault: 'preferred',
            transformMixedEsModules: true,
        },
        sourcemap: 'hidden',
    },
})
