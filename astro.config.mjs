import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyle: false,
    })
  ],
  scopedStyleStrategy: "where",
  redirects: {
    "/": "/posts"
  },
  site: "https://simon020286.github.io/"
});