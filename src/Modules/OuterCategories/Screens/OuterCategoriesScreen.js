import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/OuterCategoriesScreenStyles'
import TopicsItem from '../Components/TopicsItem'
import createFBAuth from '@react-native-firebase/auth'
import writeToFirebase from '../Utils/writeToFirebase'
import GetOuterCat from '../../OuterCategories_Get/Screens/GetOuterCat'
import toObject from '../Utils/convertArrayToObject'
import ReadAndWrite from '../Utils/ReadAndWriteFirebase'
import readFromFirebase from '../Utils/readFromFirebase'
import writeFirebase_ShouldWrite from '../Utils/writeToFirebase_ShouldWrite'
import ShouldDownload_Read from '../Utils/shouldDownload_Read'
import shouldDL_manual from '../Utils/shouldDL_manual'
import database from '@react-native-firebase/database'
import functions from '@react-native-firebase/database'
import takeUserSpecificObject from '../Utils/takeUserSpecificObject'
import shouldWriteAgain from '../Utils/shouldWriteAgain'
import changeIfTriggeredInside from '../Utils/changeIfTriggeredInside'
import isFirstWriteOccured from '../../OuterCategories/API/readShouldWrite'
const OuterCategoriesScreen = (props) => {
    const [state, setState] = useState("")
    isFirstWriteOccured()
        .then(
            data => {
                let value = data
                //console.log("1. sinde null:::", value)
                if (value !== true) {
                    ReadAndWrite(readFromFirebase, writeToFirebase)
                        //bir daha bu işlemleri yapmamak için değeri true'ya çekiyoruz.
                        .then(writeFirebase_ShouldWrite(true, "outerCategory")
                            .then(
                            //console.log("0. alan")
                            setState("abc")
                        ))
                        .catch()
                        .catch(
                            data => { console.log(data) }
                        )
                }
            }

        )
        .catch(
            data => { console.log(data) }
        )

    //aşağıdaki işlem kaynak data değişikliklerine karşı HER ZAMAN tetikte olacak şekilde ayarlandı.
    changeIfTriggeredInside(readFromFirebase, writeToFirebase)

    //Aşağıdaki GetOuterCat, daha önce çalışıyor
    return (
        <GetOuterCat state={state}
        />
    )
}

export { OuterCategoriesScreen }
