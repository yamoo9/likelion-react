import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';

const babelConfig = {
  plugins: [
    'babel-plugin-styled-components',
    {
      displayName: true,
      fileName: false,
    },
  ],
};

export default defineConfig({
  plugins: [
    react({
      babel: babelConfig,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    host: 'localhost',
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
