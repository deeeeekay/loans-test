import { defineConfig, devices } from '@playwright/test';
import type { LOANSOptions } from './test/index';

import * as dotenv from "dotenv";
import * as path from 'path';

export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

// initialize dotenv
dotenv.config();

export default defineConfig<LOANSOptions>({

  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "./",

  // Run all tests in parallel.
  fullyParallel: true,

  /* Maximum time one test can run for. */
  timeout: 5 * 60 * 1000,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Parallel on CI only
  workers: process.env.CI ? 6 : 3,

  // Limit the number of failures on CI to save resources
  maxFailures: process.env.CI ? 200 : undefined,

  // Reporter to use
  reporter: [["list"], ["allure-playwright"]],

  // Timeout for each assertion
  expect: { timeout: 10000 },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL,

    bypassCSP: true,

    // Timeout for each action
    actionTimeout: 30 * 1000,

    // Timeout for each navigation action
    navigationTimeout: 60 * 1000,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Authentication',
      testMatch: ['tests/specs/auth/*'],
    },
    {
      name: 'AuthToken',
      testMatch: /global.setup\.ts/,
    },
    {
      name: 'Setup DB',
      testMatch: /global.db\.setup\.ts/,
    },
    {
      name: 'Loans_API - B2C',
      testMatch: ['test/specs/api/**/*.spec.ts'],
      use: {
        ...devices['Desktop Chrome'],
        isB2C: true,
      },
    }
  ],
}); 