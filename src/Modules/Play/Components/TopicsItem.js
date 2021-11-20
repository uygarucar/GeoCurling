import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Metrics } from '../../../StylingConstants'
import styles from '../styles/PlayScreenStyles'
import { useNavigation } from '@react-navigation/core'
import { Svgs } from '../../../StylingConstants/index'

const TopicsItem = (props) => {
    const LockSvg = Svgs.Lock;
    const navigation = useNavigation();

    const _onPress_goToStage1 = () => {
        navigation.navigate("game-screen", {
            itemId: props.id
        });
    }

    return (
        <>
            {
                !props.isLocked ?
                    <TouchableOpacity
                        onPress={_onPress_goToStage1}
                        style={[styles.touchable, { marginBottom: Metrics.height * 0.05 }]}
                    >
                        <Text style={styles.text}>{props.name}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={_onPress_goToStage1}
                        style={[styles.touchable, { marginBottom: Metrics.height * 0.05, backgroundColor: '#A9957B', flexDirection: 'row' }]}
                    >
                        <Text style={styles.text}>{props.name}</Text>

                        <LockSvg width="10%" height="60%" style={{ color: 'black', flex: 0.15 }} />

                    </TouchableOpacity>
            }
        </>
    )
}

export default TopicsItem