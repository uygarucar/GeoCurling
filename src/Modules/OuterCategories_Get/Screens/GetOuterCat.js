import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from "react-native"
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
import ReadFirebase_OuterCat from '../API/readOuterCat'
import PrintOuterCat from '../../OuterCategories_Print/Screens/PrintOuterCat'



const GetAndSetOuterCat = (props) => {
    const [topics, setTopics] = useState()

    useEffect(() => {
        const categories = ReadFirebase_OuterCat();
        categories
            .then(
                data => {
                    setTopics(data)
                })
    }, [])

    return (
        <PrintOuterCat newTopics={topics} />
    )
}

export default GetAndSetOuterCat