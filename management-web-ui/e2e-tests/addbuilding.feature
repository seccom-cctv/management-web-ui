# Feature: Add Building

#   Scenario: Detect the Add Building action
#     Given I am on the Manage Buildings Page
#     When I click on the New Building button
#     Then An Add Building pop-up should appear

#   Scenario: Add a new building with no data
#     Given I am on the Manage Buildings Page
#     When I click on the New Building button
#     And I click on the Add button
#     Then I should be notified with the message "Please fill all fields!"

#   Scenario: Add a new building with invalid name
#     Given I am on the Manage Buildings Page
#     When I click on the New Building button
#     And I enter "AA" as the Building name
#     And I click on the Add button
#     Then I should be notified with the message "Please provide a valid name!"

# Scenario: Add a new building with invalid address
#     Given I am on the Manage Buildings Page
#     When I click on the New Building button
#     And I enter "Building A" as the Building name
#     And I enter "AA" as the Building address
#     And I click on the Add button
#     Then I should be notified with the message "Please provide a valid address!"

#   Scenario: Add a new building successfully
#     Given I am on the Manage Buildings Page
#     When I click on the New Building button
#     And I enter "Building A" as the Building name
#     And I enter "Address Z" as the Building address
#     And I click on the Add button
#     Then I should be notified with the message "Building added successfully!"
#     And the company should be added to the list