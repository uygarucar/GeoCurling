import React, { useRef, useState } from 'react'
import { Circle, MarkerAnimated, Polygon, AnimatedRegion } from 'react-native-maps'
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';

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
    

    const _onPress_animateCamera_And_Marker = () => {
        let newCoordinate = {
            latitude: latitude + 0.1,
            longitude: longitude + 0.1,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
        }
        const newCamera= {
            center: {
                latitude: latitude + 0.1,
                longitude: longitude + 0.1,
            },
            pitch: 0,
            heading: 0,
            //zoom: 17  --Use it when required
        }
        if(myMarker){
            myMarker.animateMarkerToCoordinate(newCoordinate, 4000)
            mapRef.current.animateCamera(newCamera, {duration: 4000})
        }
    }

    


    return (
        <>
            <MarkerAnimated
                ref={marker => setMyMarker(marker)}
                onPress={_onPress_animateCamera_And_Marker}
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