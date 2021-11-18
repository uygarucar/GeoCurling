import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, {PROVIDER_GOOGLE } from 'react-native-maps';
import RandomPlace from '../Components/RandomPlaces';
import styles from '../styles/StageScreenStyles';
import RangeFunction from '../Utils/RangeFunction';
import Target_Prompt from '../Components/PromptTargetInfo';
import DistanceToTarget_Prompt from '../Components/DistanceToTargetInfo'
import CurlingShape from '../Components/TargetPlaceCurlingShape';
import GiveCoordinates from '../Utils/GiveCoordinates';

const StageScreen = (props) => {
    //Aşağıdaki satır, topics objesindeki itemId değerini almamıza yardımcı olur ve
    //hangi 'ders konusu'na tıklanıldığını bilmemizi sağlar.
    // itemId'ye göre soruları değiştireceğiz.
    const itemId = props.route.params?.itemId;

    const elements = GiveCoordinates(RandomPlace);




    return (
        // <View>
        //     <Text>I'm Stage1</Text>
        //     <Text>{itemId}</Text>

        // </View>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.05 }} />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={{
                    latitude: elements.latitude,
                    longitude: elements.longitude,
                    latitudeDelta: 1.1922,
                    longitudeDelta: 1.1421,
                }}>
                <CurlingShape/>
            </MapView>
            <Target_Prompt />
            <DistanceToTarget_Prompt />

        </View>
    )
}

export default StageScreen