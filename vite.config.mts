import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: resolve(import.meta.dirname, "tsconfig.json"),
            entryRoot: "src",
            outDirs: "dist/types",
        }),
    ],
    resolve: {alias: {"@": resolve(import.meta.dirname, "src")}},
    build: {
        lib: {
            entry: resolve(import.meta.dirname, "src/index.ts"),
            name: "Vue3Treeselect",
            fileName: "vue3-treeselect",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {vue: "Vue"},
                exports: "named",
            },
        },
    },
});
