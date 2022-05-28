import React, { useEffect, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'
import writeFirebase from '../Utils/writeToFirebase'
import GetOuterCat from '../../OuterCategories_Get/Screens/GetOuterCat'
import toObject from '../Utils/convertArrayToObject'
import ReadAndWrite from '../Utils/ReadAndWriteFirebase'
import readFirebase from '../Utils/readFromFirebase'
import yieldUserId from '../../Utils/GetUserId'
import writeFirebase_ShouldDownload from '../Utils/writeToFirebase_ShouldDownload'
//import ReadAndWrite from '../Utils/ReadAndWriteFirebase'
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

//Will be used later
const ShouldDownload_Read = async () => {
    const userId = yieldUserId()
    let ShouldDLoad
    try {
        await database()
            .ref(`shouldDownload/${userId}/outerCategory/`)
            .once('value')
            .then(snapshot => {
                ShouldDLoad = snapshot.val()
            })

        return ShouldDLoad
    } catch (error) {
        throw error
    }

}



const OuterCategoriesScreen = (props) => {
    let shouldDownload
    let sDLoad;

    //Initial write to Firebase if shouldDownload null or undefined
    if (shouldDownload == null || shouldDownload == undefined) {
        ReadAndWrite(readFirebase, writeFirebase)
            .then(writeFirebase_ShouldDownload(true, "outerCategory"))
    }
    try {
        //Will be used later
        shouldDownload = ShouldDownload_Read()

    } catch (error) {
        throw error
    }

    shouldDownload
        .then(data => { console.log("datas", data.shouldDownload) })
        .catch(error => { console.log(error) })

    return (
        <GetOuterCat
            topics={topics}
        />
    )
}

export { OuterCategoriesScreen }
