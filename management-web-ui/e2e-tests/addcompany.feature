# Feature: Add Company

#     Scenario: Detect the Add Company action
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         Then An Add Company pop-up should appear

#     Scenario: Add a new company successfully
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I enter "Company X" as the Company name
#         And I enter "Address X" as the Company address
#         And I enter "256123456" as the Company phone
#         And I enter "companyX@ua.pt" as the Company email
#         And I click on the Add button
#         Then I should be notified
#         And the company should be added to the list

#     Scenario: Add a new company with no data
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I click on the Add button
#         Then I should be notified with the message "Please fill all fields!"

#     Scenario: Add a new company with invalid name
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I enter "AA" as the Company name
#         And I click on the Add button
#         Then I should be notified with the message "Please provide a valid name!"

#     Scenario: Add a new company with invalid address
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I enter "Company X" as the Company name
#         And I enter "AA" as the Company address
#         And I click on the Add button
#         Then I should be notified with the message "Please provide a valid address!"

#     Scenario: Add a new company with invalid phone
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I enter "Company X" as the Company name
#         And I enter "Address X" as the Company address
#         And I enter "123456" as the Company phone
#         And I click on the Add button
#         Then I should be notified with the message "Please provide a valid phone!"

#     Scenario: Add a new company with invalid email
#         Given I am on the Welcome Page
#         When I click on the Add Company button
#         And I enter "Company X" as the Company name
#         And I enter "Address X" as the Company address
#         And I enter "256123456" as the Company phone
#         And I enter "companyX" as the Company email
#         And I click on the Add button
#         Then I should be notified with the message "Please provide a valid email!"
