import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native'
import { Metrics } from '../../../StylingConstants'
import styles from '../styles/PlayScreenStyles'
import { useNavigation } from '@react-navigation/core'

const TopicsItem = (props) => {
    const navigation = useNavigation();

    const _onPress_goToStage1 = () => {
        navigation.navigate("game-screen", {
            itemId: props.id
        });
    }

    return(
        <TouchableOpacity
            onPress={_onPress_goToStage1}
            style={[styles.touchable, {marginBottom: Metrics.height * 0.05}]}
            >
                <Text style={styles.text}>{props.name}</Text>
            </TouchableOpacity>
    )
}

export default TopicsItem