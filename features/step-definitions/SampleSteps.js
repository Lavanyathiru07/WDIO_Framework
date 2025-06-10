const { Given, When, Then } = require('@wdio/cucumber-framework');
const SamplePom = require('../pageobjects/SamplePom');
const { browser } = require('@wdio/globals');
const { expect, $ } = require('@wdio/globals')



Given(/^Lunch the application$/, async () => {
    await browser.url(process.env.URL)
    // await browser.url('https://practice.expandtesting.com/login');
   browser.maximizeWindow();
});

When(/^I am on practice application I click the here$/, async()=> {
    await SamplePom.here.click()
})


When(/^I am on practice application I enter the (.*),(.*) and (.*)$/,async (userName,password,confirmPassword) => {
	await SamplePom.userName.setValue(userName)
    await SamplePom.password.setValue(password)
    await SamplePom.confirmPassword.setValue(confirmPassword)

});

Then(/^I click the Register button$/,async () => {
	await SamplePom.register.click()
});


Then(/^I validate the page and enter (.*) and (.*)$/, async(userName,password) => {
;

	await expect(SamplePom.registerconfirmMessage).toHaveText(expect.stringContaining('Successfully registered'));
    await SamplePom.userName.setValue(userName)
    await SamplePom.password.setValue(password)
    await SamplePom.login.click();
    await SamplePom.logout.click();

});


