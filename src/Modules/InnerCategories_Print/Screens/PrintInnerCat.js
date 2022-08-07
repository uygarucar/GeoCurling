import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { Flatlist, View, Text } from 'react-native'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
import { FlatList } from 'react-native-gesture-handler'
import TopicsItemForInnerCategory from '../../InnerCategories/Components/TopicsItemForInnerCategory'
import subCategories from '../../InnerCategories/Data/subCategories'

const PrintInnerCat = (props) => {
    console.log("Özelleri Ekrana yazdırma işlemi-newTopics:", props.newTopics)
    let newTopics = props.newTopics
    let outerCategoryId= props.outerCategoryId
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
                    style={styles.flatList}
                    renderItem={render_InnerCategories}
                    data={newTopics[outerCategoryId]}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={_ItemSeparator}
                />
            </View>
        </SafeAreaView>
    )
}

export default PrintInnerCat

