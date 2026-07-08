# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Hooks.spec.js >> Fill test and select Options are in a group >> Authencation test
- Location: tests\Hooks.spec.js:58:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.subheader')
Expected: "Welcome to the Secure Area."
Received: "Welcome to the Secure Area. When you are done click logout below."
Timeout:  5000ms

Call log:
  - Expect "soft toHaveText" with timeout 5000ms
  - waiting for locator('.subheader')
    14 × locator resolved to <h4 class="subheader">Welcome to the Secure Area. When you are done cli…</h4>
       - unexpected value "Welcome to the Secure Area. When you are done click logout below."

```

```yaml
- heading "Welcome to the Secure Area. When you are done click logout below." [level=4]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | // test('test 1', async()=>{
  4   | //     console.log("This is test1");
  5   | // })
  6   | 
  7   | // test('Test 2 ',async()=>{
  8   | //     console.log("This is test 2")
  9   | // })
  10  | 
  11  | let firstTest;
  12  | let secondTest;
  13  | 
  14  | 
  15  | test.describe("Fill test and select Options are in a group", async () => {
  16  |   test.beforeAll("This is  Before All Method", async () => {
  17  |     console.log("This is Before All Method");
  18  |   });
  19  | 
  20  |   test.beforeEach("This is before each method", async ({ page }) => {
  21  |     await test.step("Navigating to Hero ku App", async () => {
  22  |       await page.goto("/");
  23  |     });
  24  |   });
  25  | 
  26  |   test.afterEach("This is After Each Method", async () => {
  27  |     console.log("This is After Each Method");
  28  |   });
  29  | 
  30  |   test.afterAll("This is the After All Method", async () => {
  31  |     console.log("This is After All Method");
  32  |   });
  33  |   test("Fill and press sequencally", async ({ page }) => {
  34  | 
  35  |     test.slow(); // by default the timeout period is 5000, when add the annotation, this test gets a timeout period of 5000 * 3 = 15000
  36  |     await page.locator("[href='/login']").click();
  37  |     // await page.locator("#username").fill('tomsmith');
  38  |     // await page.waitForTimeout(6000);
  39  |     // await page.locator("#username").fill('SuperSecretPassword!');
  40  |     // await page.waitForTimeout(6000);
  41  |     //await page.locator("#username").pressSequentially('tomsmith',{delay: 1000});
  42  |     await page.locator("#username").pressSequentially("SuperSecretPassword");
  43  |     await page.keyboard.press("Enter");
  44  |     await page.locator("#username").pressSequentially("Tom-smith");
  45  |     await page.waitForTimeout(6000);
  46  |   });
  47  | 
  48  |   test("Select options", async ({ page }) => {
  49  |     await page.locator('[href="/dropdown"]').click();
  50  |     await page.locator("#dropdown").selectOption({ value: "1" });
  51  |     await page.waitForTimeout(3000);
  52  |     await page.locator("#dropdown").selectOption({ label: "Option 2" });
  53  |     await page.waitForTimeout(3000);
  54  |     await page.locator("#dropdown").selectOption({ index: 1 });
  55  |     await page.waitForTimeout(3000);
  56  |   });
  57  | 
  58  |   test("Authencation test", async ({ page }) => {
  59  |       await test.step("Navigate to Login page",async()=>{
  60  |         await page.locator("[href='/login']").click();
  61  |     })
  62  |     await test.step("Enter User name", async () => {
  63  |       await page.getByLabel("Username").fill("tomsmith");
  64  |     });
  65  | 
  66  |     await test.step("Enter Password", async () => {
  67  |       await page.getByLabel("Password").fill("SuperSecretPassword!");
  68  |     });
  69  | 
  70  |     await test.step("I click on Login button", async () => {
  71  |       await page.getByText(" Login").nth(1).click();
  72  |     });
  73  | 
  74  |     await test.step("The page should have 'Welcome to the Secure Area.'", async () => {
  75  |       await expect
  76  |         .soft(page.locator(".subheader"))
> 77  |         .toHaveText("Welcome to the Secure Area.");
      |          ^ Error: expect(locator).toHaveText(expected) failed
  78  |     });
  79  | 
  80  |     await test.step("Other validation ", async () => {
  81  |       await expect(page.locator('[href="/logout"]')).toBeVisible();
  82  |       await expect(page).toHaveTitle("The Internet");
  83  |       await expect(page).toHaveURL("/secure");
  84  |     });
  85  |   });
  86  | });
  87  | test.describe("This is another describe block", async () => {
  88  |   test("Checkboxes and radio buttons", async ({ page }) => {
  89  |     await page.goto("/");
  90  |     await page.locator('[href="/checkboxes"]').click();
  91  |     await page.waitForTimeout(3000);
  92  |     await page.locator("#checkboxes input").nth(0).check();
  93  |     await page.waitForTimeout(3000);
  94  |     console.log(await page.locator("#checkboxes input").nth(0).isChecked());
  95  |     await expect(page.locator("#checkboxes input").nth(0)).not.toBeChecked();
  96  |     await page.locator("#checkboxes input").nth(1).uncheck();
  97  |     await page.waitForTimeout(3000);
  98  |     console.log(await page.locator("#checkboxes input").nth(1).isChecked());
  99  |     // await expect(page.locator('#checkboxes input').nth(1)).not.toBeChecked();
  100 |   });
  101 | });
  102 | 
```