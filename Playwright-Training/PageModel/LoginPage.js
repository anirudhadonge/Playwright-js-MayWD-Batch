import {PageNavBar} from './PageNavBar';

export class LoginPage extends PageNavBar {
    userNameInput = '[data-qa="login-email"]';
    passwordInput = '[data-qa="login-password"]';
    loginButton = '[data-qa="login-button"]';
    constructor(page) {
        super(page);
    }

    async enterUserName(userName) {
        await this.fill(this.userNameInput,userName);
    }

    async enterPassword(password) {
        await this.fill(this.passwordInput,password);
    }
    async clickLoginButton() {
        await this.click(this.loginButton);
    }

    async login(userName,password) {
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}