Feature: I want to login into my account to purchase an item

  Scenario Outline: As a user I want to be able to login into
  my account

    Given I am on automation practice website
    When I enter <email> and <password>
    Then I click on "sign button" to log into my account


    Examples:
      | email                   | password |
      | aaronopp@yahoo.com      | kofiken  |
      | hannahwood@gmail.com    | araba83  |
      | vivianokrah@hotmail.com | vivian2  |


