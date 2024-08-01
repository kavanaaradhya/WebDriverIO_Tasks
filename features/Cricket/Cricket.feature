Feature: cricket demo feature

  Scenario: Run the cricket demo Feature
    Given I open the page
    And I pause for "2000"ms
    And I scroll to element "//span[text()='Team'] "
    And I pause for "3000"ms
    And I check for matches greater than or equal to 30
    And I pause for "2000"ms
    And I close the webPage


