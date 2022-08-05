import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const fetch_shouldWrite = async () => {
    const auth = createFBAuth();
    const user = auth.currentUser.uid
    let value;
    try {
        await database()
            .ref(`shouldWrite/${user}/innerCategory/shouldWrite/`)
            .once('value')
            .then(snapshot => {
                value = snapshot.val()
            })
        return value
    } catch (error) {
        throw error
    }

    return value
}
export default fetch_shouldWrite