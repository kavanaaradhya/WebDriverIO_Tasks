Feature: functionality on ABC website

  Scenario Outline: standard About page layout
    Given I open the url "https://abc.com/shows/oscars/about-the-show"
    Then I see the standard About page layout including the "<elements>"
    And I see the "//a[text()='Visit our FAQ page']" link
    When I click on the ".columns a" link
    And I expect that url is "https://support.abc.com/hc/en-us"

    Examples:
      | elements                 |
      | //img[@alt='The Oscars'] |
      | .about__description      |
