import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { Flatlist, View, Text } from 'react-native'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
import { FlatList } from 'react-native-gesture-handler'

const PrintOuterCat = (props) => {
    
    const _ItemSeparator = () => {
        return <View style={styles.separator} />
    }


    const _RenderItem = ({ item }) => {

        return (
            <TopicsItem id={item.id} name={item.name} isLocked={item.isLocked} />
        )
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.buttonContainer}>
                <FlatList
                    style={styles.flatList}
                    renderItem={_RenderItem}
                    data={props.newTopics}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={_ItemSeparator}
                />
            </View>
        </SafeAreaView>
    )
}

export default PrintOuterCat

