Feature: Test feature

  Scenario: Add user
    Given Navigate to url
    When user clicks on add user button
    And user enters user details
    And user clicks on save button
    Then user verifies user is added

    Scenario: Delete user
    Given Navigate to url
    And user searched Novak
    And user deletes user
    Then user verifies user is deleted