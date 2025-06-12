const { Given, When, Then } = require('@wdio/cucumber-framework');

const { browser } = require('@wdio/globals');
const { expect, $ } = require('@wdio/globals');
const SamplePom = require('../pageobjects/SamplePom');
const Utility = require('../pageobjects/Utility');



Given(/^Lunch the application$/, async () => {
    await browser.url(process.env.URL)
//     // await browser.url('https://practice.expandtesting.com/login');
   browser.maximizeWindow();
    // await Utility.launchTheBrowser("https://practice.expandtesting.com/login");
});

When(/^I am on practice application I click the here$/, async()=> {
    // await SamplePom.here.click()

    await Utility.clickElement(SamplePom.here)
})


When(/^I am on practice application I enter the (.*),(.*) and (.*)$/,async (userName,password,confirmPassword) => {
	await Utility.setTheValue(SamplePom.userName,userName)
    await Utility.setTheValue(SamplePom.password,password)
    await Utility.setTheValue(SamplePom.confirmPassword,confirmPassword)

});

Then(/^I click the Register button$/,async () => {
	await Utility.clickElement(SamplePom.register);
});


Then(/^I validate the page and enter (.*) and (.*)$/, async(userName,password) => {
;

	await expect(SamplePom.registerconfirmMessage).toHaveText(expect.stringContaining('Successfully registered'));
    await Utility.setTheValue(SamplePom.userName,userName)
    await Utility.setTheValue(SamplePom.setTheValue,password)
    await Utility.clickElement(SamplePom.login)
    await Utility.clickElement(SamplePom.logout)

});


