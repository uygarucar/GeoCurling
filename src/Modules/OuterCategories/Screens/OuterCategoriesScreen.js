import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import createFBAuth from '@react-native-firebase/auth'
import writeFirebase from '../Utils/writeToFirebase'
import GetAndSetOuterCat from '../../OuterCategories_Get/Screens/GetOuterCat'
import toObject from '../Utils/convertArrayToObject'
import ReadAndWrite from '../Utils/ReadAndWriteFirebase'
import readFirebase from '../Utils/readFromFirebase'
import writeFirebase_ShouldDownload from '../Utils/writeToFirebase_ShouldDownload'
import ShouldDownload_Read from '../Utils/shouldDownload_Read'
import shouldDL_manual from '../Utils/shouldDL_manual'
import database from '@react-native-firebase/database'
import functions from '@react-native-firebase/database'


const OuterCategoriesScreen = (props) => {
    ReadAndWrite(readFirebase, writeFirebase)
    .then(writeFirebase_ShouldDownload(true, "outerCategory"))
    return (
        <GetAndSetOuterCat
        />
    )
}

export { OuterCategoriesScreen }
