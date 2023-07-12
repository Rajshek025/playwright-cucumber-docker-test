import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';

export default class ProductPage {

    static Elements = {
        logOutBtn: 'Log out',
        loginMessage1: '//h1[@class="post-title"]',
        loginMessage2: '//p//strong'

    }

    static async verifyLoginMsgHeader(loginMsg1 : string) {
        await page.getByText(loginMsg1).click()
        expect(await page.getByText(loginMsg1)).toBeVisible()
    }

    static async verifyLoginMsg(loginMsg2 : string) {
        await page.getByText(loginMsg2).click()
    }

    static async logoutUser() {
        await page.getByText('Log out').click()

    }
    static async verifyButtonDisplayed(buttonName : string) {
        expect(await page.getByText('Log out')).toBeVisible();
    }
   
    static async refreshPage() {
        await page.reload();
        await page.waitForTimeout(10000)
    }

    static async navigateBack() {
        await page.goBack();
        await page.waitForTimeout(10000)
    }   

}