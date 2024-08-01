import { When } from '@wdio/cucumber-framework';

When(/^I pause for "([^"]*)?"ms$/, async (time) => {
    await browser.pause(time);

})
When(/^I close the webPage$/,async () => {
  await browser.closeWindow();
  
});


When(/^I scroll to element "([^"]*)?"$/, async (element) => {
  await $(element).scrollIntoView();
});


// When(/^I store the value of element of the position "([^"]*)?"$/, async (selector) => {
//   let eleArr1 = await $$(selector);
//   global.posStrArr1 = []; 

//   for (let i = 0; i < eleArr1.length; i++) {
//       let posStr1 = await eleArr1[i].getText();
//       global.posStrArr1.push(posStr1);
//   }
//   console.log(`Position $:${global.posStrArr1}`);
// });
// When(/^I store the value of element of the team "([^"]*)?"$/, async (selector) => {
//   let eleArr2 = await $$(selector);
//   global.teamStrArr2 = []; 

//   for (let i = 0; i < eleArr2.length; i++) {
//       let teamStr2 = await eleArr2[i].getText();
//       global.teamStrArr2.push(teamStr2);
//   }
//   console.log(`Team Name $:${global.priceStrArr2}`);
// });
// When(/^I store the matches of the team "([^"]*)?"$/, async (selector) => {
//   let eleArr3 = await $$(selector);
//   global.matchStrArr3 = []; 

//   for (let i = 0; i < eleArr3.length; i++) {
//       let matchStr3 = await eleArr3[i].getText();
//       global.matchStrArr3.push(matchStr3);
//   }
//   console.log(`Matches $:${global.matchStrArr3}`);
// });


// When(/^I store the values of the elements for position "([^"]*)?", team "([^"]*)?", and matches "([^"]*)?"$/, async (positionSelector, teamSelector, matchSelector) => {

//   let positionElements = await $$(positionSelector);
//   let teamElements = await $$(teamSelector);
//   let matchElements = await $$(matchSelector);

//   global.total = [];

//   for (let i = 0; i < positionElements.length; i++) {
//     let positionText = await positionElements[i].getText();
//     let teamText = await teamElements[i].getText();
//     let matchText = await matchElements[i].getText();
    
//     global.total.push({
//       position: positionText,
//       team: teamText,
//       matches: matchText
//     });
//   }
//   console.log('Combined data:', global.total);

//   let teamsWith30Matches = [];
//   let teamsWithLessThan15Matches = [];
//   let teamWithPosition10 = [];

//   global.total.forEach(data => {
//     if (data.matches === '30') {
//       teamsWith30Matches.push(data.team);
//     }
//     if (parseInt(data.matches) < 15) {
//       teamsWithLessThan15Matches.push(data.team);
//     }
//     if (data.position === '10') {
//       teamWithPosition10.push(data.team);
//     }
//   });

//   if (teamsWith30Matches.length > 0) {
//     console.log('Teams win 30 matches:', teamsWith30Matches);
//   }
//   if (teamsWithLessThan15Matches.length > 0) {
//     console.log('Teams win matches less than 15:', teamsWithLessThan15Matches);
//   }
//   if (teamWithPosition10.length > 0) {
//     console.log('Teamname of the position 10:', teamWithPosition10);
//   }
// });

When(/^I check for matches greater than or equal to 30$/, async () => {
  const teamPlayed=await $$(`//h3//span[contains(@class,'si-fname')]`)
 
const matchPlayed=await $$(`//div[@class='si-table-body']//div[contains(@class,'si-matches')]/span`)
 
for(let i=0;i<teamPlayed.length;i++)
{
    //console.log(await teamPlayed[i].getText());
    //console.log(await matchPlayed[i].getText());
    if(await matchPlayed[i].getText()>=30)
    {
     
      console.log(await teamPlayed[i].getText());
    }
    if(await matchPlayed[i].getText()<15)
      {
       
        console.log(await teamPlayed[i].getText());
      }

}

  
});
