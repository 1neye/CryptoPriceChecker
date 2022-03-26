const fs = require('fs');

let showSymbolTrades = (symbol) => {
    let price = JSON.parse(fs.readFileSync('./data/cryptoAnalize.json', 'utf8'))

    let filter = price.filter(el => el.symbol1 === symbol || el.symbol2 === symbol)

    return filter
}


module.exports = showSymbolTrades