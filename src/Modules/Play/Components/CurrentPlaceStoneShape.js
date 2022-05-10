import React, { useRef, useState } from 'react'
import { Circle, MarkerAnimated, Polygon, AnimatedRegion } from 'react-native-maps'
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import _onPress_fireMarker from './MarkerFiringFunction';
import calculateNextCoordinates from '../Utils/CalculateNextCoordinates';
import CustomizedMarkerAnimated from './CustomizedMarkerAnimated'

const StoneShape = (props) => {
    console.log("stoneShape: first")
    const latitude = props.latitude;
    const longitude = props.longitude;
    const actualMarkerCoords = {
        latitude,
        longitude
    }
    const directionCreatorMarkerLatitude = props.directionCreatorMarkerLatitude
    const directionCreatorMarkerLongitude = props.directionCreatorMarkerLongitude
    const directionCreatorMarkerCoords = {
        latitude: directionCreatorMarkerLatitude,
        longitude: directionCreatorMarkerLongitude
    }
    
    let mapRef= props.mapRef;
    
    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
    }))
    console.log("stoneShape: second")
    
    //const nextCoordinates = calculateNextCoordinates(directionCreatorMarkerCoords, actualMarkerCoords);
    return (
        <>
            <CustomizedMarkerAnimated
                latitude= {latitude}
                longitude= {longitude}
                coordinate ={coordinate}
                mapRef={mapRef}
                directionCreatorMarkerCoords={directionCreatorMarkerCoords}
                actualMarkerCoords= {actualMarkerCoords}
            />
        </>
    )
}

export default StoneShape