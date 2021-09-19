const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
//?  page.? = document.querySelector()
//?  page.?? = document.querySelectorAll()




const url = "https://www.airbnb.com/s/Copenhagen/homes?refinement_paths%5B%5D=%2Fhomes&click_referer=t%3ASEE_ALL%7Csid%3A9ea0a18e-f8e0-4eec-8840-b5a4290dfd22%7Cst%3ASTOREFRONT_DESTINATION_GROUPINGS&title_type=HOMES_WITH_LOCATION&query=Copenhagen&allow_override%5B%5D=&s_tag=UrkEXloL&section_offset=7&items_offset=36"

async function scrapeCars(url) {
try {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
  });
  const page = await browser.newPage();
  await page.goto(url);

  const html = await page.evaluate(() => document.body.innerHTML);
  const $ = cheerio.load(html);

  const homes = $("[itemprop='url'").map((i, element))
} catch (error) { 
  console.log(error);
  }
 } 



scrapeCars(url)



  //! select all details, scrape text and points

 

 



  //! console log the details



  //! insert into google spreadsheet 



