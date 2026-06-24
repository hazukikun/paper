import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The site is served from https://hazukikun.github.io/paper/, so all asset
  // paths must be prefixed with the repo name.
  base: "/paper/",
});
