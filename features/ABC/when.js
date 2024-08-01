import { When } from '@wdio/cucumber-framework';
import { expect } from 'chai';
//import { expect as expectChai } from 'chai';

When(/^I enter "([^"]*)?" into the search bar and submit$/, async (searchTerm) => {
    const searchBar = await $(".Searchlist__button").waitForDisplayed({ timeout: 2000 });
    await $(".Searchlist__button").click();
    await $(".Input.Searchlist__input").waitForDisplayed({ timeout: 3000 });
    await $(".Input.Searchlist__input").setValue(searchTerm);
});
// When(/^I click on the right arrow mark button$/, async () => {
//     const rightArrowButton = await $(".hero__arrow-right"); 
//     for(let i=0; i<6; i++)
//     {
//         await rightArrowButton.click();
//         await browser.pause(3000);
//     }
// });
When(/^I close the browser$/,async () => {
    await browser.closeWindow();
});
When(/^I store the element's "([^"]*)?" text$/,async(selector)=>{
    let ele=await $(selector).getText();
    global.ele=ele;
});
When(/^I move to element "([^"]*)?"$/, async(selector)=>{
    await $(selector).moveTo();
});
When(/^I click on the element "([^"]*)?"$/, async(selector)=>{
    await $(selector).waitForDisplayed({time:7000});
    await $(selector).click();
});
When(/^I wait on element "([^"]*)?" to be displayed$/, async(selector)=>
{
    await $(selector).waitForDisplayed({time:7000});
});
When(/^I click on the "([^"]*)?" link$/, async(selector)=>{
   await $(selector).waitForDisplayed({time:2000});
   await $(selector).click();
 });
 When(/^I am not logged in to an ABC account$/,async()=>{
});
When(/^I click on "([^"]*)?" button on hero wrapper carousel image$/, async(selector)=>{
    await $(selector).waitForDisplayed({time:2000});
    await $(selector).click();
});
When(/^I click on the "([^"]*)?" button$/,async(selector)=>{
    await $(selector).isDisplayed();
    await $(selector).click();
});
When(/^I see the correct "([^"]*)?" carousel dot highlighted$/, async(selector)=>{
    await $(selector).waitForDisplayed({time:3000})
    await $(selector).isDisplayed();
})
When(/^I stored text before click "([^"]*)?"$/,async(selector)=>
{
    let ele = await $(selector);
    global.ele = await ele.getText();
    console.log(global.ele);
});
When(/^I stored text after click "([^"]*)?"$/,async(selector)=>
    {
    let ele1 = await $(selector);
    global.ele1 = await ele1.getText();
    console.log(global.ele1);
    expect(global.ele).to.not.equal(global.ele1); 
});
When(/^I see next show image "([^"]*)?"$/,async(selector)=>{
    let ele1 = await $(selector).isDisplayed();
});
When(/^I click on the hulu "([^"]*)?" button$/,async(selector)=>{
    await $(selector).isDisplayed();
    await $(selector).click();
});



