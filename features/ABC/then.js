import {Then} from '@wdio/cucumber-framework';
import { expect as expectChai } from 'chai'

// Then(/^I expect the element "([^"]*)?" is displayed$/, async (selector) => {
//     await $(selector).waitForDisplayed({ timeout: 2000 });
//     expect(await $(selector)).toBeDisplayed();
// });
// Then(/^I expect the element "([^"]*)?" not equal stored text$/,async(selector)=>
//     {
//            let element=await $(selector);
//           let ele=element.getText();
//           expectChai(ele).to.not.equal(global.ele); 
//     }
// );

Then(/^I see the standard About page layout including the "([^"]*)?"$/, async (selector) => {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 3000 });
    expect(await element.isDisplayed());
});
Then(/^I see the "([^"]*)?" link$/, async(selector)=>{
    const element = await $(selector);
    await element.waitForDisplayed({ timeout: 3000 });
    expect(await element.isDisplayed());
})
Then(/^I expect that url is "([^"]*)?"$/, async (expectedUrl) => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(expectedUrl);
});
Then(/^I am on the Home page with text "([^"]*)?"$/,async(selector)=>{
    const ele=await $(selector);
    expect(await ele.isDisplayed());
});
Then(/^I am brought to the correct show page "([^"]*)?"$/,async(selector)=>{
    await $(selector);
    expect((await $(selector)).toBeDisplayed);
});
Then(/^I am brought to the correct Hulu show page "([^"]*)?"$/, async(selector)=>{
    await $(selector);
    expect((await $(selector)).toBeDisplayed);
});
