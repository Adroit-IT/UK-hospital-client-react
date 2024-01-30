import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@apis': path.resolve(__dirname, './src/apis'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@configs': path.resolve(__dirname, './src/configs'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@middlewares': path.resolve(__dirname, './src/middlewares'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
});
