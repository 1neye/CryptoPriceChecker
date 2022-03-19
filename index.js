const puppeteer = require(`${__dirname}/modules/puppeteer`);
const UserAgent = require(`${__dirname}/modules/userAgent`);
const prompt = require(`${__dirname}/modules/prompt`);

const getcryptoPairs = require(`${__dirname}/modules/getcryptoPairs`);
const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);

const fs = require('fs')


// https://api.binance.com/api/v3/ticker/price?symbol=FIROUSDT get current price
// https://api.binance.com/api/v3/exchangeInfo get all symbols

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

// let cryptoList= await getcryptoPairs() 

let start = async () => {
    let balanace = 100 // usdt

    let cryptoPairs = fs.readFileSync('./data/cryptoList.json',  'utf8')

    cryptoPairs = JSON.parse(cryptoPairs)

    let filterPairs = cryptoPairs.filter(el => el.quoteAsset === 'USDT' || el.baseAsset === 'USDT')
    console.log(filterPairs)

    let cryptorPrice = await getCryptoPrice(cryptoPairs)
}

start()