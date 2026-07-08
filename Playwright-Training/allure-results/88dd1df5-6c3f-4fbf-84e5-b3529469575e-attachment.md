# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITest.spec.js >> Get all booking IDs
- Location: tests\APITest.spec.js:7:5

# Error details

```
ReferenceError: constole is not defined
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const header = {
  4  |   "Content-Type": "application/json",
  5  | };
  6  | 
  7  | test("Get all booking IDs", async ({ request }) => {
  8  |   const bookingIDs = await getBookingIDs(request);
  9  |   console.log(bookingIDs[0]);
  10 |   const details = await getBookingDetails(request, bookingIDs[0].bookingid);
> 11 |   constole.log(details);
     |   ^ ReferenceError: constole is not defined
  12 | });
  13 | 
  14 | test("Get booking details", async ({ request }) => {
  15 |   const bookingDetails = await getBookingDetails(request, 1);
  16 |   console.log(bookingDetails);
  17 | });
  18 | 
  19 | async function getBookingIDs(request) {
  20 |   const response = await request.get(
  21 |     "https://restful-booker.herokuapp.com/booking",
  22 |   );
  23 |   expect(response.ok()).toBeTruthy();
  24 |   expect(response.status()).toBe(200);
  25 |   console.log(response.status());
  26 |   return await response.json();
  27 | }
  28 | 
  29 | async function getBookingDetails(request, id) {
  30 |   const response = await request.get(
  31 |     `https://restful-booker.herokuapp.com/booking/${id}`,{
  32 |         headers: header
  33 |     }
  34 |   );
  35 |   expect(response.ok()).toBeTruthy();
  36 |   expect(response.status()).toBe(200);
  37 |   console.log(response.status());
  38 |   return await response.json();
  39 | }
  40 | 
```