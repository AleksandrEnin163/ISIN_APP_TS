import { defineConfig } from 'playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    // Browser options
    headless: false,
    // Base URL
    baseURL: 'http://localhost:3000/'
    // Additional options
  }
});
