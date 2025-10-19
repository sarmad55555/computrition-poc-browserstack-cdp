import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
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
