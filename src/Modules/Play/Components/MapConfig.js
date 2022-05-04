import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import StoneShape from './CurrentPlaceStoneShape'
import CurlingPitchShape from './TargetPlaceCurlingShape'
import MarkerConfig from './MarkerConfig'
import { UrlTile } from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { getDistance, getPreciseDistance } from 'geolib'

const MapConfig = (props) => {
    const [mapLatitude, setMapLatitude] = useState(props.initialLatitude);
    const [mapLongitude, setMapLongitude] = useState(props.initialLongitude);

    const [mapLatitudeDelta, setMapLatitudeDelta] = useState(1.1922)
    const [mapLongitudeDelta, setMapLongitudeDelta] = useState(1.1421)

    const styles = props.style;

    //Determine initial place of marker
    const [markerLatitude, setMarkerLatitude] = useState(props.stoneLatitude + 0.15)
    const [markerLongitude, setMarkerLongitude] = useState(props.stoneLongitude + 0.15)

    const _onDragEnd_SetMarkerCoordinates = (e) => {
        setMarkerLatitude(e.nativeEvent.coordinate.latitude)
        setMarkerLongitude(e.nativeEvent.coordinate.longitude)
    }
    return (
        <MapView provider={PROVIDER_GOOGLE}
            minZoomLevel={9}
            maxZoomLevel={9}
            style={styles}
            rotateEnabled={false}
            initialRegion={{
                latitude: mapLatitude,
                longitude: mapLongitude,
                latitudeDelta: mapLatitudeDelta,
                longitudeDelta: mapLongitudeDelta
            }}
            region={{
                latitude: mapLatitude,
                longitude: mapLongitude,
                latitudeDelta: mapLatitudeDelta,
                longitudeDelta: mapLongitudeDelta
            }}
            onRegionChangeComplete={(e) => {

                setMapLatitudeDelta(e.latitudeDelta);
                setMapLongitudeDelta(e.longitudeDelta);
                setMapLatitude(e.latitude);
                setMapLongitude(e.longitude);
            }}
        >
            <StoneShape
                latitude={props.stoneLatitude}
                longitude={props.stoneLongitude}
            />
            {/*
            <Polyline
                coordinates={[
                    { latitude: props.stoneLatitude, longitude: props.stoneLongitude },
                    { latitude: props.stoneLatitude + 0.1, longitude: props.stoneLongitude + 0.1 },
                    { latitude: props.stoneLatitude + 0.1, longitude: props.stoneLongitude + 0.1 - 0.05 }

                ]}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                    '#7F0000',
                ]}
                strokeWidth={6}
            />
             */}
            <MarkerConfig onDragEnd_SetMarkerCoordinates={_onDragEnd_SetMarkerCoordinates}
                markerLatitude={markerLatitude}
                markerLongitude={markerLongitude}
            />
            <CurlingPitchShape />

        </MapView>
    )
}

export default MapConfig