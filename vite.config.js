import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// Если добавите кастомный домен — поменяйте base на '/'.
export default defineConfig({
  base: '/voldey/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
    minify: 'esbuild',
    emptyOutDir: true,
  },
  plugins: [
    ViteImageOptimizer({
      jpg: { quality: 78, mozjpeg: true },
      jpeg: { quality: 78, mozjpeg: true },
      png: { quality: 85 },
      webp: { quality: 78 },
      // svg через svgo — дефолты плагина
    }),
  ],
});
