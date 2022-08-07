import React, { useState } from 'react'
import { useEffect } from 'react'
import ReadFirebase_InnerCat from '../API/readInnerCat'
import PrintInnerCat from '../../InnerCategories_Print/Screens/PrintInnerCat'
import { useIsFocused } from '@react-navigation/native'
import isFirstWriteOccured from '../../InnerCategories/API/readShouldDownload'
const GetInnerCat = (props) => {
    const outerCategoryId = props.outerCategoryId
    const [topics, setTopics] = useState([])
    

    //Kategorileri Çekme ve yazdırma işlemleri uzun sürdüğü için ...
    const isFocused = useIsFocused()
    useEffect(() => {
        isFirstWriteOccured()
            .then(
                isFirstWrite => {
                    if (isFirstWrite !== true) {
                        setTimeout(()=>{
                            ReadFirebase_InnerCat()
                            .then(categories => {
                                setTopics(categories)
                            }, 1000)
                        })
                    }
                    else{
                        ReadFirebase_InnerCat()
                        .then(categories=> {
                            setTopics(categories)
                        })
                    }
                }
            )


            .catch(data => { console.log(data) })
    }, [isFocused])



    return (
        <>
            <PrintInnerCat newTopics={topics} outerCategoryId={outerCategoryId} />
        </>
    )
}

export default GetInnerCat