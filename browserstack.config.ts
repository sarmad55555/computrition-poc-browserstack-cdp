import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    },
    {
      name: 'iPhone 14',
      use: {
        browserName: 'webkit',
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true
      }
    }
  ],
  use: {
    baseURL: 'https://www.computrition.com',
    trace: 'on',
    screenshot: 'on',
    video: 'on'
  },
  retries: 0,
  timeout: 60000,
  reporter: [['list'], ['html']]
});
