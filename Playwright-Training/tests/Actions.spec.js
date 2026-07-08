/**
 * Actions in playwright
		○ Click
            button
            clickCount
            Delay
            force
            position
            timeout
		○ Fill and press sequencally-- Textbox /input fields
            Fill: just like copy and paste action
              clears the exiting text and then fills the new text
              it only works on input and textarea fields (html element type)
            press-Sequencially: it is like typing the words one by one with some delay in between
              it works on all the elements
              it does not clear the existing text, it just adds the new text with some delay in between
		○ Select options : you trying select a value from a dropdown list . HTML should select tag.
            Value attribute
            Label
            Index

		○ Checkboxes and radio buttons
            methods: check, uncheck, isChecked , toBeChecked;
                check: it will check the checkbox or radio button if it is not already checked
                uncheck: it will uncheck the checkbox or radio button if it is already checked
                isChecked: it will return true if the checkbox or radio button is checked, otherwise false
            for element which has a attribute type = checkbox or radio button
		○ Upload files
		○ Frames:
                  html page inside an html page
                  <html>
                  <body>
                    <iframe src="https://www.example.com">
                        <html>
                        <body>
                            <h1>This is an embedded page</h1>
                        </body>
                        </html>
                    </iframe>
                  </body>
                  </html>
                  iframe is the html element which is used to embed another html page inside the current html page
		○ Download File
		○ Javascript Popups (Alerts)
		○ Hover
		○ New Page
		○ Basic Authentication
		○ Drag and Drop
            textContent
 * 
/**
 *Test - build in object 
  It contains all the information about test execution , Information are passed from the playwright.config.js
  1. Browser information
  2. Browser instance
  3. context of the browser
  4. page object
  5. test()
 *   */

import { test, expect, chromium } from "@playwright/test";
import { Basepage } from "../PageModel/BasePage";

// test('Click action', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/');
//     await page.locator('[href="/checkboxes"]').click(); // how much time to wait before clicking
//     await page.waitForTimeout(6000);
// })

// test('Fill and press sequencally', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/login');
//     // await page.locator("#username").fill('tomsmith');
//     // await page.waitForTimeout(6000);
//     // await page.locator("#username").fill('SuperSecretPassword!');
//     // await page.waitForTimeout(6000);
//     //await page.locator("#username").pressSequentially('tomsmith',{delay: 1000});
//     await page.locator("#username").pressSequentially('SuperSecretPassword');
//     await page.keyboard.press('Enter');
//     await page.locator("#username").pressSequentially('Tom-smith');
//     await page.waitForTimeout(6000);
// })

// test('Select options', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
//     await page.locator("#dropdown").selectOption({value:"1"});
//     await page.waitForTimeout(3000);
//     await page.locator("#dropdown").selectOption({label:"Option 2"});
//     await page.waitForTimeout(3000);
//     await page.locator("#dropdown").selectOption({index:1});
//     await page.waitForTimeout(3000);
// });

// test('Checkboxes and radio buttons', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/checkboxes');
//     await page.waitForTimeout(3000);
//     await page.locator('#checkboxes input').nth(0).check();
//     await page.waitForTimeout(3000);
//     console.log(await page.locator('#checkboxes input').nth(0).isChecked());
//     await expect(page.locator('#checkboxes input').nth(0)).not.toBeChecked();
//     await page.locator('#checkboxes input').nth(1).uncheck();
//     await page.waitForTimeout(3000);
//     console.log(await page.locator('#checkboxes input').nth(1).isChecked());
//     await expect(page.locator('#checkboxes input').nth(1)).not.toBeChecked();
// })

/**
 * Upload files
 * if the html element is input type then we can upload the file using setInputFiles method
 * if the html element is not input type then we can use the file chooser event to upload the file
 */
// test('Upload files', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/');
//     await page.locator('[href="/upload"]').click();
//     await page.waitForTimeout(3000);
//     let fileChooserPromise = page.waitForEvent('filechooser');
//     //await page.locator("#file-upload").setInputFiles("./tests/Actions.spec.js");
//     await page.locator("#file-upload").click();
//     let fileChooser = await fileChooserPromise;
//     await fileChooser.setFiles("./tests/Actions.spec.js");
//     await page.waitForTimeout(3000);
// });

//Download the file and check whether file is present in the downloaded folder.
// test('Download files', async ({ page }) => {
//       await page.goto('https://the-internet.herokuapp.com/');
//       await page.locator('[href="/download"]').click();
//       let downloadPromise = page.waitForEvent('download');
//       await page.locator('[href="download/test-upload.txt"]').click();
//       let download = await downloadPromise;
//       await download.saveAs('./downloads/'+ download.suggestedFilename());
// })

/**
 * page object does have access to the inner html page.
 * we need use a method called framelocator to access the inner html page.
 * page --> frame object (framelocaor())---> access the inner html page
 *
 * Selenium : driver object const
 */
test('Frames', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/iframe"]').click();
    const frame = page.frameLocator('#mce_0_ifr');
    await expect(frame.locator("#tinymce p")).toHaveText('Your content goes here.');
    await expect(page.locator(".example h3")).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
});

// Browser ---> Context ----> Page
test("Basic Authentication", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/basic_auth"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator(".example p")).toHaveText(
    "Congratulations! You must have the proper credentials.",
  );
  await page.waitForTimeout(3000);
});

/**
 * Browser
 * Context --- Profile with which the browser is getting invoked
 * cookies
 * local storage,
 * caches
 * session data
 * Page : Tab on the browser is the page object
 */
/**
 * Test --- > browser(process getting invoked) ---> context ---> page
 */

test("@smoke @Regression Browser invoking test",async()=>{
      const browser = await chromium.launch();
      const context = await browser.newContext();
      //const context1 = await browser.newContext();
      const page = await context.newPage();
      const page1 = await context.newPage();
})

test("Handle Basic Authentication test level",{
      tag:["@smoke","@Regression"]
}, async({browser})=>{
      const context = await browser.newContext({
            httpCredentials:{
                  username:"admin",
                  password:"admin"
            }
      })
      const page = await context.newPage();
       await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/basic_auth"]').click();
  await page.waitForTimeout(3000);
  await expect(page.locator(".example p")).toHaveText(
    "Congratulations! You must have the proper credentials.",
  );
})
/**
 * Click a link---> Internally triggers a Page Event ---> Page
 */
test.only("@smoke New Page test",async({context})=>{
 const page = await context.newPage();
 let basePage = new Basepage(page);
 await basePage.goto("https://the-internet.herokuapp.com/");
 await basePage.click('[href="/windows"]');
 const newPage = await basePage.clickToGetNewPage(context, '[href="/windows/new"]');
//  await page.goto("https://the-internet.herokuapp.com/");
//  await page.locator('[href="/windows"]').click()
//  const pagePromise = context.waitForEvent('page');
//  await page.locator('[href="/windows/new"]').click();
//  const newPage = await pagePromise;
  await expect(newPage.locator(".example h3")).toHaveText("New Window");
})

/**
 * javascript script alert is a built-in broser dialog boxes and used to communicate with the user
 * 1. Alert
 * 2. Confirm dialog
 * 3. prompt
 */
// browser application ---> Context(we will feed it inside our context)---> page(Tab on the browser)
test("Handling a Alert dialog", async ({ page }) => {
  const basePage = new Basepage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  // page.on('dialog',(dialog)=>{
  //     console.log(dialog.message());
  //     dialog.accept();
  // })
  // await page.locator().click();
  await basePage.acceptAlertDialog('[onclick="jsAlert()"]');
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test("Handling a Confirm dialog (accept)",async({page})=>{
  const basePage = new Basepage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  page.on('dialog',(dialog)=>{
      console.log(dialog.message());
      dialog.dismiss();
  })
  // await page.locator('[onclick="jsConfirm()"]').click();
  await basePage.acceptAlertDialog('[onclick="jsConfirm()"]');
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})

test("Handling a Confirm dialog (cancel)",async({page})=>{
  const basePage = new Basepage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await basePage.dismissAlertDialog('[onclick="jsConfirm()"]');
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');
})

test("Handling prompt dialog",async({page})=>{
  let message = "This is a js prompt demo";
  const basePage = new Basepage(page);
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await basePage.acceptPromptWithMessage('[onclick="jsPrompt()"]',message);
  await expect(page.locator('#result')).toContainText(message);
})

test("Hover test",async({page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  await page.getByAltText('User Avatar').nth(0).hover();
  await page.waitForTimeout(5000);
  await page.getByAltText('User Avatar').nth(1).hover();
  await page.waitForTimeout(5000);
  await page.getByAltText('User Avatar').nth(2).hover();
  await page.waitForTimeout(5000);
})

/**
 * Drag and Drop
 * source : from where do I need to drag
 * destination :Where do I need to Drop
 * Locator.DragTo(Locator of the destination)
 */

test("Drag and Drop test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/drag_and_drop"]').click();
  await page.waitForTimeout(5000);// Pausing the Execution
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await page.waitForTimeout(5000);// Pausing the Execution
});

/**
 * How to extract the label's value from the html page
 * textContent: Extracts label from the html page
 */

test('Text Content Test', async({page})=>{
      page.setDefaultTimeout(10000);
      await page.goto("https://the-internet.herokuapp.com/");
      // await page.waitForLoadState('networkidle');
      
      console.log(await page.locator("#content h1").textContent());
      await expect(await page.locator('.theme-doc-markdown.markdown')).toBeVisible(); // retry this validation till timeout is reached.
      //await page.locator('.theme-doc-markdown.markdown').waitFor({state:'visible'});
})