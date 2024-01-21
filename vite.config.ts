import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@asset': path.resolve(__dirname, './src/assets'),
      '@config': path.resolve(__dirname, './src/configs'),
      '@component': path.resolve(__dirname, './src/components'),
      '@atom': path.resolve(__dirname, './src/components/atoms'),
      '@icon': path.resolve(__dirname, './src/components/atoms/Icon'),
      '@molecule': path.resolve(__dirname, './src/components/molecules'),
      '@organism': path.resolve(__dirname, './src/components/organisms'),
    },
  },
});
