import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: './src' }],
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
});
