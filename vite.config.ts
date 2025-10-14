// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }) // remove if you didn't install vite-plugin-checker
  ],
  server: { port: 3000 },
  preview: { port: 3000 }
});