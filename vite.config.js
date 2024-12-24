import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  build: {
    outDir: '../build',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  base: "./"
})