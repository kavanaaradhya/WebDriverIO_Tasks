import {Then} from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals'
import { expect as expectChai } from 'chai';


Then(/^I expect the url to contain "([^"]*)?"$/, async (text) => {
    let browserUrl = await browser.getUrl();
    console.log(browserUrl);
    expect(browserUrl).toContain(text); 
  });
Then(/^I expect the element "([^"]*)?" is displayed$/, async (text1) => {
    (await $(text1)).isDisplayed();
  });

  Then(/^I login with invalid credentials$/,async()=>
  {
      await $('#user-name').setValue('standard_user1');
      await $('#password').setValue('secret_sauce1');
      await $('#login-button').click();
      expect((await $("h3[data-test='error']")).toBeDisplayed);
});
Then(/^I expect that element "([^"]*)?" contains text "([^"]*)?"$/, async (selector,expectedText) => {
  let ele = await $(selector);
  let actualText = await ele.getText();
  console.log(`Element text is::: "${actualText}"`);
  //expect(actualText).toBeDisplayed(expectedText);
  expectChai(actualText).to.equal(expectedText);

});
Then(/^I expect the element "([^"]*)?" to contain expected$/,
  async (selector) => {
    let ele = await $(selector);
    let actualText = (await ele.getText()).replace("$", "");
    expectChai(actualText).to.equal(global.prod1); 

  }
);