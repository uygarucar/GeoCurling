import React, {useState} from 'react'
import { useEffect } from 'react'
import ReadFirebase_InnerCat from '../API/readInnerCat'
import PrintInnerCat from '../../InnerCategories_Print/Screens/PrintInnerCat'

const GetInnerCat = (props) => {
    const outerCategoryId = props.outerCategoryId
    const [topics, setTopics] = useState([])

    //Kategorileri Çekme ve yazdırma işlemleri uzun sürdüğü için ...
    useEffect(() => {
        ReadFirebase_InnerCat()
            .then(categories => {
                setTopics(categories)
            })
            .catch(data => { console.log(data) })
    }, [])



    return (
        <>
            <PrintInnerCat newTopics={topics} outerCategoryId={outerCategoryId}/>
        </>
    )
}

export default GetInnerCat