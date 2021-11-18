import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RandomPlace from '../Components/RandomPlaces';
import styles from '../styles/StageScreenStyles';
import RangeFunction from '../Utils/RangeFunction';
import Prompt from '../Components/PromptTargetInfo';
import DistanceToTarget from '../Components/DistanceToTargetInfo'

const StageScreen = (props) => {
    //Aşağıdaki satır, topics objesindeki itemId değerini almamıza yardımcı olur ve
    //hangi 'ders konusu'na tıklanıldığını bilmemizi sağlar.
    // itemId'ye göre soruları değiştireceğiz.
    const itemId = props.route.params?.itemId;

    const randomNumber = RangeFunction(RandomPlace);
 
    const { id, latitude, longitude } = RandomPlace[randomNumber];
    
    

    return (
        // <View>
        //     <Text>I'm Stage1</Text>
        //     <Text>{itemId}</Text>

        // </View>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.05 }}/>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 1.1922,
                    longitudeDelta: 1.1421,
                }} />
            <Prompt/>
            <DistanceToTarget/>
            
        </View>
    )
}

export default StageScreen