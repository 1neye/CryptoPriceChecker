const fs = require('fs');
const getcryptoPairs = require('./getcryptoPairs');
const path = require('path');

let getSymbols = async (cryptoPrice) => {

    let res = []

    let cryptoList = await getcryptoPairs()

    cryptoPrice.forEach(el=> {
        let idx = cryptoList.findIndex(i => i.symbol === el.symbol) 

        el.symbol1 = cryptoList[idx].baseAsset
        el.symbol2 = cryptoList[idx].quoteAsset


        res.push(el)

    });
    fs.writeFileSync(path.join(__dirname, '../data/cryptoPrice.json'), JSON.stringify(res))
}

module.exports = getSymbols

