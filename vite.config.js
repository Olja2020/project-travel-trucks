// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project-travel-truck/',
  build: {
    sourcemap: true,
    minify: 'esbuild', // Используйте встроенную минификацию
  },
});
