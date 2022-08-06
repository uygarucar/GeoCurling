//Bu fonksiyon çalıştıgında databasein "topics" node'undaki değerini alır ve o değeri döndürür.
import database from '@react-native-firebase/database'

const ReadFirebase_OuterCat= async () => {
    let topicsData;
    try {
        await database()
            .ref(`topics/`)
            .once('value')
            .then(snapshot => {
                topicsData = snapshot.val()
            })
        
    } catch (error) {
        throw error
    }
    return topicsData
}

export default ReadFirebase_OuterCat