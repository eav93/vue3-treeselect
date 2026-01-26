import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
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
            output: {globals: {vue: "Vue"}},
        },
    },
});