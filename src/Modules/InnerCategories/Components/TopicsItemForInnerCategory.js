import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomizedButton from '../../OuterCategories/Components/CustomizedButton'
import Modal from 'react-native-modal'
import AdPrompt from './AdPrompt'


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
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={ () => {_setModalVisibility(false)}}
            >
                <AdPrompt
                    innerCategoryId= {props.id}
                    outerCategoryId= {props.outerCategoryId}
                    onPress_goToCategories={_onPress_goToCategories}
                    setModalVisibility={_setModalVisibility}
                />
            </Modal>
        </>
    )
}

export default TopicsItemForInnerCategory