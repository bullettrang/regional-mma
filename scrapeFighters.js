const puppeteer = require('puppeteer');
const REGIONS_URL = 'https://www.tapology.com/regions';
const hawaiiURL= 'https://www.tapology.com/regions/hawaii';
const chinaURL ='https://www.tapology.com/regions/china';
const _ =require('lodash');
//https://stackoverflow.com/questions/49432579/await-is-only-valid-in-async-function/49432604
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

/**
 * @function getFighterNamesByRegion
 * @param {string} region - string of region requested
 * @returns {array}  - returns array of regional fighter names,image, href to fighter page, rank strings 
 */
async function getFighterNamesByRegion(region) {
  let url =`https://www.tapology.com/regions/${region}`;

  try{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('error', err=> {
      console.log('error happen at the page: ', err);
    });
    await page.goto(url,{waitUntil: 'domcontentloaded'});
    
    const fighters =await page.$$eval("div.regionRankingPreviewFighter",rankElems=>rankElems.map(rankElem =>{
      return{
        rank: rankElem.querySelector(' span').innerText,
        image: rankElem.querySelector(' img').src,
        name: rankElem.querySelector(" a").innerText,
        href:rankElem.querySelector(' a').href
      }
    }))
    console.log(fighters);

    
   await browser.close();
    return fighters;
  }
  catch(e){
    console.log(e);
  }

}


/**
 * @function getRegionsNames - scrapes region names from specified region
 * @returns {array}  - returns array of region name strings 
 */
async function getRegionsNames() {
  let url =`https://www.tapology.com/regions/`;
(async () => {

  const browser = await puppeteer.launch({
      headless: true
  });
  const page = await browser.newPage();
  await page.goto(url,{waitUntil: 'domcontentloaded'});
  page.on('error', err=> {
    console.log('error happen at the page: ', err);
  });
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

/**
 * @function getRankedRegionalImages - scrapes image srcs of ranked regional fighters
 * @param {string} region - string of region requested
 * @returns {array}  - array of image src's
 */
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

/**
 * @function countryStates - scrapes specific region names from tapology regions page
 * @param {string} region - string of region requested
 * @returns {array}  - array of region names and href strings
 */
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


/**
 * @function getSuggestedSearchLinks - function that gets array
 * @param {string} name - string of fighter name requested
 * @returns {array}  - array of suggested fighter href pages
 */
async function getSuggestedSearchLinks(name){
  const url = 'https://www.tapology.com';

  (async()=>{
        const browser = await puppeteer.launch({
          headless: true
      });

      try{
        const page = await browser.newPage();                                                   //go to page and wait for dom to load
        await page.goto(url,{waitUntil: 'domcontentloaded'});
        await page.type('#siteSearch', name)                                         //type in fighter name
        await page.waitForSelector('#searchSuggest', {visible: true})                 //wait for search suggestons to appear
        const links= await page.$$eval('#searchSuggest > ul >li >span> a',hrefs => hrefs.map(link=>link.href));
        console.log(links);
      // const namesSuggested = links.map(link=>{
      //   // const hrefToNameRegex= /[^https://www.tapology.com/fightcenter/fighters/\d]\w+/gm;
      //   // const cleanString = link.match(hrefToNameRegex).join(' ').replace(/-/g,'').replace(/([^ \t]+)/g, function(_, word) { return word[0].toUpperCase().concat(word.substring(1)); });
      //   return getFighterNameFromHref(link);
      // })
      //  console.log(namesSuggested);
        await browser.close(); 
      }
      catch(e){
        console.log(e);
      }
  })();
}

/**
 * @function getFighterDetails - function that scrapes fighter profile page for personal details
 * @param {string} name - string of fighter name requested
 * @returns {object}  - object of fighter details
 */
async function getFighterDetails(name){
  const url = 'https://www.tapology.com';
  (async()=>{
    const browser = await puppeteer.launch({
      headless: true
  });
  try{
    const page = await browser.newPage();                                                   //go to page and wait for dom to load
    await page.goto(url,{waitUntil: 'domcontentloaded'});
    await page.type('#siteSearch', name)                                         //type in fighter name
    await page.waitForSelector('#searchSuggest', {visible: true})                 //wait for search suggestons to appear
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
  })();
}

/**
 * 
 * HELPER FUNCTIONS
 */

/**
 * @function getFighterObject - helper function to convert array of fighter details into object with corresponding keys
 * @param {array} fighterData - array of fighter details such as name, record, weightclass, height, etc
 * @returns {object}  - object of fighter details
 */
const getFighterObject =(fighterData)=>{
  //TODO SEPERATE record into wins/losses/ties/NC
  const templateKeys = ['name','record','nickname','streak','age','bday','lastFightDate','company','weightClass','weight','team','height','reach','earnings','hometown','currentResidence'];
  return  _.zipObject(templateKeys,fighterData);
}

/**
 * @function getFighterNameFromHref - helper function to parse tapology fighter href for 
 * @param {string} - href 
 * @returns {string} fighter name 
 */
//const cleanString = link.match(hrefToNameRegex).join(' ').replace(/-/g,'').replace(/([^ \t]+)/g, function(_, word) { return word[0].toUpperCase().concat(word.substring(1)); });

const getFighterNameFromHref=(href)=>{
  const hrefToNameRegex= /[^https://www.tapology.com/fightcenter/fighters/\d]\w+/gm;
  const cleanString =  href.match(hrefToNameRegex)
                            .join(' ')                     //join words at whitespace
                            .replace(/-/g,'')             //remove '-' and replace with whitespace
                            .replace(/([^ \t]+)/g, function(_, word) { return word[0].toUpperCase().concat(word.substring(1)); });      //capitalize first of every word
  return cleanString;
}


module.exports={
  getFighters:getFighterNamesByRegion
}





