import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Metrics } from '../../../StylingConstants'
import { useNavigation } from '@react-navigation/native'




const WhenGameUnitEnded = (props) => {

    let navigation = useNavigation()
    const totalScorePerUnit=  props.totalScorePerUnit
    const _onPress_GoBackAndForth = () => {
        navigation.goBack()
        navigation.navigate("play-screen", {
            innerCategoryId: props.innerCategoryId,
            outerCategoryId: props.outerCategoryId
        })
    }

    let passed;
    if (props.totalScore >= 65) {
        passed = true;
    }
    else {
        passed = false;
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
            {passed ?
                <>
                    <Text style={{ fontSize: 24, alignSelf: 'center', color: 'green' }}>GEÇTİN</Text>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}> Skorun---{'>'} {props.totalScore}</Text>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}> TOPLAMDA---{'>'} {totalScorePerUnit}</Text>
                    <Text>BİLGİ</Text>
                    <TouchableOpacity
                        onPress={_onPress_GoBackAndForth}
                        style={{ backgroundColor: 'green', flex: 0.3, borderColor: 'red', borderWidth: 1, paddingVertical: Metrics.height * 0.01 }}>
                        <Text style={{ color: 'purple', alignSelf: 'center' }}>İLERLE</Text>
                    </TouchableOpacity>

                </>
                :
                <>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>GEÇEMEDİN</Text>
                    <Text style={{ fontSize: 22, alignSelf: 'center' }}> Skorun---{'>'} {props.totalScore}</Text>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}> TOPLAMDA---{'>'} {totalScorePerUnit}</Text>
                    <Text>BİLGİ</Text>
                    <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'flex-end' }}>
                        {/*
                        <TouchableOpacity style={{flex:0.3,  borderColor: 'red', borderWidth: 1, borderRadius: 3}}>
                            <Text style={{color:'purple', alignSelf:'center'}}>1 HAK DAHA KAZAN</Text>
                        </TouchableOpacity>
                         */}
                        <TouchableOpacity
                            onPress={_onPress_GoBackAndForth}
                            style={{ backgroundColor: 'green', flex: 0.3, borderColor: 'red', borderWidth: 1, paddingVertical: Metrics.height * 0.01 }}>
                            <Text style={{ color: 'purple', alignSelf: 'center' }}>İLERLE</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export default WhenGameUnitEnded