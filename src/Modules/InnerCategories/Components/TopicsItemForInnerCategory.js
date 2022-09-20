import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomizedButton from '../../OuterCategories/Components/CustomizedButton'
import Modal from 'react-native-modal'
import AdPrompt from './AdPrompt'
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';
import { useIsFocused } from '@react-navigation/core'
import CustomizedModal from './CustomizedModal'


const TopicsItemForInnerCategory = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false)
    const _setModalVisibility = (boolean) => {
        setIsModalVisible(boolean)
    }

    const navigation = useNavigation()

    const _onPress_goToCategories = () => {
        navigation.navigate("play-screen", {
            innerCategoryId: props.id,
            outerCategoryId: props.outerCategoryId
        });
    }



    return (
        <>
            <CustomizedButton
                isLocked={props.isLocked}
                onPress_goToCategories={_onPress_goToCategories}
                name={props.name}
                setModalVisibility={_setModalVisibility}
            />
            <CustomizedModal
                isVisible={isModalVisible}
                innerCategoryId={props.id}
                outerCategoryId={props.outerCategoryId}
                onPress_goToCategories={_onPress_goToCategories}
                setModalVisibility={_setModalVisibility}
            />
        </>
    )
}

export default TopicsItemForInnerCategory