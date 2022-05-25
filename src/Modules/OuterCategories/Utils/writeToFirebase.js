import createFBAuth from '@react-native-firebase/auth'
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database'
import toObject from './convertArrayToObject';

const writeFirebase =  (topics) => {
    const auth = createFBAuth();
    const user = auth.currentUser.uid
    try {
         database()
            .ref(`outerCategory/${user}/topics/`)
            .set(topics)
            .then(console.log("Succesfully Set!"))
    } catch (error) {

        console.log("error:", error)
    }
}

export default writeFirebase