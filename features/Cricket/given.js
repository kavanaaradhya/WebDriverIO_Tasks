import { Given } from '@wdio/cucumber-framework';

Given(/^I open the page$/, async () => {
    await browser.url(`https://www.icc-cricket.com/rankings/team-rankings/mens/test`);
    await browser.setTimeout({implicit:10000, payload:10000});
    await browser.maximizeWindow();
   
});