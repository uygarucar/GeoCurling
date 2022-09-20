import takeUserSpecificObject from "./takeUserSpecificObject"
import toObject from "./convertArrayToObject"
import hasEqualLength from "./hasEqualLength"

const changeIfTriggeredInside = async (readFromFirebase, writeToFirebase) => {
    const categoriesList = await readFromFirebase()
    //console.log("categoriesList", categoriesList)
    let obj = await toObject(categoriesList)
    //console.log("obj", obj)
    takeUserSpecificObject()
        .then(
            data => {
                toObject(data)
                    .then(userObject => {
                        if (!hasEqualLength(obj, userObject)) {
                            writeToFirebase(obj);
                        }
                    })
                    .catch(error => { console.log(error) })

            }
        )
        .catch(error => { console.log(error) })

}

export default changeIfTriggeredInside