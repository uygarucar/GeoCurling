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
import PhoneScreenView from '../Components/PhoneScreenView'
import MapConfig from '../Components/MapConfig';

const CategoriesScreen = (props) => {
    //Beginning position elements {id, text, latitude, longitude}
    //Constant
    const elements = GiveCoordinates(RandomPlace)
    let initialCoordinates = useRef(elements);

    //Marker Coordinates
    //Changable
    
    //What happens when I dispatch here and child is affected? Which one begins first?
    useDispatchCurrent(initialCoordinates.current)
    console.log("CategoriesScreen:1")
    //Chosen topic in previous navigation page
    const itemId = props.route.params?.itemId;
    //dispatch random coordinate for target
    dispatchCoordinateForChosenTopic(itemId);
    return (
        <>
            <PhoneScreenView
                initialLatitude={initialCoordinates.current.latitude}
                initialLongitude={initialCoordinates.current.longitude}
            />
        </>
    )
}

export default CategoriesScreen