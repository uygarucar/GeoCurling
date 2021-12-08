import React from 'react'
import { Marker } from 'react-native-maps'

const MarkerConfig = (props) => {
    const onDragEnd_SetMarkerCoordinates = props.onDragEnd_SetMarkerCoordinates;
    const markerLatitude = props.markerLatitude
    const markerLongitude = props.markerLongitude
 
    return (
        <Marker
            draggable
            onDragEnd={onDragEnd_SetMarkerCoordinates}
            coordinate={{
                latitude: markerLatitude,
                longitude: markerLongitude
            }}
            image={require('../../../Assets/Images/AdjustingDirectionMarker.png')}
        />
    )
}

export default MarkerConfig