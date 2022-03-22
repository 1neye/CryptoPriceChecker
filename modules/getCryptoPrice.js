const axios = require('axios');
const fs = require('fs');
const getSymbols = require('./getSymbols');

let getCryptoPrice = async (pairList) => {
    let priceList = []
    
    let res = await axios.get('https://api.binance.com/api/v3/ticker/bookTicker')

    getSymbols(res.data)

    fs.writeFileSync( './data/cryptoPrice.json', JSON.stringify(res.data))
    
}

module.exports = getCryptoPrice