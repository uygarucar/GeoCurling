import React, { useEffect, useState } from 'react';
import AdPrompt from "./AdPrompt"
import Modal from 'react-native-modal'
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';
import { useIsFocused } from '@react-navigation/native';
const adUnitId = TestIds.REWARDED;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
});

const CustomizedModal = (props) => {
    const isFocused = useIsFocused()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const eventListener = rewarded.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {

                console.log("Reklam yüklendi")
                setLoaded(true);

            }
            if (type === RewardedAdEventType.EARNED_REWARD) {
                console.log("user earned reward of ", reward)
            }
        });
        console.log("rewarded.loaded:+++++++++++++++", rewarded.loaded, "+++++++++++++++")
        console.log("HİÇ Customized modale uğrar mı?")
        rewarded.load()




        return () => {
            eventListener();
        };
    }, [isFocused]);


    /*
    if (!loaded) {
        return null
    }
    */

    let isModalVisible = props.isVisible
    const _setModalVisibility = props.setModalVisibility

    const innerCategoryId = props.innerCategoryId
    const outerCategoryId = props.outerCategoryId
    const _onPress_goToCategories = props.onPress_goToCategories

    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => { _setModalVisibility(false) }}
        >
            <AdPrompt
                
                rewarded={rewarded}
                innerCategoryId={innerCategoryId}
                outerCategoryId={outerCategoryId}
                onPress_goToCategories={_onPress_goToCategories}
                setModalVisibility={_setModalVisibility}
            />
        </Modal>
    )
}

export default CustomizedModal