import {readdirSync} from "fs";
import {resolve} from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const root = import.meta.dirname;

// Languages other than English are separate entry points (`@eav93/vue3-treeselect/locales/ru`),
// built in a second pass: `vite build --mode locales`
const localeEntries = Object.fromEntries(
    readdirSync(resolve(root, "src/locales"))
        .filter(file => file.endsWith(".ts") && file !== "index.ts")
        .map(file => [file.replace(/\.ts$/, ""), resolve(root, "src/locales", file)]),
);

export default defineConfig(({mode}) => mode === "locales"
    ? {
        build: {
            emptyOutDir: false,
            lib: {
                entry: localeEntries,
                formats: ["es", "cjs"],
                fileName: (format, name) => `locales/${name}.${format === "es" ? "mjs" : "cjs"}`,
            },
            rollupOptions: {external: ["vue"], output: {exports: "named"}},
        },
    }
    : {
        plugins: [
            vue(),
            dts({
                tsconfigPath: resolve(root, "tsconfig.json"),
                entryRoot: "src",
                outDirs: "dist/types",
            }),
        ],
        resolve: {alias: {"@": resolve(root, "src")}},
        build: {
            lib: {
                entry: resolve(root, "src/index.ts"),
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
