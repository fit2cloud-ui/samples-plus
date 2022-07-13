import path from "path";
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {viteMockServe} from "vite-plugin-mock";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  return {
    base: './',
    plugins: [
      vue(),
      DefineOptions(),
      viteMockServe({
        mockPath: "mock", // 解析，路径可根据实际变动
        localEnabled: command === 'serve', // 开发环境
        prodEnabled: command !== 'serve', // 生产环境设为true，也可以根据官方文档格式
        injectCode: `
          import { setupProdMockServer } from '../mock';
          setupProdMockServer();`,
        watchFiles: true, // 监听文件内容变更
        logger: true,
      })],
    resolve: {
      // Vite路径别名配置
      alias: {
        '@': path.resolve('./src')
      }
    },
  }
})
