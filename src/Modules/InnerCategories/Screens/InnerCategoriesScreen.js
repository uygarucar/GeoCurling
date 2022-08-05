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
    if(value !== true){
        writeFirebase(subCategories)
        .then(writeFirebase_ShouldWrite(true, "innerCategory"))
    }
    ////////////////////
    const outerCategoryId = props.route.params?.outerCategoryId;

    const _ItemSeparator = () => {
        return <View style={styles.separator} />
    }

    const render_InnerCategories = ({ item }) => {

        return (
            <TopicsItemForInnerCategory id={item.id} name={item.name} isLocked={item.isLocked} outerCategoryId={outerCategoryId} />
        )
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.buttonContainer}>
                <FlatList
                    styles={styles.flatList}
                    renderItem={render_InnerCategories}
                    data={subCategories[outerCategoryId]}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={_ItemSeparator}
                />
            </View>
        </SafeAreaView>
    )
}

export default InnerCategoriesScreen