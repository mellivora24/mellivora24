import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/mellivora24/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@type': path.resolve(__dirname, './src/shared/types'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
})
