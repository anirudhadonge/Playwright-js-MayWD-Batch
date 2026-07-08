# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.js >> Search Product in Product Page
- Location: tests\AddToCart.spec.js:30:9

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import {test} from "@playwright/test";
  2  | 
  3  | 
  4  | export const baseTest = test.extend({
  5  |     loginPage: async({page}, use) => {
> 6  |         const loginPage = new LoginPage(page);
     |                           ^ ReferenceError: LoginPage is not defined
  7  |         await loginPage.goto("https://automationexercise.com/");
  8  |         await use(loginPage);   
  9  |     },
  10 |     productPage: async({page}, use) => {
  11 |         const productPage = new ProductPage(page);
  12 |         await use(productPage);
  13 |     }
  14 | })
```