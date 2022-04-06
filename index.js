const path = require('path');
const fs = require('fs');

const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);
const analizePrice = require(`${__dirname}/modules/analizePrice`);
const createList = require(`${__dirname}/modules/createList`);
const findAllEnd = require(`${__dirname}/modules/findAllEnd`);
const findAllStart = require(`${__dirname}/modules/findAllStart`);


// https://api.binance.com/api/v3/ticker/price?symbol=FIROUSDT get current price
// https://api.binance.com/api/v3/exchangeInfo get all symbols
// https://api.binance.com/api/v3/ticker/bookTicker
// https://api.binance.com/api/v3/ticker/24hr?symbol=REEFBTC for volume


let start = async () => {

    await getCryptoPrice()
    let cryptoPrice = JSON.parse(fs.readFileSync(path.join(__dirname, `./data/cryptoPrice.json`),  'utf8'))
    await analizePrice(cryptoPrice)

    let list = JSON.parse(fs.readFileSync(path.join(__dirname,'./data/filterBy1Percent.json'), 'utf8'))
    let chainArr = []
    for(let l of list) {
        let chain = findAllEnd(l)
        if(chain === undefined) {
            continue
        } else {
            chainArr.push(chain)
        }
        
    }

    let listEnd = chainArr

    for(let end of listEnd) {
        let start = findAllStart(end[0])

        if(start === undefined) {
            continue
        } else {
            end.unshift(start[0])
        }
        
    }

    fs.writeFileSync(path.join(__dirname,'./data/tradeTest.json'), JSON.stringify(listEnd))

    let product = await createList(listEnd)

    return product


}

start()

module.exports = start