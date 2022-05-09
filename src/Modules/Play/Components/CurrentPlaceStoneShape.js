import React, { useRef, useState } from 'react'
import { Circle, MarkerAnimated, Polygon, AnimatedRegion } from 'react-native-maps'
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import _onPress_fireMarker from './MarkerFiringFunction';

const StoneShape = (props) => {
    const latitude = props.latitude;
    const longitude = props.longitude;
    let mapRef= props.mapRef;
    let [myMarker, setMyMarker] = useState();
    
    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
    }))
    
    const nextCoordinates = {
        latitude: latitude + 0.2,
        longitude: longitude + 0.2,
    }

    //_onPress_animateCamera_And_Marker(nextCoordinates, myMarker, mapRef.current);
    

    


    return (
        <>
            <MarkerAnimated
                ref={marker => setMyMarker(marker)}
                onPress={() => _onPress_fireMarker(nextCoordinates, myMarker, mapRef)}
                image={require('../../../Assets/Images/curlingStone.png')}
                coordinate={coordinate}
            >
                {/*
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={5000}
                strokeWidth={1}
                strokeColor="rgba(123, 123, 123, 1)"
                fillColor="rgba(123, 123, 123, 1)"
                zIndex={0}
            />
            <Circle
                center={{
                    latitude: latitude,
                    longitude: longitude,
                }}
                radius={3000}
                strokeWidth={1}
                strokeColor="rgba(255, 0, 0, 1)"
                fillColor="rgba(255, 0, 0, 1)"
                zIndex={0}
            />
             */}
            </MarkerAnimated>
        </>
    )
}

export default StoneShape