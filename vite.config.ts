import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@views': path.resolve(__dirname, './src/views'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@components': path.resolve(__dirname, './src/components'),
      '@middlewares': path.resolve(__dirname, './src/middlewares'),
    },
  },
});
