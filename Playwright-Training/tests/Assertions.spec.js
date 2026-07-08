import {test, expect} from '@playwright/test'

test('Locate by Label and text', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByText(' Login').nth(1).click();
    await expect(page.getByText(' Login').nth(1)).not.toBeVisible();
    await expect.soft(page.locator(".subheader")).toHaveText('Welcome to the Secure Area.')
    await expect(page.locator('[href="/logout"]')).toBeVisible();
    await expect(page).toHaveTitle('The Internet');
    await expect(page).toHaveURL("https://the-internet.herokuapp.com/secure");
    let a = 10;
    let b = 9
    expect(a).toBe(b);
    await page.waitForTimeout(6000);
})

// test.only('With Sample html page', async({page})=>{
//     await page.goto("C:\Users\adonge2d\source\Playwright-js-MayWD-Batch\Playwright-Training\ExampleHtml\login.html");
//     await expect(page.locator('#login-btn')).toBeVisible();
//     await expect(page.locator("#login-btn")).toBeEnabled();
// })
