
const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);
const analizePrice = require(`${__dirname}/modules/analizePrice`);


const fs = require('fs');
const getSymbols = require('./modules/getSymbols');
const showBestTade = require('./modules/showBestTade');
const sortByPercent = require('./modules/sortByPercent');


// https://api.binance.com/api/v3/ticker/price?symbol=FIROUSDT get current price
// https://api.binance.com/api/v3/exchangeInfo get all symbols
// https://api.binance.com/api/v3/ticker/bookTicker


let start = async () => {
    let balanace = 100 // usdt

    // getCryptoPrice()
    // let cryptoPrice = JSON.parse(fs.readFileSync('./data/cryptoPrice.json',  'utf8'))
    // let cryptoAnalize = await analizePrice(cryptoPrice)

    // sortByPercent(cryptoAnalize)
    let cryptoAnalize = JSON.parse(fs.readFileSync('./data/cryptoAnalize.json', 'utf8'))
        

    let arr = JSON.parse(fs.readFileSync('./data/tradeTest.json', 'utf8'))

    // for(let i = 0; i < cryptoAnalize.length; i++ ) {

    //     let res = showBestTade(cryptoAnalize[i])
    //     if(res.bestTrade != undefined) {
    //         let d = []
    //         d.push(cryptoAnalize[i])
    //         d.push(res.bestTrade)

    //         arr.push(d)
    //         fs.writeFileSync( './data/tradeTest.json', JSON.stringify(arr))
    //     }
    // }

    for(let s = 0; s < arr.length; s++) {
        let res = showBestTade(arr[s][arr[s].length - 1])
        if(res.bestTrade != null) {
            arr[s].push(res.bestTrade)
            fs.writeFileSync( './data/tradeTest.json', JSON.stringify(arr))
        }
    }

    // let filterArr = arr.filter(el => el.length > 2)
    // fs.writeFileSync( './data/tradeTest.json', JSON.stringify(filterArr))

    // let sortArr = arr.sort((a,b) => b.percent - a.percent)
    // fs.writeFileSync( './data/tradeTest.json', JSON.stringify(sortArr))



    
    // let res = showBestTade({
    //     "direction": "BUY",
    //     "gap": 0.000007,
    //     "percent": null,
    //     "symbol": "BCNETH",
    //     "bidPrice": "0.00000700",
    //     "bidQty": "3458.00000000",
    //     "askPrice": "0.00000000",
    //     "askQty": "0.00000000",
    //     "symbol1": "BCN",
    //     "symbol2": "ETH"
    // })
    // arr.push(res.bestTrade)
    // fs.writeFileSync( './data/tradeTest.json', JSON.stringify(arr))

    // let some = arr[0];
    // let check = true

    //     while (check) {
    //         showBestTade(some)
    //     }
    

}

start()