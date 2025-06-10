@sample
Feature: Testing the sample application

Scenario Outline: To test the first test case
 Given Lunch the application
 When I am on practice application I click the here
 When I am on practice application I enter the <userName>,<password> and <confirmPassword>
 Then I click the Register button
 Then I validate the page and enter <userName> and <password>
 


Examples:
    
|userName|password|confirmPassword|
|TestingProject|Test@1234|Test@1234|
   