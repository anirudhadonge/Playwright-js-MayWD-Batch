import { test, expect } from "@playwright/test";
import header from "../Data/Header.json";
import body from "../Data/ApiBody.json";
import enpoint from "../Data/EndPoint.json";

const testHeader1 = {
  "Content-Type": "application/json",
};

// const testHeader2 = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

// const data = {
//   firstname: "Anirudha",
//   lastname: "Donge",
//   totalprice: 1000,
//   depositpaid: true,
//   bookingdates: {
//     checkin: "2026-07-07",
//     checkout: "2026-07-14",
//   },
//   additionalneeds: "Tea",
// };
test("Get all booking IDs", async ({ request }) => {
  const bookingIDs = await getBookingIDs(request);
  console.log(bookingIDs[0]);
  const details = await getBookingDetails(request, bookingIDs[0].bookingid);
  console.log(details);
});

test("Add a new Booking", async ({ request }) => {
  console.log(process.env.API_URL + enpoint.CreateBooking);
  // const response = await request.post(
  //   process.env.API_URL + enpoint.CreateBooking,
  //   {
  //     data: body,
  //     headers: header,
  //   },
  // );
  const response = await getResponse(request, process.env.API_URL + enpoint.CreateBooking, "POST", header, body);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

async function getBookingIDs(request) {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(response.status());
  return await response.json();
}

async function getBookingDetails(request, id) {
  const response = await request.get(
    `https://restful-booker.herokuapp.com/booking/${id}`,
    {
      headers: header,
    },
  );
  console.log(response.headers());
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  console.log(response.status());
  return await response.json();
}


async function getResponse(request, endpoint,method, header=undefined, body=undefined ) {
 let response;
 switch(method){
  case "GET":
    response = await request.get(endpoint, { headers: header ,data: body });
    break;
  case "POST":
    response = await request.post(endpoint, { headers: header, data: body });
    break;
  // Add more cases as needed
 
 }
return response;
}
  