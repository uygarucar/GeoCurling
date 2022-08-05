import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from "react-native"
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
import ReadFirebase_OuterCat from '../API/readOuterCat'
import PrintOuterCat from '../../OuterCategories_Print/Screens/PrintOuterCat'



const GetAndSetOuterCat = (props) => {
    const [topics, setTopics] = useState([])
    
    //Kategorileri Çekme ve yazdırma işlemleri uzun sürdüğü için ...
    useEffect(() => {
        ReadFirebase_OuterCat()
            .then(categories => {
                setTopics(categories)
            })
            .catch(data => { console.log(data) })
    }, [])
    //... console.log NULL geliyor ve ilk girişte liste gelmiyor.
  
    return (
        <PrintOuterCat newTopics={topics} />
    )

}

export default GetAndSetOuterCat