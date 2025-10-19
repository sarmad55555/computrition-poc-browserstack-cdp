import { test, expect } from '@playwright/test';

test('Homepage loads and footer is visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('footer', { state: 'visible', timeout: 10000 });
  await page.screenshot({ path: `screenshots/homepage-${test.info().project.name}.png`, fullPage: true });
});

test('Footer links are present and valid', async ({ page }) => {
  await page.goto('/');
  const footerLinks = page.locator('footer a');
  const count = await footerLinks.count();
  expect(count).toBeGreaterThan(3);
  await footerLinks.first().click();
  await expect(page).toHaveURL(/.+/);
});
