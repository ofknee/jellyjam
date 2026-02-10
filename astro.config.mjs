// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  outDir: './docs', // <-- output here instead of /dist
  site: 'https://ofknee.github.io',
  base: '/jellyjam',
});