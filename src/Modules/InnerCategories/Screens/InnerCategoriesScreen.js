import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles/innerCategoriesScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicsItemForInnerCategory from '../Components/TopicsItemForInnerCategory';

const subCategories = {
    1: [
        {
            id: 1,
            name: 'Jeolojik Şekiller',
            isLocked: true
        },
        {
            id: 2,
            name: 'Dağlar 1',
            isLocked: true
        },
        {
            id: 3,
            name: 'Dağlar 2',
            isLocked: true
        },
        {
            id: 4,
            name: 'Göller 1',
            isLocked: true
        },
        {
            id: 5,
            name: 'Göller 2',
            isLocked: true
        },
    ],
    2:
        [
            {
                id: 1,
                name: 'Türkiyede İklim 1',
                isLocked: true
            },
            {
                id: 2,
                name: 'Türkiyede İklim 2',
                isLocked: true
            },
            {
                id: 3,
                name: 'Türkiyede Topraklar 1',
                isLocked: true
            },
            {
                id: 4,
                name: 'Türkiyede Topraklar 2',
                isLocked: true
            }
        ]
}


const InnerCategoriesScreen = (props) => {

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