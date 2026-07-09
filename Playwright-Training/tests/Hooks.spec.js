import { test, expect } from "@playwright/test";

// test('test 1', async()=>{
//     console.log("This is test1");
// })

// test('Test 2 ',async()=>{
//     console.log("This is test 2")
// })

let firstTest;
let secondTest;


test.describe("Fill test and select Options are in a group", async () => {
  test.beforeAll("This is  Before All Method", async () => {
    console.log("This is Before All Method");
  });

  test.beforeEach("This is before each method", async ({ page }) => {
    await test.step("Navigating to Hero ku App", async () => {
      await page.goto("/");
    });
  });

  test.afterEach("This is After Each Method", async () => {
    console.log("This is After Each Method");
  });

  test.afterAll("This is the After All Method", async () => {
    console.log("This is After All Method");
  });
  test("Fill and press sequencally", async ({ page }) => {

    //test.slow(); // by default the timeout period is 5000, when add the annotation, this test gets a timeout period of 5000 * 3 = 15000
    await page.locator("[href='/login']").click();
    // await page.locator("#username").fill('tomsmith');
    // await page.waitForTimeout(6000);
    // await page.locator("#username").fill('SuperSecretPassword!');
    // await page.waitForTimeout(6000);
    //await page.locator("#username").pressSequentially('tomsmith',{delay: 1000});
    await page.locator("#username").pressSequentially("SuperSecretPassword");
    await page.keyboard.press("Enter");
    await page.locator("#username").pressSequentially("Tom-smith");
    await page.waitForTimeout(6000);
  });

  test("Select options", async ({ page }) => {
    await page.locator('[href="/dropdown"]').click();
    await page.locator("#dropdown").selectOption({ value: "1" });
    await page.waitForTimeout(3000);
    await page.locator("#dropdown").selectOption({ label: "Option 2" });
    await page.waitForTimeout(3000);
    await page.locator("#dropdown").selectOption({ index: 1 });
    await page.waitForTimeout(3000);
  });

  test("Authencation test", async ({ page }) => {
      await test.step("Navigate to Login page",async()=>{
        await page.locator("[href='/login']").click();
    })
    await test.step("Enter User name", async () => {
      await page.getByLabel("Username").fill("tomsmith");
    });

    await test.step("Enter Password", async () => {
      await page.getByLabel("Password").fill("SuperSecretPassword!");
    });

    await test.step("I click on Login button", async () => {
      await page.getByText(" Login1").nth(1).click();
    });

    await test.step("The page should have 'Welcome to the Secure Area.'", async () => {
      await expect
        .soft(page.locator(".subheader"))
        .toHaveText("Welcome to the Secure Area.");
    });

    await test.step("Other validation ", async () => {
      await expect(page.locator('[href="/logout"]')).toBeVisible();
      await expect(page).toHaveTitle("The Internet");
      await expect(page).toHaveURL("/secure");
    });
  });
});
test.describe("This is another describe block", async () => {
  test("Checkboxes and radio buttons", async ({ page }) => {
    await page.goto("/");
    await page.locator('[href="/checkboxes"]').click();
    await page.waitForTimeout(3000);
    await page.locator("#checkboxes input").nth(0).check();
    await page.waitForTimeout(3000);
    console.log(await page.locator("#checkboxes input").nth(0).isChecked());
    await expect(page.locator("#checkboxes input").nth(0)).not.toBeChecked();
    await page.locator("#checkboxes input").nth(1).uncheck();
    await page.waitForTimeout(3000);
    console.log(await page.locator("#checkboxes input").nth(1).isChecked());
    // await expect(page.locator('#checkboxes input').nth(1)).not.toBeChecked();
  });
});
