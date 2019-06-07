
const puppeteer = require('puppeteer');
const REGIONS_URL = 'https://www.tapology.com/regions';
const hawaiiURL= 'https://www.tapology.com/regions/hawaii';
const chinaURL ='https://www.tapology.com/regions/china';
const _ =require('lodash');
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
  page.on('error', err=> {
    console.log('error happen at the page: ', err);
  });
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


async function getRegionsNames(url) {
(async () => {

  const browser = await puppeteer.launch({
      headless: true
  });
  const page = await browser.newPage();
  await page.goto(url,{waitUntil: 'domcontentloaded'});
  page.on('error', err=> {
    console.log('error happen at the page: ', err);
  });
  const example  = await page.$('.regionIndex');
  const scrapedRegions = await page.evaluate(() =>
  Array.from(document.querySelectorAll('h4'))
    .map(link => ({
      title: link.innerText
    }))
  )
  console.log('scrapedData',scrapedRegions);
  await page.close();
  await browser.close();
  })();

}

//get urls of regional ranked fighters
async function getRankedRegionalImages(region){
  let url =`https://www.tapology.com/regions/${region}`;
  (async () => {

    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    page.on('error', err=> {
      console.log('error happen at the page: ', err);
    });
    await page.goto(url,{waitUntil: 'domcontentloaded'});
    const imageSrcs = await page.$$eval(".regionRankingPreviewFightersContainer img",imgs => imgs.map(img => img.src));                //wait for element
    console.log('scrapedData',imageSrcs);
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
    page.on('error', err=> {
      console.log('error happen at the page: ', err);
    });

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
// (async() => {
//   console.log('before start');

//   myfighters=  await  getFighterNamesByRegion('poland');
  
//   console.log(myfighters);
  
// })();



async function searchForFighter(name){
  const url = 'https://www.tapology.com';
  (async()=>{
    const browser = await puppeteer.launch({
      headless: true
  });
  try{
    const page = await browser.newPage();                                                   //go to page and wait for dom to load
    await page.goto(url,{waitUntil: 'domcontentloaded'});
    await page.type('#siteSearch', name)                                         //type in fighter name
    await page.waitForSelector('#searchSuggest', {visible: true})
    const link= await page.$eval('.star > a',el => el.href);
    await page.goto(link,{waitUntil:'domcontentloaded'});                         //wait for fighter page to load
    const fighterData = await page.$$eval("#stats > ul > li >span",spans =>spans
                                                                            .filter(span =>{if(span.innerText==='in')return false; else return true;})
                                                                            .map(span=>span.innerText));                //wait for element
                                                                            console.log(getFighterObject(fighterData));
   await browser.close();                                                                            
  }
  catch(e){
    console.log(e);
  }

  //console.log(fighterData);

  })();
}

const parseFighterDataFromDOM = async (page)=>{
  const fighterData = await page.$$eval("#stats > ul > li >span",spans =>spans
  .filter(span =>{if(span.innerText==='in')return false; else return true;})
  .map(span=>span.innerText));                //wait for element
  console.log(getFighterObject(fighterData));
}

const getFighterObject =(fighterData)=>{
  const templateKeys = ['name','record','nickname','streak','age','bday','lastFightDate','company','weightClass','weight','team','height','reach','earnings','hometown','currentResidence'];
  return  _.zipObject(templateKeys,fighterData);
  
}

//#searchSuggest

searchForFighter('Khabib');








