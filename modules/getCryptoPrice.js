const axios = require('axios')

let getCryptoPrice = async (pairList) => {
    let priceList = []

    pairList.forEach( async (el) => {
        let price = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${el.baseAsset}${el.quoteAsset}`)
        priceList.push({baseAsset: el.baseAsset, quoteAsset: el.quoteAsset, symbol: el.symbol, price: price.data})
    });
}

module.exports = getCryptoPrice