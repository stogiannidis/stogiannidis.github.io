// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://stogiannidis.github.io',
  output: 'static',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/blog/2026-01-02-stepping-into-2026': '/blog/stepping-into-2026/',
    '/blog/2026-01-22-how-to-read-research-papers-in-tiktok-era': '/blog/how-to-read-research-papers-in-tiktok-era/',
    '/blog/2026-11-18-rise-and-fall-of-academic-research': '/blog/rise-and-fall-of-academic-research/',
  },
  vite: {
    plugins: [
      {
        name: 'mind-the-gap-clean-url',
        configureServer(server) {
          serveMindTheGap(server);
        },
        configurePreviewServer(server) {
          serveMindTheGap(server);
        },
      },
    ],
  },
});

/** Serve the project page at /projects/mind-the-gap without exposing index.html. */
function serveMindTheGap(server) {
  server.middlewares.use((req, _res, next) => {
    const path = req.url?.split('?')[0];
    if (path === '/projects/mind-the-gap' || path === '/projects/mind-the-gap/') {
      const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
      req.url = `/projects/mind-the-gap/index.html${query}`;
    }
    next();
  });
}