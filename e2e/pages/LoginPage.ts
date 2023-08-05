import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';



export default class LoginPage {
    // Object repository of Login Page
    static Elements = {
        username: '#username',
        password: '#password',
        submitBtn: '#submit',
        errorMessage: '//div[@id="error"]'
    }

    // Verify that current url is as expected
    static async verifyCurrentUrl(currentUrl : string) {
        expect(await page.url()).toBe(currentUrl);
    }
    
    static async verifyLoginPage(url: string) {
        await page.goto(url);
    }

    static async enterUserName(user: string) {
        await page.locator(LoginPage.Elements.username).fill(user)
    }
    static async enterPassword(pwd: string) {
        await page.locator(LoginPage.Elements.password).fill(pwd)
    }

    static async clickSubmitButton() {
        await page.locator(LoginPage.Elements.submitBtn).click()
    }

    static async getErrorMessage() {
        return page.locator(LoginPage.Elements.errorMessage).innerText()
    }

    static async verifyUserdLogedOut() {
        await page.getByText('Test login')
    }
    
    static async loginUser(user: string, password: string) {
        await LoginPage.enterUserName(user)
        await LoginPage.enterPassword(password)
        await LoginPage.clickSubmitButton()
    }
}