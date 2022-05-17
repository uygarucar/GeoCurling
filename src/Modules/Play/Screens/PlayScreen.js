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

const playingContent = {
    1: [{
        id: 1,
        text: 'Ege bölgesindeki masif araziye git',
        latitude: 37.7520,
        longitude: 27.4057
    },
    {
        id: 2,
        text: 'Karadeniz bölgesindeki kıyı kumullarının bulunduğu yere git',
        latitude: 41.0075,
        longitude: 38.8146
    }
    ],
    2: [
        {
            //Rize
            id: 1,
            text: 'Türkiye\'deki en fazla yağış alan il',
            latitude: 41.0255,
            longitude: 40.5177
        },
        {
            //Tuz gölü
            id: 2,
            text: 'Türkiye\'deki en az yağış alan bölge',
            latitude: 38.545910,
            longitude: 44.185593
        }
    ]
}


const PlayScreen = (props) => {
    //Beginning position elements {id, text, latitude, longitude}
    //Constant
    const elements = GiveCoordinates(RandomPlace)
    let initialCoordinates = useRef(elements);

    //Marker Coordinates
    //Changable
    
    //What happens when I dispatch here and child is affected? Which one begins first?
    useDispatchCurrent(initialCoordinates.current)
    console.log("PlayScreen:1")
    //Chosen topic in previous navigation page
    const innerCategoryId = props.route.params?.innerCategoryId;
    const outerCategoryId = props.route.params?.outerCategoryId;

    //dispatch random coordinate for target
    dispatchCoordinateForChosenTopic(outerCategoryId, innerCategoryId);
    return (
        <>
            <PhoneScreenView
                initialLatitude={initialCoordinates.current.latitude}
                initialLongitude={initialCoordinates.current.longitude}
            />
        </>
    )
}

export default PlayScreen