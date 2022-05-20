import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'

const topics = [
    {
        id: 1,
        name: 'Yer Şekilleri ve Su Örtüsü',
        isLocked: false
    },
    {
        id: 2,
        name: 'İklim ve Bitki Örtüsü',
        isLocked: false
    },
    {
        id: 3,
        name: 'Toprak ve Doğa Çevre',
        isLocked: true
    },
    {
        id: 4,
        name: 'Beşeri Coğrafya',
        isLocked: true
    },
    {
        id: 5,
        name: 'Ekonomik Coğrafya',
        isLocked: true
    },
    {
        id: 6,
        name: 'Tarım',
        isLocked: true
    },
    {
        id: 7,
        name: 'Hayvancılık ve Orman',
        isLocked: true
    },
    {
        id: 8,
        name: 'Madenler ve Enerji Kaynakları',
        isLocked: true
    },
    {
        id: 9,
        name: 'Sanayi',
        isLocked: true
    },
    {
        id: 10,
        name: 'Ticaret',
        isLocked: true
    },
    {
        id: 11,
        name: 'Ulaşım',
        isLocked: true
    },
    {
        id: 12,
        name: 'Turizm',
        isLocked: true
    },
    {
        id: 13,
        name: 'Bölgeler Coğrafyası',
        isLocked: true
    },
]
 
const auth = createFBAuth();
//const isOuterCategoryNull
const writeToFirebase = () => {
    let user = auth.currentUser.uid
    //console.log("user", user)
    database()
        .ref(`outerCategory/${user}`)
        .set(topics)
        .then(() => console.log('Data set'))
}

const readFromFirebase = () => {
    let user = auth.currentUser.uid
    console.log("user",user)
    database()
        .ref(`outerCategory/${user}/`)
        .once('value')
        .then( snapshot => 
            {console.log('User data: ', snapshot)})
}

const _ItemSeparator = () => {
    return <View style={styles.separator} />
}
//Kullanıcı uygulamayı silerse ve geri yüklerse, açtığı kilitli bölümler
//tekrar kapanacak mı?
//Kapanacaksa cloud'tan alsın topics objesini

const _RenderItem = ({ item }) => {

    return (
        <TopicsItem id={item.id} name={item.name} isLocked={item.isLocked} />
    )
}

const OuterCategoriesScreen = (props) => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.buttonContainer}>
                <FlatList
                    style={styles.flatList}
                    renderItem={_RenderItem}
                    data={topics}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={_ItemSeparator}
                />
            </View>
            <TouchableOpacity
                onPress={writeToFirebase}>
                    <Text>BUTONUM</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={readFromFirebase}>
                    <Text>Reading BUTONUM</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export { OuterCategoriesScreen }
