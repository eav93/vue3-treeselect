import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: resolve(__dirname, "tsconfig.json"),
            entryRoot: "src",
            outDirs: "dist/types",
        }),
    ],
    resolve: {alias: {"@": resolve(__dirname, "src")}},
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
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
