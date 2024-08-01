Feature: Swag application functionality

  Background:
    Given I open the page

  Scenario Outline: Login functionality with valid credentials
    When I login with valid credentials
    And I store the prices of product "<product_price>"
    And I click on element "<add btn>"
    And I click on element ".shopping_cart_badge"
    And I wait for the element ".checkout_button" is displayed
    And I click on element ".checkout_button"
    And I set value "abcd" for the element "#first-name"
    And I set value "xyz" for the element "#last-name"
    And I set value "1234" for the element "#postal-code"
    And I click on element ".cart_button"
    And I wait for the element ".subheader" is displayed
    Then I expect the element "(//div[@class='inventory_item_price'])[1]" to contain expected
    And I expect the element ".summary_subtotal_label" is displayed
    And I expect the element ".summary_subtotal_label" is displayed
    And I expect the element ".summary_total_label" is displayed
    And I scroll to element ".summary_total_label"
    And I click on element ".cart_button"
    And I wait for the element ".complete-header" is displayed
    And I expect that element ".complete-header" contains text "THANK YOU FOR YOUR ORDER"

    Examples:
      | product_price                             | add btn                                           |
      | (//div[@class='inventory_item_price'])[1] | (//button[@class='btn_primary btn_inventory'])[1] |
      | (//div[@class='inventory_item_price'])[2] | (//button[@class='btn_primary btn_inventory'])[2] |

  Scenario: Login functionality with invalid credentials
    When I login with invalid credentials
    Then I expect that element "h3[data-test='error']" contains text "Epic sadface: Username and password do not match any user in this service"
