import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    babel({
      babelHelpers: 'bundled',
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
      plugins: ['babel-plugin-relay'],
      exclude: 'node_modules/**',
    }),
  ],
  define: {
    process: process, // Polyfill process globally
    'process.env': {},
    'process.version': '"v16.0.0"', // or whatever version you need
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
});
