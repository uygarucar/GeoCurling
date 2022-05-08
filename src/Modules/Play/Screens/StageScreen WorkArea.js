import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE, MarkerAnimated } from 'react-native-maps';
import { useSelector } from 'react-redux';
import useDispatchCurrent from '../CustomHooks/UseDispatchCurrent';
import { currentLatitudeSelector} from '../Redux/CurrentLatitudeRedux';
import { currentLongitudeSelector } from '../Redux/CurrentLongitudeRedux'
const StageScreen = (props) => {
    /*
    useDispatchCurrent({
        latitude: 32.5983,
        longitude: 44.0175
    })
    */

    //const stoneLatitude= useSelector(currentLatitudeSelector)
    const markerLatitude=32.5983
    //console.log("stoneLatitude", stoneLatitude)
    //const stoneLongitude= useSelector(currentLongitudeSelector)
    const markerLongitude=44.0175
    //console.log("stoneLongitude", stoneLongitude)

    const mapRef = useRef (null);
    const [myMarker, setMyMarker] = useState(null);
    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: markerLatitude,
        longitude: markerLongitude,
        latitudeDelta: 0.012,
        longitudeDelta: 0.012,
    }));

    function animateMarkerAndCamera() {

        let newCoordinate = {
            latitude: 32.601,
            longitude: 44.0172,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
        };
        const newCamera= {
            center: {
                latitude: 32.601,
                longitude: 44.0172,
            },
            pitch: 0,
            heading: 0,
            //zoom: 17  --Use it when required
        }
        
        if (myMarker) {
            myMarker.animateMarkerToCoordinate(newCoordinate, 4000);
            mapRef.current.animateCamera(newCamera, {duration: 4000})
        }
        

    }

    return (
        <View style={styles.container}>
            <MapView
                ref={ mapRef }
                style={styles.map}
                initialRegion={{
                    latitude: 32.5983,
                    longitude: 44.0175,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.012,
                }}
                pitchEnabled ={false}
                zoomEnabled ={false}
            >
                <MarkerAnimated
                    ref={marker => {
                        setMyMarker(marker);
                    }}
                    image={require('../../../Assets/Images/curlingStone.png')}
                    coordinate={coordinate}
                    
                />

            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => animateMarkerAndCamera()}
                    style={[styles.bubble, styles.button]}
                >
                    <Text>Animate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    latlng: {
        width: 200,
        alignItems: 'stretch',
    },
    button: {
        width: 80,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
export default StageScreen

//1. myMarker'ın bizim asıl markerımız olduğunu nereden anlıyor?
//2. Marker => setMyMarker(marker)'daki marker bizim değişken koordinatımızı mı temsil ediyor?