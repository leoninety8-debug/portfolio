import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/leoninety8-debug/Portfolio_Fashli.git',
  plugins: [react()],
})
