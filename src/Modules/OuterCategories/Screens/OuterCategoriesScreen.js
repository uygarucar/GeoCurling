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
import writeFirebase_ShouldWrite from '../Utils/writeToFirebase_ShouldWrite'
import ShouldDownload_Read from '../Utils/shouldDownload_Read'
import shouldDL_manual from '../Utils/shouldDL_manual'
import database from '@react-native-firebase/database'
import functions from '@react-native-firebase/database'
import takeUserSpecificObject from '../Utils/takeUserSpecificObject'
import shouldWriteAgain from '../Utils/shouldWriteAgain'
import changeIfTriggeredInside from '../Utils/changeIfTriggeredInside'
import shouldWrite_InnerCat from '../../InnerCategories/API/readShouldDownload'
const OuterCategoriesScreen = (props) => {

    shouldWrite_InnerCat()
        .then(
            data => {
                let value = data
                if (value !== true) {
                    //aşağıdaki işlem kullanıcı ilk giriş yaptığında bir defaya mahsus yapılacak
                    shouldWriteAgain()
                        .then(
                            data => {
                                value = data
                                ReadAndWrite(readFirebase, writeFirebase)
                                    //bir daha bu işlemleri yapmamak için değeri true'ya çekiyoruz.
                                    .then(writeFirebase_ShouldWrite(true, "outerCategory"))
                            }
                        )
                        .catch(
                            data => { console.log(data) }
                        )
                        .catch(
                            data => { console.log(data) }
                        )
                }
            }

        )
        .catch(
            data => { console.log(data)}
        )

    //aşağıdaki işlem kaynak data değişikliklerine karşı HER ZAMAN tetikte olacak şekilde ayarlandı.
    changeIfTriggeredInside(readFirebase, writeFirebase)

    return (
        <GetAndSetOuterCat
        />
    )
}

export { OuterCategoriesScreen }
