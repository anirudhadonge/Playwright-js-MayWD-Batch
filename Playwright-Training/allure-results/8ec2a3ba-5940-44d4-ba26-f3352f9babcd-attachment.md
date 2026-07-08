# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Actions.spec.js >> @smoke @Regression Browser invoking test
- Location: tests\Actions.spec.js:173:5

# Error details

```
Error: browserType.launch: Unsupported chromium channel "firefox"
```

# Test source

```ts
  74  | //     // await page.locator("#username").fill('SuperSecretPassword!');
  75  | //     // await page.waitForTimeout(6000);
  76  | //     //await page.locator("#username").pressSequentially('tomsmith',{delay: 1000});
  77  | //     await page.locator("#username").pressSequentially('SuperSecretPassword');
  78  | //     await page.keyboard.press('Enter');
  79  | //     await page.locator("#username").pressSequentially('Tom-smith');
  80  | //     await page.waitForTimeout(6000);
  81  | // })
  82  | 
  83  | // test('Select options', async ({ page }) => {
  84  | //     await page.goto('https://the-internet.herokuapp.com/dropdown');
  85  | //     await page.locator("#dropdown").selectOption({value:"1"});
  86  | //     await page.waitForTimeout(3000);
  87  | //     await page.locator("#dropdown").selectOption({label:"Option 2"});
  88  | //     await page.waitForTimeout(3000);
  89  | //     await page.locator("#dropdown").selectOption({index:1});
  90  | //     await page.waitForTimeout(3000);
  91  | // });
  92  | 
  93  | // test('Checkboxes and radio buttons', async ({ page }) => {
  94  | //     await page.goto('https://the-internet.herokuapp.com/checkboxes');
  95  | //     await page.waitForTimeout(3000);
  96  | //     await page.locator('#checkboxes input').nth(0).check();
  97  | //     await page.waitForTimeout(3000);
  98  | //     console.log(await page.locator('#checkboxes input').nth(0).isChecked());
  99  | //     await expect(page.locator('#checkboxes input').nth(0)).not.toBeChecked();
  100 | //     await page.locator('#checkboxes input').nth(1).uncheck();
  101 | //     await page.waitForTimeout(3000);
  102 | //     console.log(await page.locator('#checkboxes input').nth(1).isChecked());
  103 | //     await expect(page.locator('#checkboxes input').nth(1)).not.toBeChecked();
  104 | // })
  105 | 
  106 | /**
  107 |  * Upload files
  108 |  * if the html element is input type then we can upload the file using setInputFiles method
  109 |  * if the html element is not input type then we can use the file chooser event to upload the file
  110 |  */
  111 | // test('Upload files', async ({ page }) => {
  112 | //     await page.goto('https://the-internet.herokuapp.com/');
  113 | //     await page.locator('[href="/upload"]').click();
  114 | //     await page.waitForTimeout(3000);
  115 | //     let fileChooserPromise = page.waitForEvent('filechooser');
  116 | //     //await page.locator("#file-upload").setInputFiles("./tests/Actions.spec.js");
  117 | //     await page.locator("#file-upload").click();
  118 | //     let fileChooser = await fileChooserPromise;
  119 | //     await fileChooser.setFiles("./tests/Actions.spec.js");
  120 | //     await page.waitForTimeout(3000);
  121 | // });
  122 | 
  123 | //Download the file and check whether file is present in the downloaded folder.
  124 | // test('Download files', async ({ page }) => {
  125 | //       await page.goto('https://the-internet.herokuapp.com/');
  126 | //       await page.locator('[href="/download"]').click();
  127 | //       let downloadPromise = page.waitForEvent('download');
  128 | //       await page.locator('[href="download/test-upload.txt"]').click();
  129 | //       let download = await downloadPromise;
  130 | //       await download.saveAs('./downloads/'+ download.suggestedFilename());
  131 | // })
  132 | 
  133 | /**
  134 |  * page object does have access to the inner html page.
  135 |  * we need use a method called framelocator to access the inner html page.
  136 |  * page --> frame object (framelocaor())---> access the inner html page
  137 |  *
  138 |  * Selenium : driver object const
  139 |  */
  140 | test('Frames', async ({ page }) => {
  141 |     await page.goto('https://the-internet.herokuapp.com/');
  142 |     await page.locator('[href="/frames"]').click();
  143 |     await page.locator('[href="/iframe"]').click();
  144 |     const frame = page.frameLocator('#mce_0_ifr');
  145 |     await expect(frame.locator("#tinymce p")).toHaveText('Your content goes here.');
  146 |     await expect(page.locator(".example h3")).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
  147 | });
  148 | 
  149 | // Browser ---> Context ----> Page
  150 | test("Basic Authentication", async ({ page }) => {
  151 |   await page.goto("https://the-internet.herokuapp.com/");
  152 |   await page.locator('[href="/basic_auth"]').click();
  153 |   await page.waitForTimeout(3000);
  154 |   await expect(page.locator(".example p")).toHaveText(
  155 |     "Congratulations! You must have the proper credentials.",
  156 |   );
  157 |   await page.waitForTimeout(3000);
  158 | });
  159 | 
  160 | /**
  161 |  * Browser
  162 |  * Context --- Profile with which the browser is getting invoked
  163 |  * cookies
  164 |  * local storage,
  165 |  * caches
  166 |  * session data
  167 |  * Page : Tab on the browser is the page object
  168 |  */
  169 | /**
  170 |  * Test --- > browser(process getting invoked) ---> context ---> page
  171 |  */
  172 | 
  173 | test("@smoke @Regression Browser invoking test",async()=>{
> 174 |       const browser = await chromium.launch();
      |                                      ^ Error: browserType.launch: Unsupported chromium channel "firefox"
  175 |       const context = await browser.newContext();
  176 |       //const context1 = await browser.newContext();
  177 |       const page = await context.newPage();
  178 |       const page1 = await context.newPage();
  179 | })
  180 | 
  181 | test("Handle Basic Authentication test level",{
  182 |       tag:["@smoke","@Regression"]
  183 | }, async({browser})=>{
  184 |       const context = await browser.newContext({
  185 |             httpCredentials:{
  186 |                   username:"admin",
  187 |                   password:"admin"
  188 |             }
  189 |       })
  190 |       const page = await context.newPage();
  191 |        await page.goto("https://the-internet.herokuapp.com/");
  192 |   await page.locator('[href="/basic_auth"]').click();
  193 |   await page.waitForTimeout(3000);
  194 |   await expect(page.locator(".example p")).toHaveText(
  195 |     "Congratulations! You must have the proper credentials.",
  196 |   );
  197 | })
  198 | /**
  199 |  * Click a link---> Internally triggers a Page Event ---> Page
  200 |  */
  201 | test("@smoke New Page test",async({context})=>{
  202 |  const page = await context.newPage();
  203 |  let basePage = new Basepage(page);
  204 |  await basePage.goto("https://the-internet.herokuapp.com/");
  205 |  await basePage.click('[href="/windows"]');
  206 |  const newPage = await basePage.clickToGetNewPage(context, '[href="/windows/new"]');
  207 | //  await page.goto("https://the-internet.herokuapp.com/");
  208 | //  await page.locator('[href="/windows"]').click()
  209 | //  const pagePromise = context.waitForEvent('page');
  210 | //  await page.locator('[href="/windows/new"]').click();
  211 | //  const newPage = await pagePromise;
  212 |   await expect(newPage.locator(".example h3")).toHaveText("New Window");
  213 | })
  214 | 
  215 | /**
  216 |  * javascript script alert is a built-in broser dialog boxes and used to communicate with the user
  217 |  * 1. Alert
  218 |  * 2. Confirm dialog
  219 |  * 3. prompt
  220 |  */
  221 | // browser application ---> Context(we will feed it inside our context)---> page(Tab on the browser)
  222 | test("Handling a Alert dialog", async ({ page }) => {
  223 |   const basePage = new Basepage(page);
  224 |   await page.goto("https://the-internet.herokuapp.com/");
  225 |   await page.locator('[href="/javascript_alerts"]').click();
  226 |   // page.on('dialog',(dialog)=>{
  227 |   //     console.log(dialog.message());
  228 |   //     dialog.accept();
  229 |   // })
  230 |   // await page.locator().click();
  231 |   await basePage.acceptAlertDialog('[onclick="jsAlert()"]');
  232 |   await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
  233 | });
  234 | 
  235 | test("Handling a Confirm dialog (accept)",async({page})=>{
  236 |   const basePage = new Basepage(page);
  237 |   await page.goto("https://the-internet.herokuapp.com/");
  238 |   await page.locator('[href="/javascript_alerts"]').click();
  239 |   page.on('dialog',(dialog)=>{
  240 |       console.log(dialog.message());
  241 |       dialog.dismiss();
  242 |   })
  243 |   // await page.locator('[onclick="jsConfirm()"]').click();
  244 |   await basePage.acceptAlertDialog('[onclick="jsConfirm()"]');
  245 |   await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  246 | })
  247 | 
  248 | test("Handling a Confirm dialog (cancel)",async({page})=>{
  249 |   const basePage = new Basepage(page);
  250 |   await page.goto("https://the-internet.herokuapp.com/");
  251 |   await page.locator('[href="/javascript_alerts"]').click();
  252 |   await basePage.dismissAlertDialog('[onclick="jsConfirm()"]');
  253 |   await expect(page.locator('#result')).toHaveText('You clicked: Ok');
  254 | })
  255 | 
  256 | test("Handling prompt dialog",async({page})=>{
  257 |   let message = "This is a js prompt demo";
  258 |   const basePage = new Basepage(page);
  259 |   await page.goto("https://the-internet.herokuapp.com/");
  260 |   await page.locator('[href="/javascript_alerts"]').click();
  261 |   await basePage.acceptPromptWithMessage('[onclick="jsPrompt()"]',message);
  262 |   await expect(page.locator('#result')).toContainText(message);
  263 | })
  264 | 
  265 | test("Hover test",async({page})=>{
  266 |   await page.goto("https://the-internet.herokuapp.com/");
  267 |   await page.locator('[href="/hovers"]').click();
  268 |   await page.getByAltText('User Avatar').nth(0).hover();
  269 |   await page.waitForTimeout(5000);
  270 |   await page.getByAltText('User Avatar').nth(1).hover();
  271 |   await page.waitForTimeout(5000);
  272 |   await page.getByAltText('User Avatar').nth(2).hover();
  273 |   await page.waitForTimeout(5000);
  274 | })
```