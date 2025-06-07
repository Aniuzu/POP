
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Critical for Vercel
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash].[ext]",
        entryFileNames: "assets/[name]-[hash].js"
      }
    }
  }
});
'@ | Out-File -FilePath vite.config.js -Encoding utf8 -Force'