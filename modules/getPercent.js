
const deleteKoma = require("./deleteKoma");

let getPercent = (big, small) => {

    let bigNoKoma = deleteKoma(big)
    let smallNoKoma = deleteKoma(small)

    const floatNumber = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

    let decimalCount = floatNumber(big)

    let number = "1";

        for(let i = 0; i < decimalCount; i++) {
            number += "0"
        }

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

 
module.exports = getPercent