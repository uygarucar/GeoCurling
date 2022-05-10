import React, { useEffect, useState } from 'react'
import { MarkerAnimated } from 'react-native-maps'
import calculateNextCoordinates from '../Utils/CalculateNextCoordinates';
import _onPress_fireMarker from './MarkerFiringFunction';
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';

const CustomizedMarkerAnimated = (props) => {
    console.log("CustomizedMarkerAnimated first")
    //const latitude = props.latitude;
    //const longitude = props.longitude;
    const coordinate = props.coordinate;
    const [myMarker, setMyMarker] = useState();
    const mapRef = props.mapRef;

    const directionCreatorMarkerCoords = props.directionCreatorMarkerCoords;
    const actualMarkerCoords = props.actualMarkerCoords;
    const nextCoordinates = calculateNextCoordinates(directionCreatorMarkerCoords, actualMarkerCoords)
    console.log("CustomizedMarkerAnimated second")

/*
useEffect(() => {
        useDispatchCurrent(nextCoordinates);
    }, [])
*/
//useDispatchCurrent(nextCoordinates);

    return (
        <MarkerAnimated
            image={require('../../../Assets/Images/curlingStone.png')}
            onPress={() => _onPress_fireMarker(nextCoordinates, myMarker, mapRef)}
            ref={marker => { setMyMarker(marker) }}
            coordinate={coordinate}
        />
    )
}

export default CustomizedMarkerAnimated