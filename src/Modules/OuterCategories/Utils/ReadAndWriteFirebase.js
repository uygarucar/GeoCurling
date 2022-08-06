import toObject from "./convertArrayToObject";
import takeUserSpecificObject from "./takeUserSpecificObject";
import hasEqualLength from "./hasEqualLength"

const ReadAndWrite_OuterCat = async (readGeneral, writeSpecialized) => {
    try {
        const categoriesList = await readGeneral()
       // console.log("categoriesList", categoriesList)
        let obj = await toObject(categoriesList)
       // console.log("obj", obj)
        await writeSpecialized(obj);
        //Değişiklikler aşağıdakini tetikliyor

        /*
        takeUserSpecificObject()
            .then(
                data => {
                    toObject(data)
                        .then(userObject => {
                            if (!hasEqualLength(obj, userObject)) {
                                writeSpecialized(obj);
                            }
                        })
                        .catch(error => { console.log(error) })

                }
            )
            .catch(error => { console.log(error) })
*/
    } catch (error) {
        throw error
    }

}

export default ReadAndWrite_OuterCat