import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind(), svelte()],
  output: 'server',
  adapter: vercel(),
});