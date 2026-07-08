# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.js >> Search Product in Product Page
- Location: tests\AddToCart.spec.js:30:9

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "shirt"
Received string:    "Pure Cotton V-Neck T-Shirt"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Anirudha Donge
  - generic [ref=e44]:
    - img "Website for practice" [ref=e45]
    - textbox "Search Product" [ref=e46]: Tshirt
    - button "" [ref=e47] [cursor=pointer]:
      - generic [ref=e48]: 
  - generic [ref=e51]:
    - generic [ref=e53]:
      - heading "Category" [level=2] [ref=e54]
      - generic [ref=e55]:
        - heading " Women" [level=4] [ref=e58]:
          - link " Women" [ref=e59] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e61]: 
            - text: Women
        - heading " Men" [level=4] [ref=e64]:
          - link " Men" [ref=e65] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e67]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e70]:
          - link " Kids" [ref=e71] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e73]: 
            - text: Kids
      - generic [ref=e74]:
        - heading "Brands" [level=2] [ref=e75]
        - list [ref=e77]:
          - listitem [ref=e78]:
            - link "(6) Polo" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e80]: (6)
              - text: Polo
          - listitem [ref=e81]:
            - link "(5) H&M" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e83]: (5)
              - text: H&M
          - listitem [ref=e84]:
            - link "(5) Madame" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e86]: (5)
              - text: Madame
          - listitem [ref=e87]:
            - link "(3) Mast & Harbour" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e89]: (3)
              - text: Mast & Harbour
          - listitem [ref=e90]:
            - link "(4) Babyhug" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e92]: (4)
              - text: Babyhug
          - listitem [ref=e93]:
            - link "(3) Allen Solly Junior" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e95]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e96]:
            - link "(3) Kookie Kids" [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e98]: (3)
              - text: Kookie Kids
          - listitem [ref=e99]:
            - link "(5) Biba" [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e101]: (5)
              - text: Biba
    - generic [ref=e103]:
      - heading "Searched Products" [level=2] [ref=e104]
      - generic [ref=e106]:
        - generic [ref=e107]:
          - generic [ref=e108]:
            - img "ecommerce website products" [ref=e109]
            - heading "Rs. 400" [level=2] [ref=e110]
            - paragraph [ref=e111]:
              - text: Men
              - link "Tshirt" [ref=e112] [cursor=pointer]:
                - /url: "#"
                - img [ref=e113]
                - text: Tshirt
            - generic [ref=e115] [cursor=pointer]:
              - generic [ref=e116]: 
              - text: Add to cart
          - generic [ref=e117]:
            - heading "Rs. 400" [level=2] [ref=e118]
            - paragraph [ref=e119]: Men Tshirt
            - generic [ref=e120] [cursor=pointer]:
              - generic [ref=e121]: 
              - text: Add to cart
        - list [ref=e123]:
          - listitem [ref=e124]:
            - link " View Product" [ref=e125] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e126]: 
              - text: View Product
      - generic [ref=e128]:
        - generic [ref=e129]:
          - generic [ref=e130]:
            - img "ecommerce website products" [ref=e131]
            - heading "Rs. 1299" [level=2] [ref=e132]
            - paragraph [ref=e133]:
              - text: Pure Cotton V-Neck
              - link "T-Shirt" [ref=e134] [cursor=pointer]:
                - /url: "#"
                - img [ref=e135]
                - text: T-Shirt
            - generic [ref=e137] [cursor=pointer]:
              - generic [ref=e138]: 
              - text: Add to cart
          - generic [ref=e139]:
            - heading "Rs. 1299" [level=2] [ref=e140]
            - paragraph [ref=e141]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e142] [cursor=pointer]:
              - generic [ref=e143]: 
              - text: Add to cart
        - list [ref=e145]:
          - listitem [ref=e146]:
            - link " View Product" [ref=e147] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e148]: 
              - text: View Product
      - generic [ref=e150]:
        - generic [ref=e151]:
          - generic [ref=e152]:
            - img "ecommerce website products" [ref=e153]
            - heading "Rs. 1000" [level=2] [ref=e154]
            - paragraph [ref=e155]: Green Side Placket Detail T-Shirt
            - generic [ref=e156] [cursor=pointer]:
              - generic [ref=e157]: 
              - text: Add to cart
          - generic [ref=e158]:
            - heading "Rs. 1000" [level=2] [ref=e159]
            - paragraph [ref=e160]: Green Side Placket Detail T-Shirt
            - generic [ref=e161] [cursor=pointer]:
              - generic [ref=e162]: 
              - text: Add to cart
        - list [ref=e164]:
          - listitem [ref=e165]:
            - link " View Product" [ref=e166] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e167]: 
              - text: View Product
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]:
            - img "ecommerce website products" [ref=e172]
            - heading "Rs. 1500" [level=2] [ref=e173]
            - paragraph [ref=e174]:
              - text: Premium Polo
              - link "T-Shirts" [ref=e175] [cursor=pointer]:
                - /url: "#"
                - img [ref=e176]
                - text: T-Shirts
            - generic [ref=e178] [cursor=pointer]:
              - generic [ref=e179]: 
              - text: Add to cart
          - generic [ref=e180]:
            - heading "Rs. 1500" [level=2] [ref=e181]
            - paragraph [ref=e182]: Premium Polo T-Shirts
            - generic [ref=e183] [cursor=pointer]:
              - generic [ref=e184]: 
              - text: Add to cart
        - list [ref=e186]:
          - listitem [ref=e187]:
            - link " View Product" [ref=e188] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e189]: 
              - text: View Product
      - generic [ref=e191]:
        - generic [ref=e192]:
          - generic [ref=e193]:
            - img "ecommerce website products" [ref=e194]
            - heading "Rs. 850" [level=2] [ref=e195]
            - paragraph [ref=e196]: Pure Cotton Neon Green Tshirt
            - generic [ref=e197] [cursor=pointer]:
              - generic [ref=e198]: 
              - text: Add to cart
          - generic [ref=e199]:
            - heading "Rs. 850" [level=2] [ref=e200]
            - paragraph [ref=e201]: Pure Cotton Neon Green Tshirt
            - generic [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
              - text: Add to cart
        - list [ref=e205]:
          - listitem [ref=e206]:
            - link " View Product" [ref=e207] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e208]: 
              - text: View Product
      - generic [ref=e210]:
        - generic [ref=e211]:
          - generic [ref=e212]:
            - img "ecommerce website products" [ref=e213]
            - heading "Rs. 1389" [level=2] [ref=e214]
            - paragraph [ref=e215]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link "Printed T-shirts" [ref=e216] [cursor=pointer]:
                - img [ref=e218]
                - text: Printed T-shirts
            - generic [ref=e220] [cursor=pointer]:
              - generic [ref=e221]: 
              - text: Add to cart
          - generic [ref=e222]:
            - heading "Rs. 1389" [level=2] [ref=e223]
            - paragraph [ref=e224]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: 
              - text: Add to cart
        - list [ref=e228]:
          - listitem [ref=e229]:
            - link " View Product" [ref=e230] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e231]: 
              - text: View Product
  - contentinfo [ref=e232]:
    - generic [ref=e237]:
      - heading "Subscription" [level=2] [ref=e238]
      - generic [ref=e239]:
        - textbox "Your email address" [ref=e240]
        - button "" [ref=e241] [cursor=pointer]:
          - generic [ref=e242]: 
        - paragraph [ref=e243]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e247]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e248]
```

# Test source

```ts
  1  | import {PageNavBar} from './PageNavBar.js';
  2  | import { expect } from '@playwright/test';
  3  | 
  4  | export class ProductPage extends PageNavBar {
  5  |     searchInput = '#search_product';
  6  |     searchButton = 'button#submit_search';
  7  |     productList = '.productinfo.text-center p';
  8  |     constructor(page) {
  9  |         super(page);
  10 |     }
  11 | 
  12 |     async enterSearchProduct(productName) {
  13 |         await this.fill(this.searchInput, productName);
  14 |         await this.click(this.searchButton);
  15 |     }
  16 | 
  17 |     async validateProductList(productName) {
  18 |         const productList = await this.page.locator(this.productList).allTextContents();
  19 |         for(let product of productList) {
> 20 |             expect(product).toContain(productName);
     |                             ^ Error: expect(received).toContain(expected) // indexOf
  21 |             console.log(product);
  22 |         }
  23 |     }
  24 | }
```