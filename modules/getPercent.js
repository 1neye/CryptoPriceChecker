

// let getPercent = (big, small) => {

const deleteKoma = require("./deleteKoma");

//     const floatNumber = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

//     let decimalCount = floatNumber(big)

//     big = +big
//     small = +small

//     let number = "1";

//     for(let i = 0; i < decimalCount; i++) {
//         number += "0"
//     }

//     number = +number

//     let percent = (((big * number) / (small * number) ) - 1) * 100

//     let bigN = big * number
//     let smallN = small * number
//     let minus = bigN.toFixed(decimalCount) - smallN.toFixed(decimalCount)

//     let gap = minus / number
//     console.log(gap)

//     if(gap.toString().indexOf('e') !== -1) {
//         const exponent = parseInt(gap.toString().split('-')[1], 10);
//         gap = +gap.toFixed(exponent)
//     }

//     let res = {
//         percent: percent,
//         gap: gap
//     }


//     return res
// }

let getPercent = (big, small) => {

    let bigNoKoma = deleteKoma(big)
    let smallNoKoma = deleteKoma(small)

    const floatNumber = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

    let decimalCount = floatNumber(big)

    // let bigSplit = big.split('.')
    // bigSplit[1] = bigSplit[1].split('')

    // let smallSplit = small.split('.')
    // smallSplit[1] = smallSplit[1].split('')

    let number = "1";

        for(let i = 0; i < decimalCount; i++) {
            number += "0"
        }

    // let int = bigSplit[0] - smallSplit[0]
    // let decimal = [];

    // for(let i = 0; i < bigSplit[1].length; i++) {
    //     let res = bigSplit[1][i] - smallSplit[1][i]
    //     decimal.push(res)
    // }

    // let gap = int + '.';
    // decimal.forEach(el => gap += el)

    let gap = bigNoKoma - smallNoKoma
    gap = gap / number

    let procent1 = bigNoKoma / smallNoKoma
    
    let procent1DecmalCount = floatNumber(procent1)

    let fixNumber = '1'

    for(let i = 0; i < procent1DecmalCount; i++ ) {
        fixNumber += '0'
    }
    
    procent1 = deleteKoma(`${procent1}`)

    let procent2 = procent1 - fixNumber

    let procent3 = (procent2 * 100) / fixNumber

    let obj = {
        percent: procent3,
        gap: gap
    }

    return obj


    
}

let w = getPercent("0.00000023", "0.00000022")
console.log(w)


 
module.exports = getPercent