import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { basename } from 'path';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/assc_ploiesti/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
