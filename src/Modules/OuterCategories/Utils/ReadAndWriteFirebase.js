import toObject from "./convertArrayToObject";
import takeUserSpecificObject from "./takeUserSpecificObject";
import hasEqualLength from "./hasEqualLength"

const ReadAndWrite_OuterCat = async (function1, function2) => {
    try {
        const categoriesList = await function1()
        
        let obj = await toObject(categoriesList)
        console.log("obj", obj)

        takeUserSpecificObject()
            .then(
                data => {
                    toObject(data)
                        .then(userObject => {
                            if (!hasEqualLength(obj, userObject)) {
                                function2(obj);
                            }
                        })
                        .catch(error => { console.log(error) })

                }
            )
            .catch(error => { console.log(error) })

    } catch (error) {
        throw error
    }

}

export default ReadAndWrite_OuterCat