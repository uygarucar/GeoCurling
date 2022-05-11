import React from 'react'
import styles from '../styles/StageScreenStyles'
import { TargetPlaces_Unit1 } from './TargetPlacesInfos'
import RangeFunction from '../Utils/RangeFunction'

import { TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { targetTextSelector } from '../Redux/TargetTextRedux'

const Target_Prompt = () => {
    //Random text seçilir ve return içinde yazdırılır.
    const text= useSelector(targetTextSelector)
    console.log("Target_Prompt:1")

    return (
        <TouchableOpacity style={styles.promptTargetArea} activeOpacity={1}>
            <Text style={styles.textColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Target_Prompt