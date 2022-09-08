import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { currentLatitudeSelector } from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeSelector } from '../Redux/CurrentLongitudeRedux';
import { useSelector } from 'react-redux';
import MapConfig from './MapConfig';
import styles from '../styles/StageScreenStyles';
import Target_Prompt from './PromptTargetInfo';
import DistanceToTarget_Prompt from './DistanceToTargetInfo';
import { arrowVisibilitySelector } from '../Redux/ArrowVisibilityRedux';
import Modal from 'react-native-modal'
import { TouchableOpacity } from 'react-native-gesture-handler';
import WhenGameUnitEnded from './WhenGameUnitEnded';



const PhoneScreenView = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    let [totalScore, setTotalScore] = useState(null)

    const onGameUnit_finish = (score) => {
        setTotalScore(score)
        console.log("TOtaaaal", totalScore)
    }


    const _onPress_setIsModalTrue = () => {
        setIsModalVisible(true)
    }

    const _onPress_setIsModalFalse = () => {
        setIsModalVisible(false)
    }
    const initialLatitude = props.initialLatitude;
    const initialLongitude = props.initialLongitude;

    const currentLatitude = useSelector(currentLatitudeSelector)
    const currentLongitude = useSelector(currentLongitudeSelector)
    const arrowVisibility = useSelector(arrowVisibilitySelector)
    console.log("PhoneScreenView:2")


    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.05 }} />
                <MapConfig
                    onGameUnit_finish={onGameUnit_finish}
                    onPress_setIsModalTrue= {_onPress_setIsModalTrue}
                    style={styles.mapView}
                    stoneLatitude={currentLatitude}
                    stoneLongitude={currentLongitude}
                    initialLatitude={initialLatitude}
                    initialLongitude={initialLongitude}
                    arrowVisibility={arrowVisibility}
                />
                <Target_Prompt />
                <DistanceToTarget_Prompt
                    stoneLatitude={currentLatitude}
                    stoneLongitude={currentLongitude}
                />
            </View>
            <Modal
                onBackdropPress={_onPress_setIsModalFalse}
                isVisible={isModalVisible}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    animationIn: 'bounceIn',
                    animationOut: 'bounceOut',
                    animationInTiming: 1000,
                    animationOutTiming: 2000,
                    backdropTransitionInTiming: 2000,
                    backdropColor: 'blue',
                    backdropOpacity: 0.8
                }}>
                <WhenGameUnitEnded totalScore={totalScore}/>
            </Modal>
        </>
    )
}

export default PhoneScreenView