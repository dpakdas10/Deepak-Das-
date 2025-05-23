import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Include .JPG files as assets
  server: {
    host: true, // This will listen on all network interfaces
    port: 5173
  }
})
