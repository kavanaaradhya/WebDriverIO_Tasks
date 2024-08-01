Feature: functionality on ABC website

  Background:
    Given I open the abc site

  Scenario Outline: User searches for news
    When I enter "<text>" into the search bar and submit
    Then I expect the element "<element>" is displayed

    Examples:
      | text   | element                                 |
      | news   | .tilegroup--shows.tilegroup--searchlist |
      | jjjjjj | .SearchModal__noResults                 |

  Scenario: Arrow functionality
    And I store the element's ".tile--hero__headline" text
    And I move to element ".hero__arrow-right"
    And I click on the element ".hero__arrow-right"
    And I wait on element ".tile--hero__headline" to be displayed
    And I expect the element ".tile--hero__headline" not equal stored text
