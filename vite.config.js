import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public',
  root: './',
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: './postcss.config.cjs',
  },
});
