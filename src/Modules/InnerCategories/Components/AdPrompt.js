import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Metrics } from '../../../StylingConstants'
import { View } from 'react-native'
import { Text } from 'react-native'
const AdPrompt = (props) => {
    const onPress_goToCategories = props.onPress_goToCategories

    const message = 'Reklam izle ve bölümü aç'

    const _onPress_enterTheSectionAndMakeItUnlocked = props => {
        console.log("Section entered and the section is ulocked")
        onPress_goToCategories()
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
                onPress={_onPress_enterTheSectionAndMakeItUnlocked}
                style={{

                    borderRadius: 20, justifyContent: 'center', alignContent: 'center',
                    backgroundColor: '#CAEECB', flex: 0.1, borderColor: 'red', borderWidth: 1, paddingVertical: Metrics.height * 0.02
                }}>
                <Text style={{ color: 'purple', alignSelf: 'center', flex: 1 }}>TAMAM!</Text>
            </TouchableOpacity>
            <TouchableOpacity
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