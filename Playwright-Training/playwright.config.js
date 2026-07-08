// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  globalSetup: './GlobalSetup/GlobalSetup.js',
  testDir: './tests',
  timeout: 45000,
  expect:{
    timeout:5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true, // Thread invocation On the file level and other is on the test level
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  /* Opt out of parallel tests on CI. */
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"],
  ["html",{"open":"never"}],
  // ["json",{outputFile:"./Reports/jsonReport/report.json"}],
  // ["junit",{outputFile:"./Reports/junitReport/report.xml"}],
  ["allure-playwright"]
],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://the-internet.herokuapp.com/',
    // httpCredentials:{
    //   username: 'admin',
    //   password: 'admin'
    // },
  
    browserName: "firefox",
    //channel: "msedge", // msEdge, chrome use the Chromium engine.
    headless: false,
    viewport: null,
    launchOptions:{
      args:['--start-maximized']
    },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video:{
      mode:'retain-on-failure',
      size:{
        width: 1920,
        height: 1080
      }
    },
    screenshot:'only-on-failure'
  },
// expect(<value>).toBe(<value>)
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       browserName: 'chromium',
  //       headless: false,
  //       },
  //   },
  //   {
  //     name: "firefox",
  //     use: {
  //       browserName: "firefox",
  //       headless: false,
  //     },
  //   },
  // ],

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

