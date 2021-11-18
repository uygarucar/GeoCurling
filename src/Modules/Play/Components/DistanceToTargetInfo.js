import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../styles/StageScreenStyles'

const DistanceToTarget = () => {
  

    return (
        <TouchableOpacity style={styles.distanceToTarget} activeOpacity={1}>
            <Text style={styles.textColor}>Kalan Mesafe: x</Text>
        </TouchableOpacity>
    )
}

export default DistanceToTarget