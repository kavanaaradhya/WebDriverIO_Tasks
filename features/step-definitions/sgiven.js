import { Given } from "@wdio/cucumber-framework";
//import chai from "chai"
import { expect, $ } from '@wdio/globals'

Given(/^Login to inventary web app$/, async function(){
    await browser.url(`https://www.saucedemo.com/v1/`);
    await browser.setTimeout({implicit:10000, payload:10000});
    await browser.maximizeWindow();
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();
})