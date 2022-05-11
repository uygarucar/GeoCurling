import React, { useEffect, useState } from 'react'
import { MarkerAnimated } from 'react-native-maps'
import calculateNextCoordinates from '../Utils/CalculateNextCoordinates';
import _onPress_fireMarker from './MarkerFiringFunction';
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import { useDispatch } from 'react-redux';
import { currentLatitudeCreator } from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeCreator } from '../Redux/CurrentLongitudeRedux';

const CustomizedMarkerAnimated = (props) => {
    console.log("CustomizedMarkerAnimated:1")
    //const latitude = props.latitude;
    //const longitude = props.longitude;
    const coordinate = props.coordinate;
    const [myMarker, setMyMarker] = useState();
    const mapRef = props.mapRef;

    const directionCreatorMarkerCoords = props.directionCreatorMarkerCoords;
    const actualMarkerCoords = props.actualMarkerCoords;
    const nextCoordinates = calculateNextCoordinates(directionCreatorMarkerCoords, actualMarkerCoords)

/*
useEffect(() => {
        useDispatchCurrent(nextCoordinates);
    }, [])
*/
//console.log("usDispatchCurrent(nextCoordinates) öncesi")
//console.log("nextCoordinates", nextCoordinates)

const dispatch= useDispatch();
useEffect(() => {

    dispatch(currentLatitudeCreator(nextCoordinates.latitude)),
    dispatch(currentLongitudeCreator(nextCoordinates.longitude))
    console.log("CustomizedMarkerAnimated:UseEffect")
    
}, [nextCoordinates])
//useDispatchCurrent(nextCoordinates);
const changeActMarkerCoordinate= props.onPress_changeActMarkerCoordinate;


    return (
        <MarkerAnimated
            image={require('../../../Assets/Images/curlingStone.png')}
            onPress={() => _onPress_fireMarker(nextCoordinates, myMarker, mapRef, changeActMarkerCoordinate)}
            ref={marker => { setMyMarker(marker) }}
            coordinate={coordinate}
        />
    )
}

export default CustomizedMarkerAnimated