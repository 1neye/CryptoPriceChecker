const fs = require('fs');

let showBestTade = (obj) => {
    let price = JSON.parse(fs.readFileSync('./data/cryptoAnalize.json', 'utf8'))

    let list = []

    if (obj.direction === "SELL") {
        price.forEach(el => {
            if (el.symbol2 === obj.symbol2 && el.symbol !== obj.symbol) {
                list.push(el)
            }
        });
    } else if (obj.direction === "BUY") {
        price.forEach(el => {
            if (el.symbol1 === obj.symbol1 && el.symbol !== obj.symbol) {
                list.push(el)
            }
        });
    }

    list = list.sort((a,b) => b.percent - a.percent)

    let bestTrade;

    if(obj.direction === "SELL") {
        let isBuy = list.filter(el => el.direction === "BUY") 

        isBuy = isBuy.sort((a,b) => b.percent - a.percent)
        bestTrade = isBuy[0]

        if(isBuy.length === 0) {
            let sortForSell = list.sort((a,b) => a.percent - b.percent)
            bestTrade = sortForSell[0]
        }
    }

    let res = {
        list: list,
        bestTrade: bestTrade
    }

    return res
}

// let obj = {
//     "direction": "SELL",
//     "gap": 1e-8,
//     "percent": 4.16666666666668,
//     "symbol": "XVGBTC",
//     "bidPrice": "0.00000024",
//     "bidQty": "22346444.00000000",
//     "askPrice": "0.00000025",
//     "askQty": "20655536.00000000",
//     "symbol1": "XVG",
//     "symbol2": "BTC"
// }

// showBestTade(obj)


module.exports = showBestTade