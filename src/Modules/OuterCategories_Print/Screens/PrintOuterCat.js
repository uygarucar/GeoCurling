import React from 'react'
import { Text, View, FlatList } from "react-native"
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
const _ItemSeparator = () => {
    return <View style={styles.separator} />
}


const _RenderItem = ({ item }) => {

    return (
        <TopicsItem id={item.id} name={item.name} isLocked={item.isLocked} />
    )
}

const PrintOuterCat = (props) => {
    const topics = props.topics;



    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.buttonContainer}>
                <FlatList
                    style={styles.flatList}
                    renderItem={_RenderItem}
                    data={topics}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={_ItemSeparator}
                />
            </View>
        </SafeAreaView>
    )
}

export default PrintOuterCat