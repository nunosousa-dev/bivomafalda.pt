// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bivomafalda.pt',
  output: 'static',
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
