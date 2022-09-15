import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Metrics } from '../../../StylingConstants'
import updateFB_isLocked from '../Utils/updateFB_isLocked'
const AdPrompt = (props) => {
    const _onPress_goToCategories = props.onPress_goToCategories
    const _setModalVisibility = props.setModalVisibility
    const message = 'Reklam izle ve bölümü aç'
    const innerCategoryId = props.innerCategoryId
    const outerCategoryId = props.outerCategoryId

    const _onPress_enterTheSectionAndMakeItUnlocked = (val_isLocked, id_outer, id_inner) => {
        _onPress_goToCategories()
        updateFB_isLocked(false, id_outer, id_inner -1)
    }
    return (
        <View style={{
            flex: 1,
            width: Metrics.width * 0.7,
            height: Metrics.height * 0.35,
            borderRadius: 5,
            backgroundColor: '#A59F95',
            padding: Metrics.width * 0.05,
            marginHorizontal: Metrics.width * 0.1,
            marginVertical: Metrics.width * 0.4
        }}>

            <Text style={{ fontSize: 24, alignSelf: 'center', color: 'green' }}>{message}</Text>
            <TouchableOpacity
                onPress={() => _onPress_enterTheSectionAndMakeItUnlocked(false, outerCategoryId, innerCategoryId)}
                style={{

                    borderRadius: 20, justifyContent: 'center', alignContent: 'center',
                    backgroundColor: '#CAEECB', flex: 0.1, borderColor: 'red', borderWidth: 1, paddingVertical: Metrics.height * 0.02
                }}>
                <Text style={{ color: 'purple', alignSelf: 'center', flex: 1 }}>TAMAM!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => _setModalVisibility(false)}
                style={{
                    marginVertical: Metrics.height * 0.01,
                    borderRadius: 20,
                    backgroundColor: '#CAEECB', flex: 0.1, borderColor: 'red', borderWidth: 1, paddingVertical: Metrics.height * 0.02
                }}>
                <Text style={{ color: 'purple', alignSelf: 'center', flex: 1 }} >HAYIR!</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AdPrompt