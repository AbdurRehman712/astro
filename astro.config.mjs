import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://abdurrehman712.github.io',
  base: '/astro',
  // output: "server",
  // adapter: deno()
});