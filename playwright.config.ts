import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  }
});