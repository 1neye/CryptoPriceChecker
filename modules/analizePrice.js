const getPercent = require('./getPercent');
const fs = require('fs');
const path = require('path');


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

    fs.writeFileSync(path.join(__dirname, '../data/cryptoAnalize.json'), JSON.stringify(res))

    let filterBy1Percent = res.filter(el => el.percent > 1 && el.percent < 100 )
    fs.writeFileSync(path.join(__dirname, '../data/filterBy1Percent.json'), JSON.stringify(filterBy1Percent))


    return res
}

module.exports = analizePrice