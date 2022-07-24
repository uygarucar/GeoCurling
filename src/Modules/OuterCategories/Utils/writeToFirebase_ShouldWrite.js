import database from '@react-native-firebase/database'
import yieldUserId from '../../Utils/GetUserId'
const writeFirebase_ShouldWrite = async(shouldWrite, type) => {
    const userId= yieldUserId()

    await database()
            .ref(`/shouldWrite/${userId}/${type}/`)
            .set({
                "shouldWrite": shouldWrite
            })
            .then(console.log("shouldWrite successfully set"))

}

export default writeFirebase_ShouldWrite