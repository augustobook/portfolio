import { defineConfig } from 'astro/config';

// SITE_URL e BASE_PATH são definidos no deploy (GitHub Actions / Docker).
// Para domínio próprio ou repositório <usuario>.github.io, BASE_PATH fica "/".
export default defineConfig({
  site: process.env.SITE_URL || 'https://augustofm.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
