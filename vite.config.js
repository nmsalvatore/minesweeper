import { defineConfig } from "vite";

export default defineConfig({
    base: "/monosweeper/",
    build: {
        outDir: "dist",
    },
    test: {
        environment: "jsdom",
    },
});
