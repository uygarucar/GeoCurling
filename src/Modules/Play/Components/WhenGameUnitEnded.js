import React from 'react'
import { View, Text } from 'react-native'
import { Metrics } from '../../../StylingConstants'


const WhenGameUnitEnded = (props) => {
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
            height: Metrics.height * 0.15,
            borderRadius: 5,
            backgroundColor: '#A59F95',
            padding: Metrics.width * 0.05,
            marginHorizontal: Metrics.width * 0.1,
            marginVertical: Metrics.width * 0.7
        }}>
            {passed ?
                <>
                    <Text>GEÇTİN</Text>
                    <Text></Text>
                    <Text> Puanın={'>'} {props.totalScore}</Text>
                </>
                :
                <>
                    <Text>GEÇEMEDİN</Text>
                    <Text></Text>
                    <Text> Puanın={'>'} {props.totalScore}</Text>
                </>
            }
        </View>
    )
}

export default WhenGameUnitEnded