import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Remove this CSS block completely
  // css: {
  //   postcss: "./postcss.config.js",
  // },
});
