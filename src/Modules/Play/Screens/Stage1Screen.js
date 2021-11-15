import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const Stage1Screen = (props) => {
    const itemId = props.route.params?.itemId;

    return (
        // <View>
        //     <Text>I'm Stage1</Text>
        //     <Text>{itemId}</Text>

        // </View>
        <>
            <View style={{flex: 0.05}}>

            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 0.95, backgroundColor: 'gray' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
        </>
    )
}

export default Stage1Screen