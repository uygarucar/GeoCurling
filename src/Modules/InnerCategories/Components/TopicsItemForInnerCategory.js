import React from 'react'
import { useNavigation } from '@react-navigation/core'
import CustomizedButton from '../../OuterCategories/Components/CustomizedButton'


const TopicsItemForInnerCategory = (props) => {
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
                name={props.name} />
        </>
    )
}

export default TopicsItemForInnerCategory