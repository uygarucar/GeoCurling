import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import StoneShape from './CurrentPlaceStoneShape'
import CurlingPitchShape from './TargetPlaceCurlingShape'
import { UrlTile } from 'react-native-maps'
import { Marker } from 'react-native-maps'

const MapConfig = (props) => {
    const [mapLatitude, setMapLatitude] = useState(props.initialLatitude);
    const [mapLongitude, setMapLongitude] = useState(props.initialLongitude);

    const [latitudeDelta, setLatitudeDelta] = useState(1.1922)
    const [longitudeDelta, setLongitudeDelta] = useState(1.1421)

    const styles = props.style;

    //Determine initial place of marker
    const [markerLatitude, setMarkerLatitude] = useState(props.stoneLatitude + 0.15)
    const [markerLongitude, setMarkerLongitude] = useState(props.stoneLongitude + 0.15)

    //When zooming out or zooming in, I want the zooming level not reset itself to its first values everytime the component rerenders


    console.log("latitudeDelta", latitudeDelta)
    console.log("longitudeDelta", longitudeDelta)
    console.log("----------------------------------")
    return (
        <MapView provider={PROVIDER_GOOGLE}
            minZoomLevel={8}
            maxZoomLevel={11}
            style={styles}
            rotateEnabled={false}
            initialRegion={{
                latitude: mapLatitude,
                longitude: mapLongitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }}
            region={{
                latitude: mapLatitude,
                longitude: mapLongitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }}
            onRegionChangeComplete={(e) => {
                console.log("Region Change Completed")
                setLatitudeDelta(e.latitudeDelta);
                setLongitudeDelta(e.longitudeDelta);
                setMapLatitude(e.latitude);
                setMapLongitude(e.longitude);
            }}
        >
            <StoneShape
                latitude={props.stoneLatitude}
                longitude={props.stoneLongitude}
            />

            <Marker
                draggable
                onDragEnd={(e) => {
                    setMarkerLatitude(e.nativeEvent.coordinate.latitude);
                    setMarkerLongitude(e.nativeEvent.coordinate.longitude);
                    
                }

                }
                coordinate={{
                    latitude: markerLatitude,
                    longitude: markerLongitude,
                }}

                image={require('../../../Assets/Images/AdjustingDirectionMarker.png')} />
            <CurlingPitchShape />

        </MapView>
    )
}

export default MapConfig