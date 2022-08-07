import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles/innerCategoriesScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicsItemForInnerCategory from '../Components/TopicsItemForInnerCategory';
import subCategories from '../Data/subCategories'
import shouldWriteAgain from '../../InnerCategories/Utils/shouldWriteAgain';
import writeFirebase from '../Utils/writeToFirebase';
import writeFirebase_ShouldWrite from '../Utils/writeToFirebase_ShouldWrite';
import GetInnerCat from '../../InnerCategories_Get/Screens/GetInnerCat'
import isFirstWriteOccured from '../API/readShouldDownload';
import ReadAndWrite from '../../OuterCategories/Utils/ReadAndWriteFirebase';
/////////////////Bu kısım yeni/////////////////////
const InnerCategoriesScreen = (props) => {
    const isFocused= useIsFocused()
    let outerCategoryId;
    /*
    isFirstWriteOccured()
        .then(
            data => {
                let value = data;
                if (value !== true) {
                    writeFirebase(subCategories)
                        .then(writeFirebase_ShouldWrite(true, "innerCategory"))
                        .catch(error => {console.log(error)})
                }
            }
        )
        .catch(
            error => {console.log(error)}
        )

    const outerCategoryId = props.route.params?.outerCategoryId;
*/

    useEffect(()=> {
        isFirstWriteOccured()
        .then(
            data => {
                let value = data;
                console.log("valueee===", value)
                if (value !== true) {
                    writeFirebase(subCategories)
                        .then(writeFirebase_ShouldWrite(true, "innerCategory"))
                        .catch(error => {console.log(error)})
                }
            }
        )
        .catch(
            error => {console.log(error)}
        )
    
    console.log("outerCategoryId:::,", outerCategoryId)

    }, [isFocused])
    
    outerCategoryId = props.route.params?.outerCategoryId;
    return (
        <>
            <GetInnerCat
                outerCategoryId={outerCategoryId}
            />
        </>
    )
}
export default InnerCategoriesScreen