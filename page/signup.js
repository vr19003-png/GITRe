const { expect } = require('@playwright/test');

class SignupPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.getByPlaceholder("Enter first name");
        this.lastName = page.getByPlaceholder("Enter last name");
    }

    async open() {
        await this.page.goto('https://uatvendor.consciousroots.life/signup', {
            waitUntil: 'domcontentloaded'
        });
    }

    async verifyPage() {
        await expect(this.page).toHaveURL(/signup/);
    }

    async fillFirstName(name) {
        await this.firstName.fill(name);
    }

    async fillLastName(name) {
        await this.lastName.fill(name);
    }

    async takeScreenshot() {
        await this.page.screenshot({
            path: 'screenshots/signup-page.png',
            fullPage: true
        });
    }
}

module.exports = { SignupPage };