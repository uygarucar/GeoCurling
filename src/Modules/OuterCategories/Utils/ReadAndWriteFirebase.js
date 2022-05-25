import toObject from "./convertArrayToObject";

const ReadAndWrite_OuterCat = async (function1, function2) => {
    try {
        const categoriesList = await function1()
        let obj = toObject(categoriesList)
        function2(obj);
    } catch (error) {
        throw error
    }

}

export default ReadAndWrite_OuterCat