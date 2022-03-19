const puppeteer = require(`${__dirname}/modules/puppeteer`);
const UserAgent = require(`${__dirname}/modules/userAgent`);
const prompt = require(`${__dirname}/modules/prompt`);

const getcryptoPairs = require(`${__dirname}/modules/getcryptoPairs`);




    // (async () => {
    //     const browser = await puppeteer.launch({
    //         headless: false,
    //     });
    //     const page = await browser.newPage();
    //     const userAgent = new UserAgent();
    //     await page.setUserAgent(userAgent.toString())
    //     await page.goto('https://2ip.ru/');
    //     await page.waitForTimeout(3000)
    //     await page.screenshot({ path: 'example2.png' });

    //     await browser.close();
    // })();



let start = async () => {
    let balanace = 100 // usdt

    let cryptoList= await getcryptoPairs()

}

start()