import {test} from "@playwright/test";
import { LoginPage } from "../PageModel/LoginPage.js";
import { ProductPage } from "../PageModel/ProductPage.js";


export const baseTest = test.extend({
    loginPage: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(process.env.URL);
        await use(loginPage);   
    },
    productPage: async({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    }
})