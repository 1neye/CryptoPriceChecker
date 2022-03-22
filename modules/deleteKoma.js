let deleteKoma = (num) => {
    // num = Number(num)
    // num = num.toString()
    let res = num.split('.')
    res = res[0] + res[1]

    return res
}

let n = deleteKoma(`0.0100`)

module.exports = deleteKoma