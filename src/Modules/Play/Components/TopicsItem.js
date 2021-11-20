import React from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomizedButton from './CustomizedButton'


const TopicsItem = (props) => {
    
    const navigation = useNavigation();
    const _onPress_goToStage1 = () => {
        navigation.navigate("game-screen", {
            itemId: props.id
        });
    }

    return (
        <>
            <CustomizedButton
                isLocked={props.isLocked}
                onPress_goToStage1={_onPress_goToStage1}
                name={props.name} />
        </>
    )
}

export default TopicsItem