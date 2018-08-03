const puppeteer = require('puppeteer');

// const getFavicon = function(url){
  let run = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(process.argv[2]);
    // await page.goto(url);
    const result = await page.evaluate(()=> {
      return document.querySelector('link[rel="shortcut icon"]').href;
    });

    browser.close();
    return result ? (result) : ("https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png");
  }

  run().then((value) => {
    console.log(value);
  })

// }
// export default getFavicon;