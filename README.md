# Casa da Bivó Mafalda

Static Portuguese website for the guest house in Pinheiros, Tabuaço, Douro.

## Modern site

The Astro application lives in **`site/`**. It builds plain HTML, CSS and a small amount of JavaScript for navigation and the photo gallery. No backend, database, API keys, booking engine or contact-form service is required.

```sh
cd site
npm ci
npm run dev -- --background
```

Open the URL printed by Astro. Requires Node **22.23.4+**; CI uses Node 24.

```sh
npm run check
npm run build
npx playwright install chromium
npm test
npm run preview
```

Manage the development server with `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop`.

### Editing content

| Content | Location |
| --- | --- |
| Address, phones, email, navigation, amenities | `site/src/data/site.ts` |
| Gallery descriptions and categories | `site/src/data/gallery.ts` |
| Prices | `site/src/pages/precos.astro` |
| House history and regional guides | `site/src/pages/descobrir/` |
| Page layouts and shared sections | `site/src/components/`, `site/src/layouts/` |
| Design tokens and shared styles | `site/src/styles/global.css` |
| Source photographs | `site/src/assets/` |

Astro creates responsive WebP images during the build. Fonts are self-hosted from Fontsource; no third-party font requests are needed. Gallery filtering and the native image dialog are progressively enhanced; all photographs and navigation remain usable without JavaScript.

The seven original page URLs are preserved, including `.html` paths, alongside a custom `404.html`, `robots.txt` and sitemap. Contact options are working `tel:` and `mailto:` links. The contact page includes a lazy-loaded OpenStreetMap embed (an external request, with no API key) and independent map links as a fallback.

### Deployment

`.github/workflows/static.yml` installs, type-checks, builds and tests the Astro site, then deploys **only `site/dist/`** to GitHub Pages on pushes to `main`. The custom domain is retained in `site/public/CNAME`.

The original root HTML/CSS/LESS/jQuery site remains untouched as a migration reference, but is no longer included in the deployed artifact. Template demos, newsletter/search stubs and the testimonials carousel are not part of the new application.

### Content to confirm before launch

- Prices are migrated from the existing site, not independently verified. The original house-rental text includes the ambiguous line “Crianças até aos 12 anos”; its meaning should be clarified by the owner.
- Historical route descriptions and distances are retained. The walking page asks visitors to confirm current local conditions and signage.
- No registration number, operator identity, review rating or social profile has been invented.
