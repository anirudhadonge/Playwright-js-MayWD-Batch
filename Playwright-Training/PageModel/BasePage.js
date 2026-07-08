export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async clickToGetNewPage(context, locator) {
    const pagePromise = context.waitForEvent("page");
    await this.page.locator(locator).click();
    return await pagePromise;
  }

  async acceptAlertDialog(locator) {
    this.page.on("dialog", (dialog) => {
      console.log(dialog.message());
      dialog.accept();
    });
    await this.click(locator);
  }

    async dismissAlertDialog(locator) {
    this.page.on("dialog", (dialog) => {
      console.log(dialog.message());
      dialog.dismiss();
    });
    await this.click(locator);
  }

    async acceptPromptWithMessage(locator,text) {
    this.page.on("dialog", (dialog) => {
      console.log(dialog.message());
      dialog.accept(text);
    });
    await this.click(locator);
  }

  async fill(locator, text) {
    await this.page.locator(locator).fill(text);
  }
}
