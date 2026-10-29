import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { existsSync, readFileSync } from 'node:fs';
import { pages, site } from '../src/data/site';

for (const route of pages) {
  test(`${route.title}: static page, links, images and accessibility`, async ({ page }) => {
    const errors: string[] = [];
    const brokenResources: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (response.url().startsWith('http://127.0.0.1:4322') && response.status() >= 400) brokenResources.push(response.url());
    });
    // The map is a third-party document; test our accessible iframe and fallback
    // independently of network availability or third-party map contents.
    await page.route('https://www.openstreetmap.org/**', (route) => route.fulfill({ contentType: 'text/html', body: '<html lang="pt"><title>Mapa</title><body>Mapa</body></html>' }));
    const response = await page.goto(route.href);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-PT');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new URL(route.href, site.url).href);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S.{40,}/);
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await expect(page.locator('a[href="tel:+351933530715"]').first()).toBeVisible();
    const links = await page.locator('a[href^="/"]').evaluateAll((anchors) => anchors.map((anchor) => anchor.getAttribute('href')!));
    for (const link of links) {
      const path = new URL(link, site.url).pathname;
      expect(existsSync(`dist${path === '/' ? '/index.html' : path}`), `Missing destination: ${path}`).toBe(true);
    }
    const imageProblems = await page.locator('main img').evaluateAll(async (images) => {
      for (const img of images) if (img instanceof HTMLImageElement && img.closest('dialog') === null) img.loading = 'eager';
      return await Promise.all(images.filter((img) => !img.closest('dialog')).map(async (element) => {
        const img = element as HTMLImageElement;
        try { await img.decode(); } catch { return img.currentSrc || img.src; }
        return img.naturalWidth > 0 && img.alt ? null : img.src;
      })).then((results) => results.filter(Boolean));
    });
    expect(imageProblems).toEqual([]);
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
    expect(brokenResources).toEqual([]);
  });
}

test('history: all four photographs match the larger image size', async ({ page }) => {
  await page.goto('/descobrir/historia-da-casa.html');
  const images = page.locator('.history-content .article-images img');
  await expect(images).toHaveCount(4);
  const dimensions = await images.evaluateAll((elements) => elements.map((image) => {
    const { width, height } = image.getBoundingClientRect();
    return { width, height, containerWidth: image.parentElement!.getBoundingClientRect().width };
  }));
  for (const image of dimensions) {
    expect(image.width).toBeGreaterThan(0);
    expect(image.height).toBeGreaterThan(0);
    expect(image.width).toBeCloseTo(dimensions[0].width, 0);
    expect(image.height).toBeCloseTo(dimensions[0].height, 0);
    // Both mobile columns and the full desktop column must be filled.
    expect(image.width / image.containerWidth).toBeCloseTo(page.viewportSize()!.width > 800 ? 1 : .5, 1);
  }
});

test('gallery: filter, deep link, lightbox, keyboard and focus restoration', async ({ page }) => {
  await page.goto('/galeria.html?categoria=quartos');
  const filters = page.getByRole('group', { name: 'Filtrar fotografias' });
  await expect(filters.getByRole('button', { name: 'Quartos', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.gallery-grid figure:visible')).toHaveCount(5);
  await expect(page.getByRole('status')).toHaveText('5 fotografias');
  for (const button of await filters.getByRole('button').all()) {
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(await page.locator('.gallery-grid figure:visible').count()).toBeGreaterThan(0);
  }
  await filters.getByRole('button', { name: 'Piscina', exact: true }).click();
  await expect(page.locator('.gallery-grid figure:visible')).toHaveCount(3);
  const firstPhoto = page.locator('.gallery-grid figure:visible a').first();
  await firstPhoto.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-photo-count]')).toHaveText('1 / 3');
  await expect(dialog.locator('.previous svg')).toHaveCSS('transform', 'matrix(-1, 0, 0, -1, 0, 0)');
  await dialog.getByRole('button', { name: 'Fotografia seguinte' }).click();
  await expect(dialog.locator('[data-photo-count]')).toHaveText('2 / 3');
  await dialog.getByRole('button', { name: 'Fotografia anterior' }).click();
  await expect(dialog.locator('[data-photo-count]')).toHaveText('1 / 3');
  await page.keyboard.press('ArrowRight');
  await expect(dialog.locator('[data-photo-count]')).toHaveText('2 / 3');
  await page.keyboard.press('ArrowLeft');
  await expect(dialog.locator('[data-photo-count]')).toHaveText('1 / 3');
  await page.keyboard.press('ArrowLeft');
  await expect(dialog.locator('[data-photo-count]')).toHaveText('3 / 3');
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(firstPhoto).toBeFocused();
  await firstPhoto.click();
  await dialog.getByRole('button', { name: 'Fechar fotografia' }).click();
  await expect(dialog).not.toBeVisible();
  await filters.getByRole('button', { name: 'Todas', exact: true }).click();
  await expect(page.locator('.gallery-grid figure:visible')).toHaveCount(20);
});

test('navigation: disclosure opens, links work, Escape returns focus', async ({ page }, testInfo) => {
  await page.goto('/');
  const mobile = testInfo.project.name === 'mobile';
  const disclosure = page.locator(mobile ? '.mobile-nav' : '.discover-menu');
  const summary = disclosure.locator('summary');
  await summary.click();
  await expect(disclosure).toHaveAttribute('open', '');
  if (!mobile) await expect(summary.locator('svg')).toHaveCSS('transform', 'matrix(-1, 0, 0, -1, 0, 0)');
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(disclosure).not.toHaveAttribute('open');
  await expect(summary).toBeFocused();
  await summary.click();
  await disclosure.getByRole('link', { name: 'História da Casa' }).click();
  await expect(page).toHaveURL(/\/descobrir\/historia-da-casa.html$/);
  await expect(page.locator('h1')).toHaveText('Uma casa. Muitas gerações.');
});

test('content and gallery links work without JavaScript', async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: testInfo.project.use.viewport });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4322/galeria.html');
  await expect(page.locator('.gallery-grid figure')).toHaveCount(20);
  await expect(page.locator('.gallery-filters')).not.toBeVisible();
  const photo = page.locator('[data-photo]').first();
  const href = await photo.getAttribute('href');
  expect(href).toMatch(/\.webp$/);
  const response = await page.request.get(href!);
  expect(response.status()).toBe(200);
  await page.goto('http://127.0.0.1:4322/');
  const summary = page.locator(testInfo.project.name === 'mobile' ? '.mobile-nav summary' : '.discover-menu summary');
  await summary.click();
  await expect(page.getByRole('link', { name: 'História da Casa', exact: true }).first()).toBeVisible();
  await context.close();
});

test('old URLs, sitemap, CNAME, 404 and no legacy features shipped', async ({ page }) => {
  expect(readFileSync('dist/CNAME', 'utf8').trim()).toBe('bivomafalda.pt');
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  for (const route of pages) expect(sitemap).toContain(new URL(route.href, site.url).href);
  for (const file of ['plugin', 'ajax', 'PRODUCT.md', 'AGENTS.md', '.git', 'node_modules', 'src']) expect(existsSync(`dist/${file}`)).toBe(false);
  await page.goto('/404.html');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await expect(page.getByRole('link', { name: 'Voltar ao início' })).toHaveAttribute('href', '/');
  await page.goto('/precos.html');
  const prices = await page.locator('main').innerText();
  for (const value of ['1 250 €', '1 500 €', '350 €', '65 €', '70 €', '60 €', '75 €']) expect(prices).toContain(value);
  await page.goto('/contactos.html');
  await expect(page.locator('main form')).toHaveCount(0);
  await expect(page.locator('iframe')).toHaveAttribute('src', /^https:\/\/www.openstreetmap.org\/export\/embed.html/);
  await expect(page.locator('iframe')).toHaveAttribute('title', /Localização/);
});
