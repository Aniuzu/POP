import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Remove vite-plugin-vercel
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // Add other extensions if needed
  }
})