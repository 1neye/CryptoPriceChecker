
const fs = require('fs');
let sortByPercent = (list) => {
    let res = list.sort((a,b) => b.percent - a.percent)

    fs.writeFileSync( './data/cryptoSortByPercent.json', JSON.stringify(res))
}

module.exports = sortByPercent