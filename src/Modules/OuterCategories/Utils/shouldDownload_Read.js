import yieldUserId from '../../Utils/GetUserId'
import database from '@react-native-firebase/database'

const ShouldDownload_Read = async () => {
    const userId = yieldUserId()
    let ShouldDLoad
    try {
        await database()
            .ref(`shouldDownload/${userId}/outerCategory/`)
            .once('value')
            .then(snapshot => {
                ShouldDLoad = snapshot.val()
            })

        return ShouldDLoad
    } catch (error) {
        throw error
    }

}

export default ShouldDownload_Read