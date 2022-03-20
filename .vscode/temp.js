const puppeteer = require(`${__dirname}/modules/puppeteer`);
const UserAgent = require(`${__dirname}/modules/userAgent`);
const prompt = require(`${__dirname}/modules/prompt`);
    (async () => {
        const browser = await puppeteer.launch({
            headless: false,
        });
        const page = await browser.newPage();
        const userAgent = new UserAgent();
        await page.setUserAgent(userAgent.toString()) //ppr
        await page.goto('https://2ip.ru/');
        await page.waitForTimeout(3000)
        await page.screenshot({ path: 'example2.png' });

        await browser.close();
    })();



    const getcryptoPairs = require(`${__dirname}/modules/getcryptoPairs`);
    let cryptoList= await getcryptoPairs()
    let cryptoPairs = fs.readFileSync('./data/cryptoList.json',  'utf8')  // get CryptoPairs list
    cryptoPairs = JSON.parse(cryptoPairs)
    let filterPairs = cryptoPairs.filter(el => el.quoteAsset === 'USDT' || el.baseAsset === 'USDT')
    console.log(filterPairs)



    
const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);
let cryptorPrice = await getCryptoPrice() //getCryptoPrice sell buy

