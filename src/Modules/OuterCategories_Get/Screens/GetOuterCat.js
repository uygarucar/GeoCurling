import React, { useEffect, useState } from 'react'
import { Text, View, FlatList } from "react-native"
import styles from '../../OuterCategories/styles/OuterCategoriesScreenStyles'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopicsItem from '../../OuterCategories/Components/TopicsItem'
import ReadFirebase_OuterCat from '../API/readOuterCat'
import PrintOuterCat from '../../OuterCategories_Print/Screens/PrintOuterCat'
import isFirstWriteOccured from '../../OuterCategories/API/readShouldWrite'
import { useIsFocused } from '@react-navigation/native'
const GetOuterCat = (props) => {
    const [topics, setTopics] = useState([])
    console.log("2. alan")
    //console.log("props.state:::", props.statee)
    //Kategorileri Çekme ve yazdırma işlemleri uzun sürdüğü için ...
    const isFocused = useIsFocused()
    useEffect(() => {
        let isMounted= true
        isFirstWriteOccured()
            .then(
                isFirstWrite => {
                    if (isFirstWrite !== true) {
                        setTimeout(() => {
                            ReadFirebase_OuterCat() //Şunu useEffect dışına çıkarsam ???
                                .then(categories => {
                                    if(isMounted){
                                        setTopics(categories)
                                    }
                                    
                                })
                       //         .catch(data => { console.log(data) })
                        }, 1000)
                    }
                    else {
                        ReadFirebase_OuterCat() //Şunu useEffect dışına çıkarsam ???
                            .then(categories => {
                                if(isMounted){
                                    setTopics(categories)
                                }
                            })
//                            .catch(data => { console.log(data) })
                    }
                }


            )
                return () => {
                    isMounted= false
                }
    },
        [isFocused])




    /*
    useEffect(() => {
        ReadFirebase_OuterCat() //Şunu useEffect dışına çıkarsam ???
            .then(categories => {
                setTopics(categories)
            })
            .catch(data => { console.log(data) })
    }, [props.statee])
    */

    /*
    ReadFirebase_OuterCat() //Şunu useEffect dışına çıkarsam ???
        .then(categories => {
            setTopics(categories)
        })
        .catch(data => { console.log(data) })
*/

    return (
        <PrintOuterCat newTopics={topics} />
    )

}

export default GetOuterCat