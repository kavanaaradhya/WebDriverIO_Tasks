Feature: swag demo feature

  Scenario Outline: Run the swag demo Feature
    Given Login to inventary web app
    Then Inventory page should list <NoOfProducts>
    Then Validate all products have valid price (price>0)

  Example:
    | TestID | NoOfProducts |
    | TC01   | 6            |
