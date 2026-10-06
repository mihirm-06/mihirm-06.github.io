// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mihirm-06.github.io',
  // Fetch every page link in the background once the page has loaded, so clicking the nav
  // opens a page that is already in the browser's cache.
  prefetch: { prefetchAll: true, defaultStrategy: 'load' },
});
