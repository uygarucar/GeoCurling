import React, { useEffect, useRef, useState } from 'react'
import { Circle, MarkerAnimated, Polygon, AnimatedRegion } from 'react-native-maps'
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import _onPress_fireMarker from './MarkerFiringFunction';
import calculateNextCoordinates from '../Utils/CalculateNextCoordinates';
import CustomizedMarkerAnimated from './CustomizedMarkerAnimated'
import combineCoordinates from '../Utils/CombineCoordinates'

const StoneShape = (props) => {
    const _onPress_increaseFireNo = props.onPress_increaseFireNo

    const latitude = props.latitude;
    const longitude = props.longitude;
    const actualMarkerCoords = combineCoordinates(latitude, longitude)

    const directionCreatorMarkerLatitude = props.directionCreatorMarkerLatitude
    const directionCreatorMarkerLongitude = props.directionCreatorMarkerLongitude
    const directionCreatorMarkerCoords = combineCoordinates(directionCreatorMarkerLatitude, directionCreatorMarkerLongitude)

    useEffect(() => {
        _onPress_increaseFireNo();

    },[latitude, longitude])

    let mapRef = props.mapRef;

    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
    }))

    const _onPress_changeActMarkerCoordinate = () => {

        setCoordinate(new AnimatedRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
        }))

    }


    //const nextCoordinates = calculateNextCoordinates(directionCreatorMarkerCoords, actualMarkerCoords);
    return (
        <>
            <CustomizedMarkerAnimated
                latitude={latitude}
                longitude={longitude}
                coordinate={coordinate}
                mapRef={mapRef}
                directionCreatorMarkerCoords={directionCreatorMarkerCoords}
                actualMarkerCoords={actualMarkerCoords}
                onPress_changeActMarkerCoordinate={_onPress_changeActMarkerCoordinate}
            />
        </>
    )
}

export default StoneShape