import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const shouldWrite_InnerCat= async () => {

    const auth = createFBAuth();
    const userId= auth.currentUser.uid;
    let shouldWrite;
    try {
        await database()
            .ref(`shouldWrite/${userId}/innerCategory/shouldWrite/`)
            .once('value')
            .then(snapshot => {
                shouldWrite = snapshot.val()
            })
        return shouldWrite
    } catch (error) {
        throw error
    }

}

export default shouldWrite_InnerCat