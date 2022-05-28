import database from '@react-native-firebase/database'
import yieldUserId from '../../Utils/GetUserId'
const writeFirebase_ShouldDownload = async(shouldDownload, type) => {
    const userId= yieldUserId()

    await database()
            .ref(`/shouldDownload/${userId}/${type}/`)
            .set({
                "shouldDownload": shouldDownload
            })
            .then(console.log("shouldDownload successfully set"))

}

export default writeFirebase_ShouldDownload