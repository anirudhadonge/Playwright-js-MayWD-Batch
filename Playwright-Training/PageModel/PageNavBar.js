import { BasePage } from "./BasePage.js";
export class PageNavBar extends BasePage {
    homelink = "a[href='/']";
    productlink = "a[href='/products']";
    cartlink = "a[href='/cart']";
    loginlink = "a[href='/login']";
    constructor(page) {
        super(page);
    }

    async clickHomeLink() {
        await this.click(this.homelink);
    }

    async clickProductLink() {
        await this.click(this.productlink);
    }

    async clickCartLink() {
        await this.click(this.cartlink);
    }

    async clickLoginLink() {
        await this.click(this.loginlink);
    }
}