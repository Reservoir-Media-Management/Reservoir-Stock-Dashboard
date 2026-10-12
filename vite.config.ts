import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Reservoir-Stock-Dashboard/',
  plugins: [react()],
})