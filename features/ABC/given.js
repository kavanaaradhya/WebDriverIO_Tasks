import { Given } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

// Given(/^I open the abc site$/, async() => {
//   await browser.url(`https://abc.com/`);
//   await browser.maximizeWindow();
// });

Given(/^I open the url "([^"]*)?"$/, async(selector) => {
  await browser.url(selector);
  browser.pause(3000);
  await browser.maximizeWindow();
});

