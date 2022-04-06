const fs = require('fs');
const path = require('path');

let createList = (arr) => {

    arr = arr.filter(el => Array.isArray(el[0]))
    let first

    let firstArr = []
    for (let el of arr) {

        let group = []

        firstArr.push(group)

        el[0].forEach(element => {

            el[2].forEach(element2 => {
                first = [element, el[1], element2]

                firstArr[firstArr.length - 1].push(first)
            })

        });

    }

    firstArr.forEach(el => {
        el.forEach(el2 => {
            let profit = el2[1].percent - (el2[0].percent + el2[2].percent)
            profit = +profit.toFixed(2)
            let res = {
                fullProfit: profit
            }
            el2.push(res)
        })
    })

   let filterByZero = []

    firstArr.forEach(el => {
        let g = []
        filterByZero.push(g)
        el.forEach(e => {

        if(e[3].fullProfit > 0) {
            filterByZero[filterByZero.length - 1].push(e)
        }
        
        })
    })

    let sortedArr = []

    filterByZero.forEach(el => {

        let sortEL = el.sort((a,b) => b[3].fullProfit - a[3].fullProfit)

        sortedArr.push(sortEL)

    })

    fs.writeFileSync(path.join(__dirname, '../data/tradeProduct.json'), JSON.stringify(sortedArr))
    
    let free = []
     sortedArr.forEach(el => {

        let g = []
        free.push(g)

        el.forEach(e => {
            if(e[3].fullProfit < 1.13) {
                free[free.length - 1].push(e)
            }
        })
    })

    free = free.filter(el => el.length > 0)

    fs.writeFileSync(path.join(__dirname, '../data/tradeProductFree.json'), JSON.stringify(free)) //all under 1.13

    let freeFirst = []

    free.forEach(el => {
        freeFirst.push([])
        freeFirst[freeFirst.length - 1].push(el[0])

    })

    fs.writeFileSync(path.join(__dirname, '../data/tradeProductFreeFirst.json'), JSON.stringify(freeFirst)) // all first arr of array

    return sortedArr
}

// createList()

module.exports = createList