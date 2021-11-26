import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import RandomPlace from '../Components/RandomPlaces';
import styles from '../styles/StageScreenStyles';
import RangeFunction from '../Utils/RangeFunction';
import Target_Prompt from '../Components/PromptTargetInfo';
import DistanceToTarget_Prompt from '../Components/DistanceToTargetInfo'
import CurlingPitchShape from '../Components/TargetPlaceCurlingShape';
import GiveCoordinates from '../Utils/GiveCoordinates';
import { useDispatch, useSelector } from 'react-redux';
import { TargetPlaces_Unit1, TargetPlaces_Unit2 } from '../Components/TargetPlacesInfos';
import { dispatchCoordinateForChosenTopic } from '../Utils/DispatchCoordinates';
import StoneShape from '../Components/CurrentPlaceStoneShape';
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import useDispatchTarget from '../CustomHooks/useDispatchTarget';
import { currentLatitudeSelector } from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeSelector } from '../Redux/CurrentLongitudeRedux';
import MapConfig from '../Components/MapConfig';

const StageScreen = (props) => {
    //itemId represents the topic chosen in previous page
    const itemId = props.route.params?.itemId;

    const elements = GiveCoordinates(RandomPlace)
    //Hiçbir zaman değişmeyecek başlangıç koordinatları
    let initialCoordinates;
    initialCoordinates = useRef(elements);
     
    useDispatchCurrent(elements)

    const latitude = useSelector(currentLatitudeSelector)
    const longitude = useSelector(currentLongitudeSelector)

    let targetElements = {};
    //For assignment of a random coordinate regarding chosen topic
    dispatchCoordinateForChosenTopic(itemId, targetElements)


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.05 }} />
            <MapConfig 
                style={styles.mapView}
                stoneLatitude={latitude}
                stoneLongitude={longitude}
                initialLatitude={initialCoordinates.current.latitude}
                initialLongitude={initialCoordinates.current.longitude}
                latitudeDelta={1.1922}
                longitudeDelta={1.1421} />
            <Target_Prompt />
            <DistanceToTarget_Prompt />

        </View>
    )
}

export default StageScreen