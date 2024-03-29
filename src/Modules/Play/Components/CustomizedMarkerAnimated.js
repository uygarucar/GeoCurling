import React, { useEffect, useState } from 'react'
import { MarkerAnimated } from 'react-native-maps'
import calculateNextCoordinates from '../Utils/CalculateNextCoordinates';
import _onPress_fireMarker from './MarkerFiringFunction';
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import { useDispatch } from 'react-redux';
import { currentLatitudeCreator } from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeCreator } from '../Redux/CurrentLongitudeRedux';
import calculateDistanceToNextPlace from '../Utils/calculateDistanceToAim';
import calculateTime from '../Utils/calculateTime';
import { arrowVisibilityCreator } from '../Redux/ArrowVisibilityRedux';

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
    console.log("nextCoordinatesssss:", nextCoordinates)

    const distanceToAim = calculateDistanceToNextPlace(actualMarkerCoords.latitude, actualMarkerCoords.longitude, nextCoordinates.latitude, nextCoordinates.longitude)
    console.log("distanceTOAim,", distanceToAim)

    const time = calculateTime(distanceToAim)
    console.log("time", time)
    /*
    useEffect(() => {
            useDispatchCurrent(nextCoordinates);
        }, [])
    */
    //console.log("usDispatchCurrent(nextCoordinates) öncesi")
    //console.log("nextCoordinates", nextCoordinates)

    const dispatch = useDispatch();

    //useDispatchCurrent(nextCoordinates);
    const changeActMarkerCoordinate = props.onPress_changeActMarkerCoordinate;


    return (
        <MarkerAnimated
            image={require('../../../Assets/Images/curlingStone.png')}
            onPress={() => {
                dispatch(currentLatitudeCreator(nextCoordinates.latitude));
                dispatch(currentLongitudeCreator(nextCoordinates.longitude));
                _onPress_fireMarker(nextCoordinates, myMarker, mapRef, changeActMarkerCoordinate, time);
                dispatch(arrowVisibilityCreator(false))
            }}
            ref={marker => { setMyMarker(marker) }}
            coordinate={coordinate}
            anchor={{x:0.5, y: 0.5}}
        />
    )
}

export default CustomizedMarkerAnimated