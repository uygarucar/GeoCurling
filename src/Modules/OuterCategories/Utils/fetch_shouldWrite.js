import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const fetch_shouldWrite = async() => {
    const auth = createFBAuth();
    const user = auth.currentUser.uid
    let value;
    try {
        await database()
            .ref(`shouldWrite/${user}/outerCategory/shouldWrite/`)
            .once('value')
            .then(snapshot => {
                value = snapshot.val()
                console.log("valueee 2", value)
            })
        console.log("Valueee3", value)
    } catch (error) {
        throw error
    }

    return value
}



    



export default fetch_shouldWrite