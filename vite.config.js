import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { fileURLToPath } from 'url';
import path from 'path';

const filename = fileURLToPath(import.meta.url);
const pathSegments = path.dirname(filename);

export default defineConfig({
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'styles/style.scss',
                    dest: 'styles'
                },
                {
                    src: 'styles/assets',
                    dest: 'styles'
                }
            ]
        })
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
            fileName: 'vue3-treeselect',
            formats: ['es', 'cjs', 'umd']
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
        rollupOptions: {
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // Add external deps here
                globals: {
                    vue: 'Vue',
                },
            },
        },
        sourcemap: 'hidden',
    },
})
