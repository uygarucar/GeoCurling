import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database'
import createFBAuth from '@react-native-firebase/auth'
import writeFirebase from '../Utils/writeToFirebase'
import GetAndSetOuterCat from '../../OuterCategories_Get/Screens/GetOuterCat'
import toObject from '../Utils/convertArrayToObject'
import ReadAndWrite from '../Utils/ReadAndWriteFirebase'
import readFirebase from '../Utils/readFromFirebase'
import writeFirebase_ShouldDownload from '../Utils/writeToFirebase_ShouldDownload'
import ShouldDownload_Read from '../Utils/shouldDownload_Read'
import shouldDL_manual from '../Utils/shouldDL_manual'


const OuterCategoriesScreen = (props) => {
    let [shouldDownload, setShouldDownload] = useState(null)

    useEffect(() => { 
        shouldDL_manual()
        .then(data => {setShouldDownload(data.outerCategory)})
         
    }, [])

    //Initial write to Firebase if shouldDownload null or undefined
console.log("sd before if cond.", shouldDownload)
    if (shouldDownload == null || shouldDownload == undefined) {
        console.log("is this gonna be first")
        ReadAndWrite(readFirebase, writeFirebase)
            // .then(writeFirebase_ShouldDownload(true, "outerCategory"))
    }
    try {
        /*
        //Will be used later
        shouldDownload = ShouldDownload_Read()
        */

    } catch (error) {
        throw error
    }
    /*
    shouldDownload
        .then(data => { console.log("datas", data.shouldDownload) })
        .catch(error => { console.log(error) })
    */
    return (
        <GetAndSetOuterCat
        />
    )
}

export { OuterCategoriesScreen }
