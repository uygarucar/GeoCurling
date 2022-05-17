import React, { useState, useRef } from 'react'
import { TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'
import StoneShape from './CurrentPlaceStoneShape'
import CurlingPitchShape from './TargetPlaceCurlingShape'
import MarkerConfig from './MarkerConfig'
import { UrlTile } from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { getDistance, getPreciseDistance } from 'geolib'
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent'
import ArrowDrawer from './ArrowDrawer'
import mapStyle from './CustomMapStyle'

const MapConfig = (props) => {
    const mapRef = useRef(null)
    console.log("MapConfig:1")
    const [mapLatitude, setMapLatitude] = useState(props.stoneLatitude);
    const [mapLongitude, setMapLongitude] = useState(props.stoneLongitude);
    

    const [mapLatitudeDelta, setMapLatitudeDelta] = useState(1.1922)
    const [mapLongitudeDelta, setMapLongitudeDelta] = useState(1.1421)

    const styles = props.style;

    //Determine initial place of 2nd marker
    const [markerLatitude, setMarkerLatitude] = useState(mapLatitude + 0.15)
    //console.log("markerLatitude", markerLatitude)
    const [markerLongitude, setMarkerLongitude] = useState(mapLongitude + 0.15)
    //console.log("markerLongitude", markerLongitude)
    console.log("MapConfig:2")

    const _onDragEnd_SetMarkerCoordinates = (e) => {
        setMarkerLatitude(e.nativeEvent.coordinate.latitude)
        setMarkerLongitude(e.nativeEvent.coordinate.longitude)
    }



    return (
        <MapView provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            ref={mapRef}
            minZoomLevel={10}
            maxZoomLevel={10}
            style={styles}
            rotateEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}
            zoomEnabled={false}
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

                mapRef={mapRef}
                directionCreatorMarkerLatitude={markerLatitude}
                directionCreatorMarkerLongitude={markerLongitude}
            />
            <ArrowDrawer
                coordinates={{
                    directionCreatorMarkerLatitude: markerLatitude,
                    directionCreatorMarkerLongitude: markerLongitude,
                    stoneLatitude: props.stoneLatitude,
                    stoneLongitude: props.stoneLongitude
                }}
            />
            {/*<Polyline
                zIndex={2}
                lineCap='round'
                coordinates={[
                    { latitude: props.stoneLatitude + 0.05, longitude: props.stoneLongitude },
                    { latitude: props.stoneLatitude + 0.2, longitude: props.stoneLongitude },

                ]}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
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