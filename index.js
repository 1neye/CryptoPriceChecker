
const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);
const analizePrice = require(`${__dirname}/modules/analizePrice`);

const fs = require('fs');
const sortByPercent = require('./modules/sortByPercent');


// https://api.binance.com/api/v3/ticker/price?symbol=FIROUSDT get current price
// https://api.binance.com/api/v3/exchangeInfo get all symbols
// https://api.binance.com/api/v3/ticker/bookTicker


let start = async () => {
    let balanace = 100 // usdt

    // getCryptoPrice()

    let cryptoPrice = fs.readFileSync('./data/cryptoPrice.json',  'utf8')
    cryptoPrice = JSON.parse(cryptoPrice)
    analizePrice(cryptoPrice)

    let cryptoAnalize = fs.readFileSync('./data/cryptoAnalize.json', 'utf8')
    cryptoAnalize = JSON.parse(cryptoAnalize)
    sortByPercent(cryptoAnalize)

    

}

start()