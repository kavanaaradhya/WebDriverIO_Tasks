Feature: cricket demo feature

  Scenario: Run the cricket demo Feature
    Given Web page is opened
    And I pause for "2000"ms
    And I scroll to the element with the text "//span[text()='Sri Lanka']"
    And I wait on element "Pos" to be displayed
    And I tap on the element <Pos>
    And I pause for "2000"ms
    # And I wait on element "Team" to be displayed
    # And I wait on element "Matches" to be displayed
    # And I close the browser

    Examples:
      | Pos  | Team           | Matches |
      | "01" | "AUSTRALIA"    | "30"    |
      | "02" | "INDIA"        | "26"    |
      | "03" | "ENGLAND"      | "30"    |
      | "04" | "SOUTH AFRICA" | "18"    |
      | "05" | "NEW ZEALAND"  | "22"    |
      | "06" | "PAKISTAN"     | "17"    |
      | "07" | "SRI LANKA"    | "18"    |
      | "08" | "WEST INDIES"  | "19"    |
      | "09" | "BANGALDESH"   | "17"    |
      | "10" | "ZIMBABWE      | "2"     |
      | "11" | "IRELAND"      | "4"     |
      | "12" | "AFGHANISTAN"  | "3"     |
