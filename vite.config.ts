import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Tells Vite 7 this is a single page app, forcing it to fallback 
  // address-bar URLs to index.html automatically without breaking asset modules
  appType: 'spa',
})