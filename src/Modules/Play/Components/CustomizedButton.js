import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Svgs } from '../../../StylingConstants/index'
import styles from '../styles/PlayScreenStyles'
import { Metrics } from '../../../StylingConstants'



const CustomizedButton = (props) => {
    const LockSvg = Svgs.Lock;
    
    return (
        <>
            {!props.isLocked ?
                <TouchableOpacity
                    onPress={props.onPress_goToCategories}
                    style={[styles.touchable, { marginBottom: Metrics.height * 0.05 }]}>
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    onPress={props.onPress_goToCategories}
                    style={[styles.touchable, { marginBottom: Metrics.height * 0.05, backgroundColor: '#A9957B', flexDirection: 'row' }]}>
                    <Text style={styles.text}>{props.name}</Text>
                    <LockSvg width="10%" height="60%" style={{ color: 'black', flex: 0.15 }} />
                </TouchableOpacity>
            }
        </>
    )
}


export default CustomizedButton