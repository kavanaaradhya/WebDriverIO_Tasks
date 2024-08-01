import {Then} from '@wdio/cucumber-framework';

Then(/^I expect the url to contain "([^"]*)?"$/, async (text) => {
    let browserUrl = await browser.getUrl();
    console.log(browserUrl);
    expect(browserUrl).toContain(text); //wdio
    //expect(browserUrl).to.equal(text);
  });
  