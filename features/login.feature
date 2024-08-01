Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I open the site
#  // When(/^Validate all products have valid price$/, async function() {
# //     let eleArr = await $$(`.inventory_item_price`);
# //     let priceStrArr = [];
# //     for (let i = 0; i < eleArr.length; i++) {
# //         let priceStr = await eleArr[i].getText();
# //         priceStrArr.push(priceStr);
# //     }
# //     console.log(`price contains $:${priceStrArr}`);
    
# //     // Map string prices to float and store in global variable
# //     global.priceNumArr = priceStrArr.map(ele => parseFloat(ele.replace("$", "")));
# //     console.log(`price does not contain $:${global.priceNumArr}`);
    
# //     // Uncomment the following lines to validate the prices
# //     // let invalidPriceArr = global.priceNumArr.filter(ele => ele <= 0);
# //     // expect(invalidPriceArr.length).toEqual(0);
# //   });


# // When(/^I store the value of element "([^"]*)?"$/, async (selector) => {
# //     let eleArr1 = await $$(selector);
# //     global.priceStrArr1 = []; // Reset array if needed

# //     for (let i = 0; i < eleArr1.length; i++) {
# //         let priceStr1 = await eleArr1[i].getText();
# //         global.priceStrArr1.push(priceStr1);
# //     }
# //     console.log(`price contains after add to cart $:${global.priceStrArr1}`);
# // });


# // When(/^I compare the prices before add to cart and after add to cart$/, async() =>{

# //     let result=priceStrArr.includes(priceStrArr1);
# //     console.log(result);

# // })   
# // Then(/^I expect the element "([^"]*)?" to contain "([^"]*)?"$/, async (element, text) => {
#   //   let value = await $(element).getText();
#   //    console.log( value );
#   //    expect(value).toContain(text);
#     // let eleArr=await $$(`.inventory_item_price`)
#     // let priceStrArr=[]
#     // for(let i=0; i<eleArr.length; i++){
#     //     let priceStr=await eleArr[i].getText()
#     //     priceStrArr.push(priceStr)
#     // }
#     // console.log(`price contains $:${priceStrArr}`);
#     // let priceNumArr=priceStrArr.map(ele=>parseFloat(ele.replace("$","")))
#     // console.log(`price does not contain $:${priceNumArr}`);
#   //});
#//import { expect } from "chai"


# // Then(/^Validate all products have valid price$/, async function(){
# //     let eleArr=await $$(`.inventory_item_price`)
# //     let priceStrArr=[]
# //     for(let i=0; i<eleArr.length; i++){
# //         let priceStr=await eleArr[i].getText()
# //         priceStrArr.push(priceStr)
# //     }
# //     console.log(`price contains $:${priceStrArr}`);
# //     let priceNumArr=priceStrArr.map(ele=>parseFloat(ele.replace("$","")))
# //     console.log(`price does not contain $:${priceNumArr}`);

# //     // let invalidPriceArr=priceNumArr.filter((ele)=>ele<=0);
# //     // expect(invalidPriceArr.length).toEqual(0);
# // })

# // Then(/^Validate all products have valid price$/, async function() {
# //   let eleArr = await $$(`.inventory_item_price`);
# //   let priceStrArr = [];
# //   for (let i = 0; i < eleArr.length; i++) {
# //       let priceStr = await eleArr[i].getText();
# //       priceStrArr.push(priceStr);
# //   }
# //   console.log(`price contains $:${priceStrArr}`);
  
# //   // Map string prices to float and store in global variable
# //   global.priceNumArr = priceStrArr.map(ele => parseFloat(ele.replace("$", "")));
# //   console.log(`price does not contain $:${global.priceNumArr}`);
  
# //   // Uncomment the following lines to validate the prices
# //   // let invalidPriceArr = global.priceNumArr.filter(ele => ele <= 0);
# //   // expect(invalidPriceArr.length).toEqual(0);
# // });