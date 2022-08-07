import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const shouldWrite_InnerCat = async () => {

    const auth = createFBAuth();
    const userId = auth.currentUser.uid;
    let shouldWrite;
    try {
        await database()
            .ref(`shouldWrite/${userId}/innerCategory/shouldWrite/`)
            .once('value')
            .then(snapshot => {
                shouldWrite = snapshot.val()
            })

    } catch (error) {
        throw error
    }
    return shouldWrite
}

export default shouldWrite_InnerCat