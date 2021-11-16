import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const StageScreen = (props) => {
    //const itemId = props.route.params?.itemId;

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
                    latitude: 39.875,
                    longitude: 32.8333,
                    latitudeDelta: 1.1922,
                    longitudeDelta: 1.1421,
                }} />
        </>
    )
}

export default StageScreen