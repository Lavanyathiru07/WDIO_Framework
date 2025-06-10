@test
Feature: Testing the DemoQa application

    Scenario Outline: Test the practice form section
        Given I launch the DemoQa Url
        When I am on DemoQa Home page I click the form section
        Then I am on Forms Page I click the practice form section
        When I am on practice form page I enter Input for firstName <firstName> and lastName <lastName>
        When I am on Practice form page I select the specific Gender <gender>
        When I am on Practice form page I pass the input for Email <email> and MobileNumber <mobileNumber>
        Then I am on Practice form page I select the year <year> ,month <month> and date <date>
        When I am on practice form page I choose the all hobbies
        Then I am on practice form page I upload the picture <path>
        When I am on practice form page I select the state <state> from the option
        Then I am on practice form page I select the city <city> from the autoSuggestion option
        When I am on Practice form page I Click the sumbit button

        Examples:
            | firstName | lastName | gender | email             | mobileNumber | month    | year | date | path                                                   | state | city    |
            | lavan     | QA       | female | Lavan12@gmail.com | 8777667856     | December | 2006 | 7  | C:\\Users\\lthirunavukkarasu\\Pictures\\FileUpload.png | Hary  | Panipat |


