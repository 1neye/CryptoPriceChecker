const getPercent = require('./getPercent');
const fs = require('fs');

let analizePrice = async (cryptoPrice) => {

    let res = [];

    cryptoPrice.forEach(el => {

        if (Number(el.bidPrice) > Number(el.askPrice)) {

            let price = getPercent(el.bidPrice, el.askPrice)

            obj = {
                direction: 'BUY',
                gap: price.gap,
                percent: price.percent,
                ...el
            }

            if(price.percent) {
                res.push(obj)
            }


        } else if (Number(el.askPrice) > Number(el.bidPrice)) {

            let price = getPercent(el.askPrice, el.bidPrice)

            obj = {
                direction: 'SELL',
                gap: price.gap,
                percent: price.percent,
                ...el
            }

            if(price.percent) {
                res.push(obj)
            }


        }
    });

    fs.writeFileSync('./data/cryptoAnalize.json', JSON.stringify(res))

    return res
}

module.exports = analizePrice