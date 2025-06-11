class BaseFunction{

    async open(url) {
        await browser.url(url); // Navigate to a specific URL
    }

    async maximizeWindow() {
        await browser.maximizeWindow(); // Maximize the browser window
    }

    async clickElement(selector) {
        await $(selector).waitForDisplayed();
        await $(selector).click(); // Click an element safely
    }

    async enterText(selector, text) {
        await $(selector).waitForDisplayed();
        await $(selector).setValue(text); // Input text into a field
    }

    async getElementText(selector) {
        await $(selector).waitForDisplayed();
        return await $(selector).getText(); // Retrieve element text
    }
}

module.exports =BaseFunction();
