import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const ReadFirebase_InnerCat= async () => {

    const auth = createFBAuth();
    const userId= auth.currentUser.uid;
    let topicsData;
    try {
        await database()
            .ref(`innerCategory/${userId}/topics/`)
            .once('value')
            .then(snapshot => {
                topicsData = snapshot.val()
            })
        return topicsData
    } catch (error) {
        throw error
    }

}

export default ReadFirebase_InnerCat