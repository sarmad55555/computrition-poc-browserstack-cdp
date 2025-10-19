import { test } from '@playwright/test';

test('Homepage loads and footer is visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('footer', { state: 'visible', timeout: 10000 });
  await page.screenshot({ path: `screenshots/homepage-${test.info().project.name}.png`, fullPage: true });
});
