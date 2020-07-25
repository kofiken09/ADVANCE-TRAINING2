$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "I want to login into my account to purchase an item",
  "description": "",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "As a user I want to be able to login into",
  "description": "my account",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \u003cemail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"sign button\" to log into my account",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 12,
      "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;1"
    },
    {
      "cells": [
        "aaronopp@yahoo.com",
        "kofiken"
      ],
      "line": 13,
      "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;2"
    },
    {
      "cells": [
        "hannahwood@gmail.com",
        "araba83"
      ],
      "line": 14,
      "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;3"
    },
    {
      "cells": [
        "vivianokrah@hotmail.com",
        "vivian2"
      ],
      "line": 15,
      "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to be able to login into",
  "description": "my account",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter aaronopp@yahoo.com and kofiken",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"sign button\" to log into my account",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.i_am_on_automation_practice_website()"
});
formatter.result({
  "duration": 5658765300,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.i_enter_aaronopp_yahoo_com_and_kofiken()"
});
formatter.result({
  "duration": 137146600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign button",
      "offset": 12
    }
  ],
  "location": "loginSteps.i_click_on_to_log_into_my_account(String)"
});
formatter.result({
  "duration": 1580816200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a user I want to be able to login into",
  "description": "my account",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter hannahwood@gmail.com and araba83",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"sign button\" to log into my account",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.i_am_on_automation_practice_website()"
});
formatter.result({
  "duration": 5550218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "83",
      "offset": 38
    }
  ],
  "location": "loginSteps.i_enter_hannahwood_gmail_com_and_araba(int)"
});
formatter.result({
  "duration": 128955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign button",
      "offset": 12
    }
  ],
  "location": "loginSteps.i_click_on_to_log_into_my_account(String)"
});
formatter.result({
  "duration": 718889200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a user I want to be able to login into",
  "description": "my account",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter vivianokrah@hotmail.com and vivian2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"sign button\" to log into my account",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps.i_am_on_automation_practice_website()"
});
formatter.result({
  "duration": 5045705700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "loginSteps.i_enter_vivianokrah_hotmail_com_and_vivian(int)"
});
formatter.result({
  "duration": 141848300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign button",
      "offset": 12
    }
  ],
  "location": "loginSteps.i_click_on_to_log_into_my_account(String)"
});
formatter.result({
  "duration": 1718971900,
  "status": "passed"
});
});