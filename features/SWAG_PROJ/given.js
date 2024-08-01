import { Given } from '@wdio/cucumber-framework';


Given(/^I open the page$/, () => {
  browser.url(`https://www.saucedemo.com/v1/`);
  browser.maximizeWindow();
});