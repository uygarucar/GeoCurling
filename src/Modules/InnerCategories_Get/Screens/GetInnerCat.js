import React, {useState} from 'react'
import { useEffect } from 'react'
import ReadFirebase_InnerCat from '../API/readInnerCat'
import PrintInnerCat from '../../InnerCategories_Print/Screens/PrintInnerCat'
import { useIsFocused } from '@react-navigation/native'

const GetInnerCat = (props) => {
    const outerCategoryId = props.outerCategoryId
    const [topics, setTopics] = useState([])
    const isFocused= useIsFocused()

    //Kategorileri Çekme ve yazdırma işlemleri uzun sürdüğü için ...
    useEffect(() => {
        ReadFirebase_InnerCat()
            .then(categories => {
                setTopics(categories)
                console.log("Özelleri okuma işlemi:", topics)
            })
            .catch(data => { console.log(data) })
    }, [isFocused])



    return (
        <>
            <PrintInnerCat newTopics={topics} outerCategoryId={outerCategoryId}/>
        </>
    )
}

export default GetInnerCat