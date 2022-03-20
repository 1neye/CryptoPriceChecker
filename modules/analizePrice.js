const getPercent = require('./getPercent');

let analizePrice = async (cryptoPrice) => {

    let res = getPercent(0.55555 , 0.1)
    console.log(res)

    // cryptoPrice.forEach(el => {

    //     if(el.bidPrice > el.askPrice) {

    //     } else if (el.askPrice > el.bidPrice) {

    //     }
    // });

}

module.exports = analizePrice