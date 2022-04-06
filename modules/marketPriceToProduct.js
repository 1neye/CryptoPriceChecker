
const fs = require('fs')
const path = require('path')

let marketPriceToProduct = () => {

    let market = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/tradeProduct.json'), 'utf8'))
    let product = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/marketArr.json'), 'utf8'))

    product.forEach(el => {
        el.forEach(e => {
            //end here need склеить 2 масива
        })
    });






}

marketPriceToProduct

module.exports = marketPriceToProduct.js