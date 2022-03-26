
const getCryptoPrice = require(`${__dirname}/modules/getCryptoPrice`);
const analizePrice = require(`${__dirname}/modules/analizePrice`);


const fs = require('fs');
const createList = require('./modules/createList');
const findAllEnd = require('./modules/findAllEnd');
const findAllStart = require('./modules/findAllStart');


// https://api.binance.com/api/v3/ticker/price?symbol=FIROUSDT get current price
// https://api.binance.com/api/v3/exchangeInfo get all symbols
// https://api.binance.com/api/v3/ticker/bookTicker


let start = async () => {

    await getCryptoPrice()
    let cryptoPrice = JSON.parse(fs.readFileSync('./data/cryptoPrice.json',  'utf8'))
    await analizePrice(cryptoPrice)

    let list = JSON.parse(fs.readFileSync('./data/filterBy1Percent.json', 'utf8'))
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

    fs.writeFileSync('./data/tradeTest.json', JSON.stringify(listEnd))

    createList(listEnd)


}

start()