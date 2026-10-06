import { defineConfig } from "vite";
import { resolve } from "node:path";

// Two separate pages in one project:
//   /            → the motorcycle portfolio (index.html)
//   /grandline/  → the Grand Line portfolio (grandline/index.html)
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        grandline: resolve(import.meta.dirname, "grandline/index.html"),
      },
    },
  },
});
