import createFBAuth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import toObject from './convertArrayToObject';

const updateFB_isLocked =  async (isLockedValue, outerCategoryId, innerCategoryId) => {
    const auth = createFBAuth();
    const user = auth.currentUser.uid
    try {
         await database()
            .ref(`innerCategory/${user}/topics/${outerCategoryId}/${innerCategoryId}/isLocked/`)
            .set(isLockedValue)
            .then(console.log("Topics Succesfully Set!"))
    } catch (error) {

        console.log("error:", error)
    }
}

export default updateFB_isLocked