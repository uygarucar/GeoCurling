import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RandomPlace from '../Components/RandomPlaces';
import styles from '../styles/StageScreenStyles';
import RangeFunction from '../Utils/RangeFunction';
import Target_Prompt from '../Components/PromptTargetInfo';
import DistanceToTarget_Prompt from '../Components/DistanceToTargetInfo'
import CurlingShape from '../Components/TargetPlaceCurlingShape';
import GiveCoordinates from '../Utils/GiveCoordinates';
import { useDispatch, useSelector } from 'react-redux';
import { TargetPlaces_Unit1, TargetPlaces_Unit2 } from '../Components/TargetPlacesInfos';
import { dispatchCoordinateForChosenTopic } from '../Utils/DispatchCoordinates';

import useDispatchTarget from '../CustomHooks/useDispatchTarget';

const StageScreen = (props) => {
    //itemId represents the topic chosen in previous page
    const itemId = props.route.params?.itemId;

    const elements = GiveCoordinates(RandomPlace);

    let targetElements= {};

    //For assignment of a random coordinate regarding chosen topic
    dispatchCoordinateForChosenTopic(itemId, targetElements)

    
    return (
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
                <CurlingShape />
            </MapView>
            <Target_Prompt />
            <DistanceToTarget_Prompt />

        </View>
    )
}

export default StageScreen