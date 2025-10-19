import { chromium } from 'playwright';

(async () => {
  const device = process.env.BROWSERSTACK_DEVICE || 'Desktop Chrome';

  const caps: Record<string, any> = {
    browser: 'chrome',
    browser_version: 'latest',
    name: `CDP Minimal Test - ${device}`,
    build: 'CDP-PoC',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
    'client.playwrightVersion': '1.54.2'
  };

  if (device === 'iPhone 14') {
    caps.device = 'iPhone 14';
    caps.realMobile = 'true';
  } else {
    caps.os = 'osx';
    caps.os_version = 'ventura';
  }

  const wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`;
  const browser = await chromium.connectOverCDP(wsEndpoint);
  const page = await browser.newPage();

  await page.goto('https://www.computrition.com');
  await page.screenshot({ path: `screenshots/${device}-minimal.png`, fullPage: true });

  await browser.close();
})();