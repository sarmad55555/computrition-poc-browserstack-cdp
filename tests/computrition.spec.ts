import { chromium } from 'playwright';

(async () => {
  const caps = {
    'browser': 'chrome',
    'browser_version': 'latest',
    'device': 'iPhone 14',
    'realMobile': 'true',
    'name': 'Computrition CDP iPhone 14 Test',
    'build': 'CDP-PoC',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY,
    'client.playwrightVersion': '1.42.1'
  };

  const wsEndpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`;
  const browser = await chromium.connectOverCDP(wsEndpoint);
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.computrition.com');
  await page.screenshot({ path: 'screenshots/iphone14-homepage.png', fullPage: true });

  const bannerText = page.locator('h1, h2, .elementor-heading-title').first();
  await bannerText.waitFor({ state: 'visible', timeout: 10000 });

  const navLinks = await page.locator('nav a').all();
  for (let i = 0; i < Math.min(navLinks.length, 3); i++) {
    const href = await navLinks[i].getAttribute('href');
    if (href && href.startsWith('http')) {
      await page.goto(href);
      await page.screenshot({ path: `screenshots/iphone14-nav-${i + 1}.png`, fullPage: true });
    }
  }

  await page.locator('footer').waitFor({ state: 'visible', timeout: 5000 });
  await browser.close();
})();
