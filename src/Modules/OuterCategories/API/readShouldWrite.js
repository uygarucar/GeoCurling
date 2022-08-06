import database from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const shouldWrite_OuterCat = async () => {

    const auth = createFBAuth();
    const userId = auth.currentUser.uid;
    let shouldWrite;
    try {
        await database()
            .ref(`shouldWrite/${userId}/outerCategory/shouldWrite/`)
            .once('value')
            .then(snapshot => {
                shouldWrite = snapshot.val()
                console.log("1.sinde null", shouldWrite)

            })

        
    } catch (error) {
        throw error
    }
    return shouldWrite
}

export default shouldWrite_OuterCat