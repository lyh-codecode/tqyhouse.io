import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@styles': path.resolve(__dirname, './src/styles'),
    }
  },
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
