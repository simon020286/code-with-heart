import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyle: false
  }), sitemap()],
  scopedStyleStrategy: "where",
  redirects: {
    "/": "/posts"
  },
  site: "https://simon020286.github.io/"
});