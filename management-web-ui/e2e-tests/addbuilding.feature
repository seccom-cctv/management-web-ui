Feature: Add Building

  Scenario: Detect the Add Building action
    Given I am on the Manage Buildings Page
    When I click on the New Building button
    Then An Add Building pop-up should appear

  Scenario: Add a new building with no data
    Given I am on the Manage Buildings Page
    When I click on the New Building button
    And I click on the Add form button
    Then I should see the error message "* Building name invalid."

  Scenario: Add a new building with invalid name
    Given I am on the Manage Buildings Page
    When I click on the New Building button
    And I enter "AA" as the Building name
    And I click on the Add form button
    Then I should see the error message "* Building name invalid."

Scenario: Add a new building with invalid address
    Given I am on the Manage Buildings Page
    When I click on the New Building button
    And I enter "Building A" as the Building name
    And I enter "AA" as the Building address
    And I click on the Add form button
    Then I should see the error message "* Building address invalid."

  Scenario: Add a new building successfully
    Given I am on the Manage Buildings Page
    When I click on the New Building button
    And I enter "Building AB" as the Building name
    And I enter "Address XB" as the Building address
    And I click on the Add form button
    Then I should be notified with the message "New Building Created !"
    And the building named "Building AB" should be added to the list