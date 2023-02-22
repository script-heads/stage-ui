import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgrPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  build: {
    target: 'es2015',
    outDir: path.resolve(__dirname, '../../build/docs'),
  },
  server: {
    host: '0.0.0.0',
    port: 9050,
  },
})
