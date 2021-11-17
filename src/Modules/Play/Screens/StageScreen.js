import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RandomPlace from '../Components/RandomPlaces';
import RangeFunction from '../Utils/RangeFunction';


const StageScreen = (props) => {
    //Aşağıdaki satır, topics objesindeki itemId değerini almamıza yardımcı olur ve
    //hangi 'ders konusu'na tıklanıldığını bilmemizi sağlar.
    // itemId'ye göre soruları değiştireceğiz.
    const itemId = props.route.params?.itemId;
    
    const randomNumber = RangeFunction(RandomPlace)

    const {id, latitude, longitude} = RandomPlace[randomNumber];

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
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 1.1922,
                    longitudeDelta: 1.1421,
                }} />
        </>
    )
}

export default StageScreen