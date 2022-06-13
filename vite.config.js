import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  }
})
