const axios = require('axios')
const fs = require('fs')
const path = require('path')

let getMarketPrice = async () => {

    let product = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tradeProduct.json'), 'utf8'))

    let listOfSymbols = []
    product.forEach(el => {
        el.forEach(e => {
            listOfSymbols.push(e[0].symbol)
            listOfSymbols.push(e[1].symbol)
            listOfSymbols.push(e[2].symbol)
        })
    });

    listOfSymbols = Array.from(new Set(listOfSymbols))

    let idx = 0

    let marketArr = []


    for (let symbol of listOfSymbols) {
        let res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)

        let obj = {
            symbol: symbol,
            marketPrice: res.data.price
        }

        marketArr.push(obj)
    }


    fs.writeFileSync(path.join(__dirname, '../data/marketArr.json'), JSON.stringify(marketArr))

}

getMarketPrice()

module.exports = getMarketPrice