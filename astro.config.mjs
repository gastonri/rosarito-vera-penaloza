import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gastonri.github.io',
  base: '/rosarito-vera-penaloza',
  vite: {
    plugins: [tailwindcss()],
  },
});
