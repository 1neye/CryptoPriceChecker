const getPercent = require('./getPercent');
const fs = require('fs');

let analizePrice = async (cryptoPrice) => {

    let res = [];

    cryptoPrice.forEach(el => {

        if(Number(el.bidPrice) > Number(el.askPrice)) {

            let price = getPercent(el.bidPrice, el.askPrice)

            obj = {
                symbol: el.symbol,
                direction: `BUY ${el.symbol}`,
                gap: price.gap,
                percent: price.percent,
                bidPrice: +el.bidPrice,
                askPrice: +el.askPrice,
                bidQty: +el.bidQty,
                askQty: +el.askQty
            }

            res.push(obj)
        } else if (Number(el.askPrice) > Number(el.bidPrice)) {

            let price = getPercent(el.askPrice, el.bidPrice)

            obj = {
                symbol: el.symbol,
                direction: `SELL ${el.symbol}`,
                gap: price.gap,
                percent: price.percent,
                bidPrice: +el.bidPrice,
                askPrice: +el.askPrice,
                bidQty: +el.bidQty,
                askQty: +el.askQty
            }

            res.push(obj)
        }
    });

    fs.writeFileSync( './data/cryptoAnalize.json', JSON.stringify(res))

}

module.exports = analizePrice