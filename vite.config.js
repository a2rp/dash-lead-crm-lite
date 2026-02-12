import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    base: mode === "production" ? "/dash-lead-crm-lite/" : "/",
    define: {
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    build: {
        sourcemap: false,
        minify: "esbuild",
    },
}));
