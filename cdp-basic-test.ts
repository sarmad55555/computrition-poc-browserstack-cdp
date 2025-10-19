import 'dotenv/config';
import { chromium } from 'playwright';

const caps = {
  browser: 'chrome',
  browser_version: 'latest',
  os: 'Windows',
  os_version: '11',
  name: 'CDP Basic Test',
  build: 'cdp-poc-build',
  'browserstack.username': 'sarmadnawaz_OAnZBU',
  'browserstack.accessKey': 'NKYXLefxpurp525nZefp',
  'client.playwrightVersion': '1.56.1',
  'browserstack.source': 'playwright-cdp'
};

(async () => {
  const wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`;
  const browser = await chromium.connectOverCDP(wsEndpoint);
  const context = browser.contexts()[0];
  const page = await context.newPage();

  await page.goto('https://example.com');
  console.log('✅ Page loaded:', await page.title());

  await browser.close();
})();
