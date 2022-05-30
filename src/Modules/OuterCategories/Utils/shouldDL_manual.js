import database from '@react-native-firebase/database'

const ShouldDLStatus = async () => {
    let shouldDL
    try {
        await database()
            .ref(`shouldDownload`)
            .once('value')
            .then(snapshot => {
                shouldDL = snapshot.val()
            })
        console.log("shouldDL", shouldDL)
        return shouldDL
    }
    catch {
        throw error
    }

}

export default ShouldDLStatus