import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/NRIExpress/',   // 👈 VERY IMPORTANT
  plugins: [react()],
})
