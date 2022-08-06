
const hasEqualLength = (objNew, objOld) => {
    //console.log("objOld.length", Object.keys(objOld).length)

    if(Object.keys(objNew).length === Object.keys(objOld).length || objOld === undefined || objOld === null){
        return true
    }
    else{
        return false
    }

}

export default hasEqualLength