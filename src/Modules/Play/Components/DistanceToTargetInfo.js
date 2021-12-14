import { getPreciseDistance } from 'geolib'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { targetLatitudeSelector } from '../Redux/TargetLatitudeRedux'
import { targetLongitudeSelector } from '../Redux/TargetLongitudeRedux'
import distanceFinder from '../Utils/DistanceFinder'
import styles from '../styles/StageScreenStyles'

const DistanceToTarget_Prompt = (props) => {
    const targetLatitude = useSelector(targetLatitudeSelector)
    const targetLongitude = useSelector(targetLongitudeSelector)
    
    
    const distanceToTarget = distanceFinder(targetLatitude, targetLongitude, props.stoneLatitude, props.stoneLongitude)

    const distanceInKM = Math.round(distanceToTarget / 1000)
    return (
        <TouchableOpacity style={styles.distanceToTarget} activeOpacity={1}>
            <Text style={styles.textColor}>Kalan Mesafe: {distanceInKM} km</Text>
        </TouchableOpacity>
    )
}

export default DistanceToTarget_Prompt