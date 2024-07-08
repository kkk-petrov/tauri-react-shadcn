import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'node:path';
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(), tsConfigPaths()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
  envPrefix: ['VITE_', 'TAURI_'],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

