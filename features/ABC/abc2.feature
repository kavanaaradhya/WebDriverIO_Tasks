Feature: functionality on ABC website

  Background:
    Given I open the url "https://abc.com/"

  Scenario: homepage functionality
    And I am not logged in to an ABC account
    And I am on the Home page with text "//img[alt='Coming Soon Collection']"
    When I click on "(//span[text()='GO NOW'])[1]" button on hero wrapper carousel image
    Then I am brought to the correct show page "//img[alt='Coming Soon Collection']"

  Scenario: Right arrow button functionality
    And I click on the ".hero__arrow-right" button
    And I stored text before click "//span[text()='Coming Soon to ABC']"
    And I see the correct "//div[@class='hero-selector-dot active']" carousel dot highlighted
    And I wait on element "//span[text()='ESPN 8: The Ocho Unlocked Channel']" to be displayed
    And I stored text after click "//span[text()='ESPN 8: The Ocho Unlocked Channel']"
    And I see next show image "(//img[@data-mptype='image'])[1]"

  Scenario: HUlu functionality
    And I click on the hulu ".ext__logo" button
    And I am brought to the correct Hulu show page "//span[text()='Log In']"
