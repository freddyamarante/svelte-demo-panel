import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
});
