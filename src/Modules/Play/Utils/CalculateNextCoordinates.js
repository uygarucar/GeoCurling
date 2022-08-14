import distanceFinder from "./DistanceFinder"
import findSlope from "./FindSlope"
import nextCoordinates from "./NextCoordinates"

const calculateNextCoordinates = (secondMarkerCoordinates, actualMarkerCoordinates) => {
    
    const distance= distanceFinder(secondMarkerCoordinates.latitude, secondMarkerCoordinates.longitude, actualMarkerCoordinates.latitude, actualMarkerCoordinates.longitude)
    console.log("*****distance:", distance)

    //Below will change
    const secondMarker = {
        latitude: secondMarkerCoordinates.latitude,
        longitude: secondMarkerCoordinates.longitude
    }
    //Above will change

    const slope = findSlope(secondMarkerCoordinates.latitude, secondMarkerCoordinates.longitude, actualMarkerCoordinates.latitude, actualMarkerCoordinates.longitude)
    console.log("Slope is :", slope)

    const nextCoords= nextCoordinates(distance, actualMarkerCoordinates.latitude, actualMarkerCoordinates.longitude, secondMarkerCoordinates.latitude, secondMarkerCoordinates.longitude)

    return nextCoords 
}

export default calculateNextCoordinates