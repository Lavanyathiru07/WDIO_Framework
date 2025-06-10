const { Given, When, Then } = require('@cucumber/cucumber');

const DemoQaPom = require('../pageobjects/DemoQaPom');




Given(/^I launch the DemoQa Url$/, async () => {
    try {
        // await browser.url('https://demoqa.com/')
        await browser.url(process.env.URL);
        await browser.maximizeWindow()
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

When(/^I am on DemoQa Home page I click the form section$/, async () => {
    try {
        await DemoQaPom.form.click()
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

Then(/^I am on Forms Page I click the practice form section$/, async () => {
    try {
        await DemoQaPom.practiceForm.click();
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});


When(/^I am on practice form page I enter Input for firstName (.*) and lastName (.*)$/, async (firstName, lastName) => {
    try {

        await DemoQaPom.firstName.setValue(firstName);
        await DemoQaPom.lastName.setValue(lastName);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

When(/^I am on Practice form page I select the specific Gender (.*)$/, async (gender) => {
    try {
        await DemoQaPom.genderSelect(gender);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

When(/^I am on Practice form page I pass the input for Email (.*) and MobileNumber (.*)$/, async (email,mobileNumber) => {
    try {
        await DemoQaPom.email.setValue(email);
        await DemoQaPom.mobileNumber.setValue(mobileNumber);
     
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});


Then(/^I am on Practice form page I select the year (.*) ,month (.*) and date (.*)$/, async (year, month, date) => {

    try {
        await DemoQaPom.dateofBirth.click();
        await DemoQaPom.dobMonth.selectByVisibleText(month);
        await DemoQaPom.dobYear.selectByVisibleText(year);
        await DemoQaPom.dobDate(date);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

When(/^I am on practice form page I choose the all hobbies$/, async () => {
    try {
        await DemoQaPom.hobbiesSelection();
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});


Then(/^I am on practice form page I upload the picture (.*)$/, async (path) => {
    try {
        await DemoQaPom.uploadFile.scrollIntoView({ block: "center", inline: "center" });
        await DemoQaPom.uploadFile.setValue(path);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

When(/^I am on practice form page I select the state (.*) from the option$/, async (state) => {
    try {
        await DemoQaPom.selectState.scrollIntoView({ block: "center", inline: "center" });

        await DemoQaPom.autoSelectSuggestionState(state);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});

Then(/^I am on practice form page I select the city (.*) from the autoSuggestion option$/, async (city) => {
    try {
        browser.pause(5000)
        await DemoQaPom.autoSelectSuggestionCity(city);
    }
    catch (error) {
        console.log(`failed------:${error}`)
    }
});


When(/^I am on Practice form page I Click the sumbit button$/,async () => {
try{
    await DemoQaPom.submitButton.click()
}
catch(error)
{
    console.log(`failed-----:${error}`)
}
});



