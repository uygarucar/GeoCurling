import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import StoneShape from './CurrentPlaceStoneShape'
import CurlingPitchShape from './TargetPlaceCurlingShape'

const MapConfig = (props) => {
    const latitude = props.initialLatitude;
    const longitude = props.initialLongitude;
    const latitudeDelta = props.latitudeDelta;
    const longitudeDelta = props.longitudeDelta;
    const styles = props.style;
    
    return (
        <MapView provider={PROVIDER_GOOGLE}
            style={styles}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
            }}
        >
            <StoneShape
                latitude={props.stoneLatitude}
                longitude={props.stoneLongitude}
            />
            <CurlingPitchShape />

        </MapView>
    )
}

export default MapConfig