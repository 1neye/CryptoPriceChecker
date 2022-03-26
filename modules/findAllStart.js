const fs = require('fs');
const showSymbolTrades = require('./showSymbolTrade');

let findAllStart = (pair) => {

    let listOfStable = JSON.parse(fs.readFileSync('./data/listOfStable.json', 'utf8'))

    let symbolArr = []
    symbolArr.push(pair.symbol1)

    let chain = []
    chain.push(pair)

    let prevArr = []

    let filterPrice = 0.3;

    let findStable = false;
        while (!findStable) {

            if(symbolArr.length === 0) {
                findStable = true
                return
            }


            for (let j = 0; j < symbolArr.length; j++) {
                let res = showSymbolTrades(symbolArr[j])
                let filterList = res.filter(el => el.percent < filterPrice)
                filterList = filterList.sort((a, b) => b.percent - a.percent)

                let isStable = res.filter(el => listOfStable.includes(el.symbol2) || listOfStable.includes(el.symbol1) && el !== pair)
                if (isStable.length > 0) {
                    chain.unshift(isStable)
                    findStable = true
                    break
                } else {
                    prevArr.push(...symbolArr)
                    symbolArr = []
                    filterList.forEach(el => {
                        if(!prevArr.includes(el.symbol1) && !prevArr.includes(el.symbol2)) {
                            symbolArr.push(el.symbol1)
                            symbolArr.push(el.symbol2)
                        }
                            
                    });
                }
            }
        }
        fs.writeFileSync('./data/tradeStart.json', JSON.stringify(chain))
    return chain
}


module.exports = findAllStart