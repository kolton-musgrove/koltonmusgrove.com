import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import markdownLoader from "./packages/vite-plugin-markdown-loader/index.js";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tanstackRouter({ autoCodeSplitting: true }),
    markdownLoader(),
  ],
});
