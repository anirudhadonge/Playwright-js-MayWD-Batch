import {PageNavBar} from './PageNavBar.js';
import { expect } from '@playwright/test';

export class ProductPage extends PageNavBar {
    searchInput = '#search_product';
    searchButton = 'button#submit_search';
    productList = '.productinfo.text-center p';
    constructor(page) {
        super(page);
    }

    async enterSearchProduct(productName) {
        await this.fill(this.searchInput, productName);
        await this.click(this.searchButton);
    }

    async validateProductList(productName) {
        const productList = await this.page.locator(this.productList).allTextContents();
        for(let product of productList) {
            expect(product).toContain(productName);
            console.log(product);
        }
    }
}