import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const ReadFirebase_OuterCat= async () => {

    const auth = createFBAuth();
    const userId= auth.currentUser.uid;
    let topicsData;
    try {
        await database()
            .ref(`outerCategory/${userId}/topics/`)
            .once('value')
            .then(snapshot => {
                topicsData = snapshot.val()
            })
        return topicsData
    } catch (error) {
        throw error
    }

}

export default ReadFirebase_OuterCat