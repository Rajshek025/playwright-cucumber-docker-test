import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import  LoginPage  from '../pages/LoginPage';
import  HomePage  from '../pages/HomePage';
import { expect, Page } from "@playwright/test";


setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to {string}', async function (url) {
    await LoginPage.verifyLoginPage(url);
})

When('User enter the username as {string}', async function (userName) {
    await LoginPage.enterUserName(userName)
});
When('User enter the password as {string}', async function (password) {
    await LoginPage.enterPassword(password)
});

When('User click on the Submit button', async function () {
    await LoginPage.clickSubmitButton();
});

Then('Verify new page URL contains {string}', async function (currentUrl) {
    await LoginPage.verifyCurrentUrl(currentUrl)
  });

Then('I Verify new page contains expected text {string}', async function (loginMsg1) {
    await HomePage.verifyLoginMsgHeader(loginMsg1)
  });

Then('I also verify {string} message', async function (loginMsg2) {
    await HomePage.verifyLoginMsg(loginMsg2)
  });

Then('I verify {string} button is displayed on the new page', async function (buttonName) {
    await HomePage.verifyButtonDisplayed(buttonName);
  });

When('I logout user', async function () {
    await HomePage.logoutUser()
});

Then('I verify user is successfully logged out', async function () {
    await LoginPage.verifyUserdLogedOut()
});

Then('I verify error message {string} is displayed', async function (msg) {
    await expect( await LoginPage.getErrorMessage()).toContain(msg)
});

Then('I refresh the page', async function () {
    await HomePage.refreshPage();
});

Then('I navigate to previous page', async function () {
    await HomePage.navigateBack();
});


Then('I login with valid username and password', async function (dataTable) {
    const userDetails = dataTable.hashes();
    await LoginPage.loginUser(userDetails[0]['username'],userDetails[0]['password'])
});


