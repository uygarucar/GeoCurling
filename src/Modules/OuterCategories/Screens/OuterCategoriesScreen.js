import React, { useEffect, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'
import writeFirebase_OuterCat from '../Utils/writeToFirebase'
import PrintOuterCat from '../../OuterCategories_Print/Screens/PrintOuterCat'
import toObject from '../Utils/convertArrayToObject'
import ReadAndWrite_OuterCat from '../Utils/ReadAndWriteFirebase'
import readFirebase_OuterCat from '../Utils/readFromFirebase'
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

const OuterCategoriesScreen = (props) => {
    
    ReadAndWrite_OuterCat(readFirebase_OuterCat, writeFirebase_OuterCat)

    return (
        <PrintOuterCat
            topics={topics}
        />
    )
}

export { OuterCategoriesScreen }
