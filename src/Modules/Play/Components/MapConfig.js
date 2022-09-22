import React, { useState, useRef, useEffect } from 'react'
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
import { arrowVisibilityCreator } from '../Redux/ArrowVisibilityRedux'
import { useDispatch, useSelector } from 'react-redux'
import distanceFinder from '../Utils/DistanceFinder'
import { targetLatitudeSelector } from '../Redux/TargetLatitudeRedux'
import { targetLongitudeSelector } from '../Redux/TargetLongitudeRedux'
import checkIfGameUnitFinished from './CheckIfGameFinished'
import calculateScoring from '../Utils/CalculateScoring'
import calculateScore_notInPitch from '../Utils/CalculateScore_notInPitch'
import { totalScoreCreator } from '../Redux/TotalScoreRedux'

const MapConfig = (props) => {
    const totalScorePerUnit = props.totalScorePerUnit
    const targetLatitude = useSelector(targetLatitudeSelector)
    const targetLongitude = useSelector(targetLongitudeSelector)
    
    let upToDate_DistanceToTarget = distanceFinder(props.stoneLatitude, props.stoneLongitude, targetLatitude, targetLongitude)
    let initial_DistanceToTarget = useRef(upToDate_DistanceToTarget)
    console.log("upToDate_DistanceToTarget:::<^3:", upToDate_DistanceToTarget)
    console.log("inital_DistanceToTarget::<3:", initial_DistanceToTarget.current)
    

    const isInPitchCoords = {
        targetLatitude: targetLatitude,
        targetLongitude: targetLongitude,
        stoneLatitude: props.stoneLatitude,
        stoneLongitude: props.stoneLongitude
    }
    //beginningDistance used for scoring calculations

    console.log("constantDistance::", initial_DistanceToTarget)



    let fireNumber = useRef(-1)
    const _onPress_increaseFireNo = () => {
        fireNumber.current = fireNumber.current + 1
        console.log("<3<3<3<3<3<3<3<3<3<3<3<3FIRENUMBER.CURRENT<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3>", fireNumber.current)
    }
    const mapRef = useRef(null)

    const [mapLatitude, setMapLatitude] = useState(props.stoneLatitude);
    const [mapLongitude, setMapLongitude] = useState(props.stoneLongitude);
    const dispatch = useDispatch()

    const [mapLatitudeDelta, setMapLatitudeDelta] = useState(1.1922)
    const [mapLongitudeDelta, setMapLongitudeDelta] = useState(1.1421)

    const styles = props.style;

    //Determine initial place of 2nd marker
    const [markerLatitude, setMarkerLatitude] = useState(mapLatitude)
    //console.log("markerLatitude", markerLatitude)
    const [markerLongitude, setMarkerLongitude] = useState(mapLongitude)
    //console.log("markerLongitude", markerLongitude)


    //const myDistance = distanceFinder(props.stoneLatitude, props.stoneLongitude, props.initialLatitude, props.initialLongitude)
    //console.log("myDistancemyDistancemyDistancemyDistance", myDistance)
    const _onDragEnd_SetMarkerCoordinates = (e) => {
        setMarkerLatitude(e.nativeEvent.coordinate.latitude)
        setMarkerLongitude(e.nativeEvent.coordinate.longitude)
    }
    let curlingPitchPoint = null;
    let score;
    return (
        <MapView provider={PROVIDER_GOOGLE}
            //customMapStyle={mapStyle}
            ref={mapRef}
            mapType='terrain'
            minZoomLevel={9.2}
            maxZoomLevel={9.2}
            style={styles}
            rotateEnabled={false}
            scrollEnabled={false}
            pitchEnabled={false}
            zoomEnabled={false}
            moveOnMarkerPress={false}
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
                setMarkerLatitude(e.latitude);
                setMarkerLongitude(e.longitude);
                dispatch(arrowVisibilityCreator(true))
                if (curlingPitchPoint = checkIfGameUnitFinished(isInPitchCoords)) {
                    console.log("curlingPitchPoint", curlingPitchPoint)
                    score = calculateScoring(curlingPitchPoint, fireNumber.current, initial_DistanceToTarget.current)
                    dispatch(totalScoreCreator(score/2 + totalScorePerUnit))                    
                    console.log("ISSS<3<3<3<3<3 YOUR SCORE ISSS<3<3<3<3<3:", score)
                    props.onPress_setIsModalTrue()
                    props.onGameUnit_finish(score)
                }
                else if (fireNumber.current == 3) {
                    score= calculateScore_notInPitch(initial_DistanceToTarget.current, upToDate_DistanceToTarget)
                    console.log("****************HAKKIN BİTTİ*************"+"Puanın:", score)
                    props.onPress_setIsModalTrue()
                    props.onGameUnit_finish(score)
                    dispatch(totalScoreCreator(score/2 + totalScorePerUnit))    
                }

            }}


        >
            <StoneShape
                latitude={props.stoneLatitude}
                longitude={props.stoneLongitude}
                onPress_increaseFireNo={_onPress_increaseFireNo}
                mapRef={mapRef}
                directionCreatorMarkerLatitude={markerLatitude}
                directionCreatorMarkerLongitude={markerLongitude}
                
            />
            <ArrowDrawer
                arrowVisibility={props.arrowVisibility}
                coordinates={{
                    directionCreatorMarkerLatitude: markerLatitude,
                    directionCreatorMarkerLongitude: markerLongitude,
                    stoneLatitude: props.stoneLatitude,
                    stoneLongitude: props.stoneLongitude,
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
            <CurlingPitchShape
                latitude={targetLatitude}
                longitude={targetLongitude}
            />

        </MapView>
    )
}

export default MapConfig