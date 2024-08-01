import { When } from "@wdio/cucumber-framework";
import { expect as expectChai } from "chai";
//import test from '../SWAG_PROJ/' assert { type: 'json' };

When(/^I login with valid credentials$/, async () => {
  await $("#user-name").setValue("standard_user");
  await $("#password").setValue("secret_sauce");
  await $("#login-button").click();
});
When(/^I set value "([^"]*)?" for the element "([^"]*)?"$/,
  async (text, element) => {
    let ele = await $(element);
    await ele.setValue(text);
  }
);
When(/^I click on element "([^"]*)?"$/, async (element) => {
  (await $(element)).click();
});
When(/^I wait for the element "([^"]*)?" is displayed$/, async (element) => {
  (await $(element)).waitForDisplayed();
});

When(/^I store the prices of product "([^"]*)?"$/, async (selector) => {
  let ele = await $(selector);
  let prod1 = await ele.getText();
  global.prod1 = prod1.replace("$", "");
  console.log(global.prod1);
});

When(/^I scroll to element "([^"]*)?"$/, async (element) => {
  await $(element).scrollIntoView();
});
