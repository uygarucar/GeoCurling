import React from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomizedButton from './CustomizedButton'


const TopicsItem = (props) => {
    
    const navigation = useNavigation();
    const _onPress_goToCategories = () => {
        navigation.navigate("inner-categories-screen", {
            itemId: props.id
        });
    }
    
    return (
        <>
            <CustomizedButton
                isLocked={props.isLocked}
                onPress_goToCategories={_onPress_goToCategories}
                name={props.name} />
        </>
    )
}

export default TopicsItem