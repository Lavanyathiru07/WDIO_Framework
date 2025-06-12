class Utility {
    async launchTheBrowser(url) {
        await browser.url(url);
        await browser.maximize();
    }

    async clickElement(element) {
        await element.waitForExist({ timeout: 5000 });
        await element.click();
    }

    async setTheValue(element, value) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.setValue(value);
    }

    async autoSelectSuggestionCity(element,listeofElement,text) {
        await element.click()
        await browser.pause(2000); // Allow suggestions to appear
       const suggestions =  await listeofElement
    
    for (let suggestion of suggestions) {
        const value = await suggestion.getText();
        
        if (value.includes(text)) {
            await suggestion.waitForDisplayed({ timeout: 5000 });
            await suggestion.click();
            break;
        }
    }
}
}
module.exports = new Utility();