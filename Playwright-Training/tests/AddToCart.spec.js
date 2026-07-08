//import {test, expect} from "@playwright/test";
import {baseTest} from "../Fixtures/Fixture.js";
import {expect} from "@playwright/test";
const testData = require("../Data/AddToCart.json");
// import { ProductPage } from "../PageModel/ProductPage.js";
// import { LoginPage } from "../PageModel/LoginPage.js";
const evData = testData[process.env.ENV];
// let loginPage;
// let productPage;

// test.beforeEach('Navigate to the Login Page and Login', async({page})=>{
//     loginPage = new LoginPage(page);
//     await loginPage.goto("https://automationexercise.com/");
//     await loginPage.clickLoginLink();
//     await loginPage.login("anirudha.donge@gmail.com","password25");
// })

// test("Search Product in Product Page", async({page})=>{
//     loginPage.clickProductLink();
//     productPage = new ProductPage(page);
//     await productPage.enterSearchProduct("Tshirt");
//     await productPage.validateProductList("shirt");
// })


baseTest.beforeEach('Navigate to the Login Page and Login', async({loginPage})=>{
    await loginPage.clickLoginLink();
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
})

baseTest("Search Product in Product Page", async({loginPage, productPage})=>{
    await loginPage.clickProductLink();
    await productPage.enterSearchProduct(evData.productName);
    await productPage.validateProductList(evData.productName);
})
