import createFBAuth from '@react-native-firebase/auth'

const yieldUserId = () => {

    const auth =  createFBAuth()
    const userId =  auth.currentUser.uid;
    return userId
}

export default yieldUserId
