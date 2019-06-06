
const puppeteer = require('puppeteer');
const fs = require('fs');
const REGIONS_URL = 'https://www.tapology.com/regions';
const hawaiiURL= 'https://www.tapology.com/regions/hawaii';
const chinaURL ='https://www.tapology.com/regions/china';

/**
 * 
 * @param {param} SELECTOR string
 * @returns number 
 */
const getElementLength = async (SELECTOR)=>{
  const length = await page.evaluate(sel=>{
    return document.querySelectorAll(sel).length
  },SELECTOR) ;
  return length;
} 


async function getFighterNamesByRegion(region) {
  let url =`https://www.tapology.com/regions/${region}`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const REGION_RANK_NAME ='#content > div.regionRankingsPreview > div.regionRankingPreviewFightersContainer > div:nth-child(INDEX) > div.regionRankingPreviewFighterName > a'
  const LENGTH_SELECTOR_CLASS = 'regionRankingPreviewFighterName';
  // get the total length of fighter names
  let listLength = await page.evaluate((sel) => {
    return document.getElementsByClassName(sel).length;
  }, LENGTH_SELECTOR_CLASS);
  let fighters=[];
for (let i = 1; i <= listLength; i++) {
    // change the index to the next child
    let fighterNameSelector = REGION_RANK_NAME.replace("INDEX", i);
    let fighterName = await page.evaluate((sel) => {
        return document.querySelector(sel).innerText;
      }, fighterNameSelector);
    // not all users have emails visible 
    //console.log(fighterName);
      fighters.push(fighterName);
}
  
 await browser.close();
  return fighters;
}

/**
 * @params {url} string
 * returns the total regions of Tapology regional page
 */
async function getRegionCount(url){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const MAX_REGIONS_PER_ROW =5;
  const REGION_LENGTH_SELECTOR='#content > div.regionIndex > h4';  //.length

  const total_Regions = await page.evaluate(sel=>{
    return document.querySelectorAll(sel).length
  },REGION_LENGTH_SELECTOR);

  

  await browser.close();
  return total_Regions;
}



async function getRegionsNames(url) {
(async () => {

  const browser = await puppeteer.launch({
      headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.tapology.com/regions',{waitUntil: 'domcontentloaded'});
  //const example  = await page.$('.regionIndex');
  const scrapedData = await page.evaluate(() =>
  Array.from(document.querySelectorAll('h4'))
    .map(link => ({
      title: link.innerText
    }))
  )
  console.log('scrapedData',scrapedData);
  await page.close();
  await browser.close();
  
  
  })();

}

async function countryStates() {
  (async () => {
  
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://www.tapology.com/regions',{waitUntil: 'domcontentloaded'});
    //const example  = await page.$('.regionIndex');
    const scrapedData = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.regionIndexGroups li a'))
      .map(link =>{
          if(link.innerText.length >0){
            return           link.innerText
          }
        })
      .filter(link=>{
        if(link){
          return link;
        }
      })
    )
    console.log('.regionIndexGroups country states',scrapedData);

    //const data = new Uint8Array(Buffer.from(scrapedData));
    await page.close();
    await browser.close();
    
    
    })();
  
  }
  



// Call start         //https://stackoverflow.com/questions/49432579/await-is-only-valid-in-async-function/49432604
(async() => {
  console.log('before start');

  myfighters=  await  getFighterNamesByRegion('poland');
  
  console.log(myfighters);
  
})();


//getRegionsNames(REGIONS_URL);

