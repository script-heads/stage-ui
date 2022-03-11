import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  assetsInclude: ['**/*.svg'],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../../build/docs'),
  },
  server: {
    port: 9050,
  },
})
