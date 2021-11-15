import React from 'react'
import { View, Text } from 'react-native'

const Stage1Screen = (props) => {
    const itemId = props.route.params?.itemId;

    return (
        <View>
            <Text>I'm Stage1</Text>
            <Text>{itemId}</Text>
        </View>
    )
}

export default Stage1Screen