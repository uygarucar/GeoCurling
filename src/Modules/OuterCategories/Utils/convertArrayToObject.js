
const toObject =  (arr) => {
    let rv = {}

    for (let i = 0; i < 12; ++i) {
        if (arr[i] !== undefined) {
            rv[i] = arr[i]
        }
    }
    return rv
}

export default toObject


