# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITest.spec.js >> Add a new Booking
- Location: tests\APITest.spec.js:33:6

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import header from "../Data/Header.json";
  3  | import body from "../Data/ApiBody.json";
  4  | import enpoint from "../Data/EndPoint.json";
  5  | 
  6  | const testHeader1 = {
  7  |   "Content-Type": "application/json",
  8  | };
  9  | 
  10 | // const testHeader2 = {
  11 | //   "Content-Type": "application/json",
  12 | //   Accept: "application/json",
  13 | // };
  14 | 
  15 | // const data = {
  16 | //   firstname: "Anirudha",
  17 | //   lastname: "Donge",
  18 | //   totalprice: 1000,
  19 | //   depositpaid: true,
  20 | //   bookingdates: {
  21 | //     checkin: "2026-07-07",
  22 | //     checkout: "2026-07-14",
  23 | //   },
  24 | //   additionalneeds: "Tea",
  25 | // };
  26 | test("Get all booking IDs", async ({ request }) => {
  27 |   const bookingIDs = await getBookingIDs(request);
  28 |   console.log(bookingIDs[0]);
  29 |   const details = await getBookingDetails(request, bookingIDs[0].bookingid);
  30 |   console.log(details);
  31 | });
  32 | 
  33 | test.only("Add a new Booking", async ({ request }) => {
  34 |   console.log(process.env.API_URL + enpoint.CreateBooking);
  35 |   const response = await request.post(
  36 |     process.env.API_URL + enpoint.CreateBooking,
  37 |     {
  38 |       data: body,
  39 |       headers: header,
  40 |     },
  41 |   );
> 42 |   expect(response.ok()).toBeTruthy();
     |                         ^ Error: expect(received).toBeTruthy()
  43 |   expect(response.status()).toBe(200);
  44 |   const responseBody = await response.json();
  45 |   console.log(responseBody);
  46 | });
  47 | 
  48 | async function getBookingIDs(request) {
  49 |   const response = await request.get(
  50 |     "https://restful-booker.herokuapp.com/booking",
  51 |   );
  52 |   expect(response.ok()).toBeTruthy();
  53 |   expect(response.status()).toBe(200);
  54 |   console.log(response.status());
  55 |   return await response.json();
  56 | }
  57 | 
  58 | async function getBookingDetails(request, id) {
  59 |   const response = await request.get(
  60 |     `https://restful-booker.herokuapp.com/booking/${id}`,
  61 |     {
  62 |       headers: header,
  63 |     },
  64 |   );
  65 |   console.log(response.headers());
  66 |   expect(response.ok()).toBeTruthy();
  67 |   expect(response.status()).toBe(200);
  68 |   console.log(response.status());
  69 |   return await response.json();
  70 | }
  71 | 
```