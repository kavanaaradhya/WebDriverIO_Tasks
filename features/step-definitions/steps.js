import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^I open the site$/, async () => {
    await browser.url(`https://the-internet.herokuapp.com`);
});

