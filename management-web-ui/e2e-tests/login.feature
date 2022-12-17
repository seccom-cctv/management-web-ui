Feature: Login

  Scenario: Access Login Page
    Given that I'm on the main welcome page
    # And that I'm not logged in
    When I click on the Login button
    Then I should be redirected to the login page

  Scenario: Login successfully
    # Given that I'm not logged in
    Given I'm on the login page 
    When I enter "usertest@ua.pt" as the email
    And I enter "Testes123!" as the password
    And I click on the Sign In button
    Then I should login successfully

  Scenario: Login failed
    # Given that I'm not logged in
    Given I'm on the login page 
    When I enter "usertest@ua.pt" as the email
    And I enter "hfgrne" as the password
    And I click on the Sign In button
    Then I should see the login error message "Incorrect username or password."

