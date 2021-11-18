import React from 'react'
import styles from '../styles/StageScreenStyles'
import { TargetPlaces_Unit1 } from './TargetPlacesInfos'
import RangeFunction from '../Utils/RangeFunction'

import { TouchableOpacity, Text } from 'react-native'
const Target_Prompt = () => {
    //Random text seçilir ve return içinde yazdırılır.
    const randomInteger = RangeFunction(TargetPlaces_Unit1) 
    const {id, text, latitude, longitude} = TargetPlaces_Unit1[randomInteger]

    return (
        <TouchableOpacity style={styles.promptTargetArea} activeOpacity={1}>
            <Text style={styles.textColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Target_Prompt