# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITest.spec.js >> Add a new Booking
- Location: tests\APITest.spec.js:33:6

# Error details

```
TypeError: Cannot read properties of undefined (reading 'ok')
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
  35 |   // const response = await request.post(
  36 |   //   process.env.API_URL + enpoint.CreateBooking,
  37 |   //   {
  38 |   //     data: body,
  39 |   //     headers: header,
  40 |   //   },
  41 |   // );
  42 |   const response = await getResponse(request, process.env.API_URL + enpoint.CreateBooking, "POST", header, body);
> 43 |   expect(response.ok()).toBeTruthy();
     |                   ^ TypeError: Cannot read properties of undefined (reading 'ok')
  44 |   expect(response.status()).toBe(200);
  45 |   const responseBody = await response.json();
  46 |   console.log(responseBody);
  47 | });
  48 | 
  49 | async function getBookingIDs(request) {
  50 |   const response = await request.get(
  51 |     "https://restful-booker.herokuapp.com/booking",
  52 |   );
  53 |   expect(response.ok()).toBeTruthy();
  54 |   expect(response.status()).toBe(200);
  55 |   console.log(response.status());
  56 |   return await response.json();
  57 | }
  58 | 
  59 | async function getBookingDetails(request, id) {
  60 |   const response = await request.get(
  61 |     `https://restful-booker.herokuapp.com/booking/${id}`,
  62 |     {
  63 |       headers: header,
  64 |     },
  65 |   );
  66 |   console.log(response.headers());
  67 |   expect(response.ok()).toBeTruthy();
  68 |   expect(response.status()).toBe(200);
  69 |   console.log(response.status());
  70 |   return await response.json();
  71 | }
  72 | 
  73 | 
  74 | async function getResponse(request, endpoint,method, header=undefined, body=undefined ) {
  75 |  let response;
  76 |  switch(method){
  77 |   case "GET":
  78 |     response = await request.get(endpoint, { headers: header ,data: body });
  79 |     break;
  80 |   case "POST":
  81 |     response = await request.post(endpoint, { headers: header, data: body });
  82 |     break;
  83 |   // Add more cases as needed
  84 |   return response;
  85 |  }
  86 | 
  87 | }
  88 |   
```