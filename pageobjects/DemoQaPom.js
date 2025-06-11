class DemoQaPom {

    get form() {
        return $("//h5[text()='Forms']")
    }

    get practiceForm() {
        return $("//span[text()='Practice Form']")
    }

    get firstName() {
        return $('#firstName')
    }

    get lastName() {
        return $('#lastName')
    }

    get maleGender() {
        return $("//label[@for='gender-radio-1']")
    }

    get femaleGender() {
        return $("//label[@for='gender-radio-2']")
    }

    get otherGender() {
        return $("//label[@for='gender-radio-3']")
    }

    get email()
    {
        return $('#userEmail')
    }

    get mobileNumber()
    {
        return $('#userNumber')
    }

    get dateofBirth()
    {
        return $('#dateOfBirthInput')
    }

    get dobMonth()
    {
        return $("//select[@class='react-datepicker__month-select']")
    }

    get dobYear()
    {
        return $("//select[@class='react-datepicker__year-select']")
    }

    async dobDate(selectedDate)
    {
       return $(`//div[text()='${selectedDate}']`).click();
    }

    get hobbies()
    {
        return $$("//label[contains(@for,'hobbies-checkbox')]")
    }
 
    get uploadFile()
    {
        return $('#uploadPicture')
    }

    get selectState()
    {
        return $("//div[text()='Select State']")
    }
   
    get stateOption(){
        return $$("//div[contains(@id,'react-select-3-option')]")
    }

    get selectCity()
    {
        return $("//div[text()='Select City']")
    }

    get selectCityOption()
    {
        return $$("//div[contains(@id,'react-select-4-option')]")
    }

    get submitButton()
    {
        return $("//button[text()='Submit']")
    }

    async genderSelect(gender) {
        if (gender.toLowerCase() == 'male') {
            await this.maleGender.waitForDisplayed({ timeout: 10000 });
            await this.maleGender.click();
        } else if (gender.toLowerCase() == 'female') {
            await this.femaleGender.waitForDisplayed({ timeout: 10000 });
            await this.femaleGender.click();
        } else if (gender.toLowerCase() == 'other') {
            await this.otherGender.click();
        } else {
            console.error(`Invalid gender option: ${gender}`);
        }
    }

    async hobbiesSelection() {
    const checkboxes = await this.hobbies; // Ensure we get the elements array

    for (let checkbox of checkboxes) {
        await checkbox.waitForDisplayed({ timeout: 5000 });
        await checkbox.click();
    }
}
    
    async autoSelectSuggestionState(text) {
        await this.selectState.click()
        await browser.pause(2000); // Allow suggestions to appear
       const suggestions =  await this.stateOption
    
    for (let suggestion of suggestions) {
        const value = await suggestion.getText();
        if (value.includes(text)) {
            await suggestion.waitForDisplayed({ timeout: 5000 });
            await suggestion.click();
            break;
        }
    }
}

async autoSelectSuggestionCity(city) {
        await this.selectCity.click()
        await browser.pause(2000); // Allow suggestions to appear
       const suggestions =  await this.selectCityOption
    
    for (let suggestion of suggestions) {
        const value = await suggestion.getText();
        
        if (value.includes(city)) {
            await suggestion.waitForDisplayed({ timeout: 5000 });
            await suggestion.click();
            break;
        }
    }
}

    }
module.exports = new DemoQaPom;