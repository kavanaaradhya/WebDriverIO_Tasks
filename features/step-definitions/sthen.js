import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
//import { expect, $ } from '@wdio/globals'
//import { expect as expectChai } from 'chai' 


Then(/^Inventory page should list (.*)$/, async function (NoOfProducts){
    if(!NoOfProducts) throw Error(`Invalid product count provided: ${NoOfProducts}`)
    let eleArr=await $$(`.inventory_item_name`)
    expect(eleArr.length).toEqual(parseInt(NoOfProducts))
})
Then(/^Validate all products have valid price (.*)$/, async function(){
    let eleArr=await $$(`.inventory_item_price`)
    let priceStrArr=[]
    for(let i=0; i<eleArr.length; i++){
        let priceStr=await eleArr[i].getText()
        priceStrArr.push(priceStr)
    }
    console.log(`price contains $:${priceStrArr}`);
    let priceNumArr=priceStrArr.map(ele=>parseFloat(ele.replace("$","")))
    console.log(`price does not contain $:${priceNumArr}`);

    let invalidPriceArr=priceNumArr.filter((ele)=>ele<=0);
    expect(invalidPriceArr.length).toEqual(0);
})