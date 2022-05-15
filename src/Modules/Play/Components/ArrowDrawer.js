import { Polyline } from "react-native-maps";
import React from 'react'
import arrowEdgeFinder from "../Utils/ArrowEdgeFinder";
import colorOfArrowFinder from "../Utils/colorOfArrowFinder";

const ArrowDrawer = (props) => {

    const secondMarkerLat = props.coordinates.directionCreatorMarkerLatitude;
    const secondMarkerLong = props.coordinates.directionCreatorMarkerLongitude;
    const firstMarkerLat = props.coordinates.stoneLatitude;
    const firstMarkerLong = props.coordinates.stoneLongitude;

   
    const arrowEdgeCoordinates= arrowEdgeFinder(firstMarkerLat, firstMarkerLong, secondMarkerLat, secondMarkerLong) 
    console.log("arrowEdgeCoordinates", arrowEdgeCoordinates)
    
    const color = colorOfArrowFinder(firstMarkerLat, firstMarkerLong, secondMarkerLat, secondMarkerLong)
    console.log("color:", color)
    return (
        <Polyline
            zIndex={3}
            lineCap='round'
            coordinates={[
                { latitude: firstMarkerLat, longitude: firstMarkerLong },
                { latitude: arrowEdgeCoordinates.latitude, longitude: arrowEdgeCoordinates.longitude },
            ]}
            strokeColor={color}
            strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            ]}
            strokeWidth={13}
        />
    )
}

export default ArrowDrawer