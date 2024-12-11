import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TocKitSvelte',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
});
