let deleteKoma = (num) => {
    let res = num.split('.')
    res = res[0] + res[1]

    return res
}


module.exports = deleteKoma