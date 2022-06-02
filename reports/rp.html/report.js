$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApplyNoe.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for jobs",
  "description": "",
  "id": "apply-for-jobs",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "application verification",
  "description": "",
  "id": "apply-for-jobs;application-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on carriers",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on ApplyNow",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on ApplyNow",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "application page verified",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 4698026999,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_carriers()"
});
formatter.result({
  "duration": 4774818600,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.user_clicks_on_ApplyNow()"
});
formatter.result({
  "duration": 6357510800,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.click_on_ApplyNow()"
});
formatter.result({
  "duration": 6953868800,
  "status": "passed"
});
formatter.match({
  "location": "ApplyNowStepDefination.application_page_verified()"
});
formatter.result({
  "duration": 5101205200,
  "status": "passed"
});
formatter.uri("CarriersPage.feature");
formatter.feature({
  "line": 1,
  "name": "subscription verification",
  "description": "",
  "id": "subscription-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "successfull subscription",
  "description": "",
  "id": "subscription-verification;successfull-subscription",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on TVunit",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "close popup",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on product tv",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user navigated to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "page is verified",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user hover on material and check ckeckbox",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verifies correct text",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter email",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "subscription is successfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2798390399,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.user_clicks_on_TVunit()"
});
formatter.result({
  "duration": 7791892200,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.close_popup()"
});
formatter.result({
  "duration": 3694331200,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.click_on_product_tv()"
});
formatter.result({
  "duration": 4400178200,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.user_navigated_to_next_page()"
});
formatter.result({
  "duration": 6126659399,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.page_is_verified()"
});
formatter.result({
  "duration": 3061950100,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.user_hover_on_material_and_check_ckeckbox()"
});
formatter.result({
  "duration": 4419871601,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.verifies_correct_text()"
});
formatter.result({
  "duration": 5055703500,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.enter_email()"
});
formatter.result({
  "duration": 2636993501,
  "status": "passed"
});
formatter.match({
  "location": "CarriersStepdefination.subscription_is_successfully_added()"
});
formatter.result({
  "duration": 5468304700,
  "status": "passed"
});
formatter.uri("GiftCollection.feature");
formatter.feature({
  "line": 1,
  "name": "verifies gift collection",
  "description": "",
  "id": "verifies-gift-collection",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details\"\u003crecei_name\u003e\" ,\"\u003ccustomer_name\u003e\" ,\"\u003cCustmer_mail\u003e\" ,\"\u003creceipnt_mail\u003e\" ,\"\u003ccutomer_phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;",
  "rows": [
    {
      "cells": [
        "recei_name",
        "customer_name",
        "Customer_mail",
        "receipnt_mail",
        "customer_phone"
      ],
      "line": 20,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;1"
    },
    {
      "cells": [
        "avni",
        "anuja",
        "avni@gmail.com",
        "monu@gmail.com",
        "8790654367"
      ],
      "line": 21,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;2"
    },
    {
      "cells": [
        "kajal",
        "mibal",
        "kajal@gmail.com",
        "rupal@gmail.com",
        "1234567890"
      ],
      "line": 22,
      "id": "verifies-gift-collection;unsuccessful-gift-collection;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details\"avni\" ,\"anuja\" ,\"\u003cCustmer_mail\u003e\" ,\"monu@gmail.com\" ,\"\u003ccutomer_phone\u003e\"",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2466546101,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "duration": 12135598700,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.choose_a_gift()"
});
formatter.result({
  "duration": 3118910599,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.gets_the_price_of_gift()"
});
formatter.result({
  "duration": 3066754100,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_enter_price()"
});
formatter.result({
  "duration": 3147187099,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.insert_date_for_which_it_is_going_to_delivered()"
});
formatter.result({
  "duration": 3411301500,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.submit()"
});
formatter.result({
  "duration": 3076122500,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.details_form_navigated()"
});
formatter.result({
  "duration": 3014266300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "avni",
      "offset": 18
    },
    {
      "val": "anuja",
      "offset": 26
    },
    {
      "val": "\u003cCustmer_mail\u003e",
      "offset": 35
    },
    {
      "val": "monu@gmail.com",
      "offset": 53
    },
    {
      "val": "\u003ccutomer_phone\u003e",
      "offset": 71
    }
  ],
  "location": "GiftCollectionStepDefination.user_fill_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 728089301,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.clicks_on_confirm()"
});
formatter.result({
  "duration": 3049015000,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.filled_details_successfully()"
});
formatter.result({
  "duration": 7197561400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "unsuccessful gift collection",
  "description": "",
  "id": "verifies-gift-collection;unsuccessful-gift-collection;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on gift",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Choose a gift",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "gets the price of gift",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enter price",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insert date for which it is going to delivered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "details form navigated",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user fill details\"kajal\" ,\"mibal\" ,\"\u003cCustmer_mail\u003e\" ,\"rupal@gmail.com\" ,\"\u003ccutomer_phone\u003e\"",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "filled details successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2620681100,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_hover_on_gift()"
});
formatter.result({
  "duration": 10306017499,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.choose_a_gift()"
});
formatter.result({
  "duration": 3105394001,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.gets_the_price_of_gift()"
});
formatter.result({
  "duration": 3077503701,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.user_enter_price()"
});
formatter.result({
  "duration": 3149915000,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.insert_date_for_which_it_is_going_to_delivered()"
});
formatter.result({
  "duration": 3381571600,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.submit()"
});
formatter.result({
  "duration": 3084650701,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.details_form_navigated()"
});
formatter.result({
  "duration": 3021323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kajal",
      "offset": 18
    },
    {
      "val": "mibal",
      "offset": 27
    },
    {
      "val": "\u003cCustmer_mail\u003e",
      "offset": 36
    },
    {
      "val": "rupal@gmail.com",
      "offset": 54
    },
    {
      "val": "\u003ccutomer_phone\u003e",
      "offset": 73
    }
  ],
  "location": "GiftCollectionStepDefination.user_fill_details(String,String,String,String,String)"
});
formatter.result({
  "duration": 650758301,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.clicks_on_confirm()"
});
formatter.result({
  "duration": 3048172999,
  "status": "passed"
});
formatter.match({
  "location": "GiftCollectionStepDefination.filled_details_successfully()"
});
formatter.result({
  "duration": 3253198100,
  "status": "passed"
});
formatter.uri("HelpCenter.feature");
formatter.feature({
  "line": 1,
  "name": "verify help center page",
  "description": "",
  "id": "verify-help-center-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull verification",
  "description": "",
  "id": "verify-help-center-page;successfull-verification",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "clicks on Help",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on the link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "verifies the page by comparing \"Cancellations and Return\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2795109500,
  "status": "passed"
});
formatter.match({
  "location": "HelpCenterStepDefination.clicks_on_Help()"
});
formatter.result({
  "duration": 3803987799,
  "status": "passed"
});
formatter.match({
  "location": "HelpCenterStepDefination.click_on_the_link()"
});
formatter.result({
  "duration": 4503681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cancellations and Return",
      "offset": 32
    }
  ],
  "location": "HelpCenterStepDefination.verifies_the_page_by_comparing(String)"
});
formatter.result({
  "duration": 5264639700,
  "status": "passed"
});
formatter.uri("HomePage2.feature");
formatter.feature({
  "line": 1,
  "name": "Add product to cart",
  "description": "",
  "id": "add-product-to-cart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Succeccfull addition",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on \"study\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Laptop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigated to next page and popup closed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Add product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user get price of product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user add the details \"\u003cusername\u003e\" and \"\u003cphone\u003e\" , \"\u003cpin\u003e\" , \"\u003cfname\u003e\" , \"\u003clname\u003e\" , \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "product addedd successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition;",
  "rows": [
    {
      "cells": [
        "username",
        "phone",
        "pin",
        "fname",
        "lname",
        "address"
      ],
      "line": 19,
      "id": "add-product-to-cart;succeccfull-addition;;1"
    },
    {
      "cells": [
        "anujashelke0499@gmail.com",
        "9527620877",
        "444108",
        "Anuja",
        "Shelke",
        "changalwadi"
      ],
      "line": 20,
      "id": "add-product-to-cart;succeccfull-addition;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Succeccfull addition",
  "description": "",
  "id": "add-product-to-cart;succeccfull-addition;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on homePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user hover on \"study\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Laptop",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user navigated to next page and popup closed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on Add product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user get price of product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user add the details \"anujashelke0499@gmail.com\" and \"9527620877\" , \"444108\" , \"Anuja\" , \"Shelke\" , \"changalwadi\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "product addedd successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage2StepDefination.user_is_on_homePage()"
});
formatter.result({
  "duration": 2744822100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "study",
      "offset": 15
    }
  ],
  "location": "HomePage2StepDefination.user_hover_on(String)"
});
formatter.result({
  "duration": 6203582600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.clicks_on_Laptop()"
});
formatter.result({
  "duration": 4459897700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.user_navigated_to_next_page_and_popup_closed()"
});
formatter.result({
  "duration": 3197127000,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.user_click_on_Add_product_to_cart()"
});
formatter.result({
  "duration": 4638094200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.enter_quantity()"
});
formatter.result({
  "duration": 11022156500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.user_get_price_of_product()"
});
formatter.result({
  "duration": 3064580401,
  "status": "passed"
});
formatter.match({
  "location": "HomePage2StepDefination.user_clicks_on_Checkout()"
});
formatter.result({
  "duration": 3118952800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anujashelke0499@gmail.com",
      "offset": 22
    },
    {
      "val": "9527620877",
      "offset": 54
    },
    {
      "val": "444108",
      "offset": 69
    },
    {
      "val": "Anuja",
      "offset": 80
    },
    {
      "val": "Shelke",
      "offset": 90
    },
    {
      "val": "changalwadi",
      "offset": 101
    }
  ],
  "location": "HomePage2StepDefination.user_add_the_details_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 55321986800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //input[@name\u003d\u0027order[email]\u0027] (tried for 50 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat bddFrameReusable.WebDriverHelper.explicitWaitOfvisibilityOfElementLocated(WebDriverHelper.java:35)\r\n\tat bddframePageobject.HomePage2.enterUsername(HomePage2.java:90)\r\n\tat stepdefination.HomePage2StepDefination.user_add_the_details_and(HomePage2StepDefination.java:109)\r\n\tat ✽.And user add the details \"anujashelke0499@gmail.com\" and \"9527620877\" , \"444108\" , \"Anuja\" , \"Shelke\" , \"changalwadi\"(HomePage2.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027order[email]\u0027]\"}\n  (Session info: chrome\u003d102.0.5005.63)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MINDC1D155\u0027, ip: \u0027172.16.43.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.63, chrome: {chromedriverVersion: 102.0.5005.61 (0e59bcc00cc4..., userDataDir: C:\\Users\\MINDSD~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64916}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 692b7bcf0304831eb0f6822b5d37551e\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027order[email]\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat bddFrameReusable.WebDriverHelper.explicitWaitOfvisibilityOfElementLocated(WebDriverHelper.java:35)\r\n\tat bddframePageobject.HomePage2.enterUsername(HomePage2.java:90)\r\n\tat stepdefination.HomePage2StepDefination.user_add_the_details_and(HomePage2StepDefination.java:109)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePage2StepDefination.product_addedd_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("HomePage3.feature");
formatter.feature({
  "line": 1,
  "name": "Get user reponse",
  "description": "",
  "id": "get-user-reponse",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check user stories",
  "description": "",
  "id": "get-user-reponse;check-user-stories",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verifies the text \"TERMS OF SHIPPING AND DELIVERY\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on stories",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "successfully got the response",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2859655700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage3Stepdefination.user_click_on_link()"
});
formatter.result({
  "duration": 4067068800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TERMS OF SHIPPING AND DELIVERY",
      "offset": 19
    }
  ],
  "location": "HomePage3Stepdefination.verifies_the_text(String)"
});
formatter.result({
  "duration": 3421096600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage3Stepdefination.clicks_on_stories()"
});
formatter.result({
  "duration": 4074614200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage3Stepdefination.successfully_got_the_response()"
});
formatter.result({
  "duration": 7155716600,
  "status": "passed"
});
formatter.uri("Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Application Verification",
  "description": "",
  "id": "application-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify availability product",
  "description": "",
  "id": "application-verification;verify-availability-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicked on search icon",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "sended the text",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user navigated to next page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "popup closed if any",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "text is verified",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageStepdefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 2675076599,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.user_clicked_on_search_icon()"
});
formatter.result({
  "duration": 3196459601,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.sended_the_text()"
});
formatter.result({
  "duration": 6577369801,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.user_navigated_to_next_page()"
});
formatter.result({
  "duration": 7160028100,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.popup_closed_if_any()"
});
formatter.result({
  "duration": 6313461400,
  "status": "passed"
});
formatter.match({
  "location": "HomepageStepdefination.text_is_verified()"
});
formatter.result({
  "duration": 6360874601,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "login verification",
  "description": "",
  "id": "login-verification",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "unsuccessfull login",
  "description": "\r\nGiven: user is on homepage",
  "id": "login-verification;unsuccessfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user hovers on login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Login window popup",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enters  fill invalid email ,password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "try to click on submit with empty fields",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "displays fields are mandatory",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_hovers_on_login()"
});
formatter.result({
  "duration": 6252067300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_Login()"
});
formatter.result({
  "duration": 3147590201,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.login_window_popup()"
});
formatter.result({
  "duration": 3014272600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.enters_fill_invalid_email_password()"
});
formatter.result({
  "duration": 968239700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.clicks_on_submit()"
});
formatter.result({
  "duration": 5741524300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.error_massage_displayed()"
});
formatter.result({
  "duration": 5140560000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.try_to_click_on_submit_with_empty_fields()"
});
formatter.result({
  "duration": 3131815900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.displays_fields_are_mandatory()"
});
formatter.result({
  "duration": 7269937999,
  "status": "passed"
});
formatter.uri("ProductDetails.feature");
formatter.feature({
  "line": 1,
  "name": "get product Details",
  "description": "",
  "id": "get-product-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check details of product",
  "description": "",
  "id": "get-product-details;check-details-of-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user hover on decor text in menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on Doormat",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "closes popUp if any",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "hovers on recommended item list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user got dimension of product",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2657073400,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.user_hover_on_decor_text_in_menu()"
});
formatter.result({
  "duration": 6192244799,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.click_on_Doormat()"
});
formatter.result({
  "duration": 5151090599,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.closes_popUp_if_any()"
});
formatter.result({
  "duration": 3211949100,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.hovers_on_recommended_item_list()"
});
formatter.result({
  "duration": 3222001501,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.click_on_product()"
});
formatter.result({
  "duration": 3263810400,
  "status": "passed"
});
formatter.match({
  "location": "DecorStepDefination.user_got_dimension_of_product()"
});
formatter.result({
  "duration": 2168108600,
  "status": "passed"
});
formatter.uri("StoresPage.feature");
formatter.feature({
  "line": 1,
  "name": "check urban ladder location",
  "description": "",
  "id": "check-urban-ladder-location",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "check location",
  "description": "",
  "id": "check-urban-ladder-location;check-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on stores",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "navigated to next page and check the page by verifying text",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on location",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "location page successfully verified",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage3Stepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 2851476899,
  "status": "passed"
});
formatter.match({
  "location": "StoresStepDefination.user_click_on_stores()"
});
formatter.result({
  "duration": 4438619601,
  "status": "passed"
});
formatter.match({
  "location": "StoresStepDefination.navigated_to_next_page_and_check_the_page_by_verifying_text()"
});
formatter.result({
  "duration": 5771320000,
  "status": "passed"
});
formatter.match({
  "location": "StoresStepDefination.clicks_on_location()"
});
formatter.result({
  "duration": 5108172900,
  "status": "passed"
});
formatter.match({
  "location": "StoresStepDefination.location_page_successfully_verified()"
});
formatter.result({
  "duration": 3291137301,
  "status": "passed"
});
});