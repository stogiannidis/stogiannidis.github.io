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
});