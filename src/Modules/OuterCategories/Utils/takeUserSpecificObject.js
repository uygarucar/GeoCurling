import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const takeUserSpecificObject = async (props) => {
    let object;
    const auth = createFBAuth();
    const user = auth.currentUser.uid;

    try {
        await database()
            .ref(`outerCategory/${user}/topics/`)
            .once('value')
            .then(snapshot => {
                object = snapshot.val()
            })

    } catch (error) {
        throw error
    }
    return object
}

export default takeUserSpecificObject