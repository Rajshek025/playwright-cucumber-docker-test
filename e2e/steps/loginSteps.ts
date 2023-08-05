import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import  LoginPage  from '../pages/LoginPage';
import  HomePage  from '../pages/HomePage';
import { expect, Page } from "@playwright/test";


setDefaultTimeout(60 * 1000 * 2)
// User opens browser hits url
Given('User navigates to {string}', async function (url) {
    await LoginPage.verifyLoginPage(url);
})

// User inputs username
When('User enter the username as {string}', async function (userName) {
    await LoginPage.enterUserName(userName)
});

// User inputs password
When('User enter the password as {string}', async function (password) {
    await LoginPage.enterPassword(password)
});

// User clicks submit button
When('User click on the Submit button', async function () {
    await LoginPage.clickSubmitButton();
});

// User verifies Url the url
Then('Verify new page URL contains {string}', async function (currentUrl) {
    await LoginPage.verifyCurrentUrl(currentUrl)
  });

// User verifies the message1 after successful login
Then('I Verify new page contains expected text {string}', async function (loginMsg1) {
    await HomePage.verifyLoginMsgHeader(loginMsg1)
  });

  // User verifies the message2 after successful login
Then('I also verify {string} message', async function (loginMsg2) {
    await HomePage.verifyLoginMsg(loginMsg2)
  });

// User verifies Logout Button displayed
Then('I verify {string} button is displayed on the new page', async function (buttonName) {
    await HomePage.verifyButtonDisplayed(buttonName);
  });

// User logout from the page
When('I logout user', async function () {
    await HomePage.logoutUser()
});

// Verifies that User successfully logged out
Then('I verify user is successfully logged out', async function () {
    await LoginPage.verifyUserdLogedOut()
});

// User validates the error message while login
Then('I verify error message {string} is displayed', async function (msg) {
    await expect( await LoginPage.getErrorMessage()).toContain(msg)
});

// Regresh the page
Then('I refresh the page', async function () {
    await HomePage.refreshPage();
});

// Navigates to Previous page
Then('I navigate to previous page', async function () {
    await HomePage.navigateBack();
});

// User login to page with valid username and password
Then('I login with valid username and password', async function (dataTable) {
    const userDetails = dataTable.hashes();
    await LoginPage.loginUser(userDetails[0]['username'],userDetails[0]['password'])
});


