import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Svgs } from '../../../StylingConstants/index'
import styles from '../styles/OuterCategoriesScreenStyles'
import { Metrics } from '../../../StylingConstants'
import AdPrompt from '../../InnerCategories/Components/AdPrompt'


const CustomizedButton = (props) => {
    const LockSvg = Svgs.Lock;
    const _onPress_goToCategories = props.onPress_goToCategories
    const _setModalVisibility = props.setModalVisibility


    return (
        <>
            {!props.isLocked ?
                <TouchableOpacity
                    onPress={_onPress_goToCategories}
                    style={[styles.touchable, { marginBottom: Metrics.height * 0.05 }]}>
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
                : 
                <TouchableOpacity
                    onPress={()=> {_setModalVisibility(true)}}
                    style={[styles.touchable, { marginBottom: Metrics.height * 0.05, backgroundColor: '#A9957B', flexDirection: 'row' }]}>
                    <Text style={styles.text}>{props.name}</Text>
                    <LockSvg width="10%" height="60%" style={{ color: 'black', flex: 0.15 }} />
                </TouchableOpacity>
            }
        </>
    )
}


export default CustomizedButton