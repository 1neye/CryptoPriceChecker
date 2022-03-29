const axios = require('axios');
const fs = require('fs');
const path = require('path');


const getcryptoPairs = async () => {

    let res = await axios.get('https://api.binance.com/api/v3/exchangeInfo')


    let pairsList = []

    res.data.symbols.forEach( el => {
        pairsList.push({baseAsset: el.baseAsset, quoteAsset: el.quoteAsset, symbol: el.symbol})
    });

    fs.writeFileSync( path.join(__dirname, `../data/cryptoList.json`), JSON.stringify(pairsList))

    return pairsList
}

module.exports = getcryptoPairs