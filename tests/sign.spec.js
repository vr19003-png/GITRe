const { test } = require('@playwright/test');
const { SignupPage } = require('../page/signup');

test('Vendor Signup Page', async ({ page }) => {

    const signup = new SignupPage(page);

    await signup.open();
    await signup.verifyPage();

    await signup.takeScreenshot();

    await signup.fillFirstName("Vikas");
    await signup.fillLastName("Rawat");

});