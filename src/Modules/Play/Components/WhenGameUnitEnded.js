import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Metrics } from '../../../StylingConstants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { solutionTextSelector } from '../Redux/SolutionTextRedux'




const WhenGameUnitEnded = (props) => {

    
    
    const totalScore= props.totalScore
    let navigation = useNavigation()
    const totalScorePerUnit=  props.totalScorePerUnit
    const _onPress_GoBackAndForth = () => {
        navigation.goBack()
        navigation.navigate("play-screen", {
            innerCategoryId: props.innerCategoryId,
            outerCategoryId: props.outerCategoryId
        })
    }

    let message;
    let color;
    if (totalScore >= 65) {
        message = "ÇOOK İYİ";
        color = '#40E58E'
    }
    else if (totalScore >=43){
        message = "İYİSİN";
        color = '#4DE540';
    }
    else if (totalScore >=34){
        message = "DAHA İYİ OLABİLİR!";
        color = '#E5CC40';
    }
    else if(totalScore >= 0){
        message= "EH İŞTE";
        color = '#DE5127';
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
                <>
                    <Text style={{ fontSize: 24, alignSelf: 'center', color: color }}>{message}</Text>
                    <Text style={{ fontSize: 22, alignSelf: 'center' }}> Skorun---{'>'} {totalScore}</Text>
                    {/*<Text style={{ fontSize: 24, alignSelf: 'center' }}> TOPLAMDA---{'>'} {totalScorePerUnit}</Text>*/}
                    <Text style={{ fontSize: 17, alignSelf: 'center', color: '#0F0F0F' }}>{props.solution}</Text>
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
        </View>
    )
}

export default WhenGameUnitEnded