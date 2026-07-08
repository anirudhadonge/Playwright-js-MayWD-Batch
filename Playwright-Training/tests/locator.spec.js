/***
 * Locator by role
 * Locator by text
 * Locator by label
 * Locator by placeholder
 * Locator by alt text
 * Locator by title:
 * Locator by test id : getTestId
 * Locator by css / xpath
 */
import { test } from '@playwright/test'; 

test('locate by role', async ({ page }) => {  
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.waitForTimeout(6000);
    await page.getByRole('checkbox').nth(0).check();
    await page.waitForTimeout(6000);
})

test('Locate by Label and text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByText(' Login').click();
    await page.waitForTimeout(6000);
})

test('Locate by placeholder', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.getByPlaceholder('First Crush').fill('tomsmith');
    await page.waitForTimeout(6000);
});

test('Locate by alt text', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByText('Get started').click();
    await page.waitForTimeout(3000);
    await page.getByAltText('Playwright logo').click();
    await page.waitForTimeout(3000);
})

test('Locate by title', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.getByTitle('Enter your first crush name').fill('tomsmith');
    await page.waitForTimeout(6000);
})

test('Locate by test id', async ({ page }) => {
    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.getByTestId('test-1').fill('tomsmith');
    await page.waitForTimeout(6000);
    //await page.getByTestId('test-1').clear();
})


test('Locate by css or xpath', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator("#username").fill('tomsmith');
    await page.locator("#password").fill('SuperSecretPassword!');
    // await page.getByLabel('Username').fill('tomsmith');
    // await page.getByLabel('Password').fill('SuperSecretPassword!');
    //await page.getByText(' Login').click();
    await page.locator('.radius').click();
    await page.waitForTimeout(6000);
})