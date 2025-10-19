import { test, expect } from '@playwright/test';

test('Computrition homepage and navigation', async ({ page }) => {
  await page.goto('https://www.computrition.com');

  await expect(page).toHaveTitle(/Computrition/);
  await page.screenshot({ path: 'screenshots/homepage.png', fullPage: true });

  // ✅ Validate banner heading instead of hero image
  const bannerText = page.locator('h1, h2, .elementor-heading-title').first();
  await expect(bannerText).toBeVisible({ timeout: 10000 });

  const navLinks = await page.locator('nav a').all();
  for (let i = 0; i < Math.min(navLinks.length, 3); i++) {
    const href = await navLinks[i].getAttribute('href');
    if (href && href.startsWith('http')) {
      await page.goto(href);
      await page.screenshot({ path: `screenshots/nav-${i + 1}.png`, fullPage: true });
      await expect(page).toHaveURL(href);
    }
  }

  await expect(page.locator('footer')).toBeVisible();
});
