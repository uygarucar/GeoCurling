import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles/innerCategoriesScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicsItemForInnerCategory from '../Components/TopicsItemForInnerCategory';
import subCategories from '../Data/subCategories'
import shouldWriteAgain from '../../InnerCategories/Utils/shouldWriteAgain';
import writeFirebase from '../Utils/writeToFirebase';
import writeFirebase_ShouldWrite from '../Utils/writeToFirebase_ShouldWrite';
import GetAndSetInnerCat from '../../InnerCategories_Get/Screens/GetInnerCat'

/////////////////Bu kısım yeni/////////////////////
const InnerCategoriesScreen = (props) => {
    let value;
    shouldWriteAgain()
    .then(
        data => { value = data }
    )
    .catch(
        data => { console.log(data) }
    )
    //Sadece 1 defaya mahsus kullanıcıya özgü alt kategorilerin atanması
    //Kullanıcı data değiştirdiğinde tekrar default'a geri döner mi?
    if(value !== true){
        writeFirebase(subCategories)
        .then(writeFirebase_ShouldWrite(true, "innerCategory"))
    }
    ////////////////////
    const outerCategoryId = props.route.params?.outerCategoryId;

return(
    <>
        <GetAndSetInnerCat
            outerCategoryId={outerCategoryId}
        />
    </>
)
}
export default InnerCategoriesScreen