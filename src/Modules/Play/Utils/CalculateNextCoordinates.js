import distanceFinder from "./DistanceFinder"

const calculateNextCoordinates = (secondMarkerCoordinates, actualMarkerCoordinates) => {
    const distance= distanceFinder(secondMarkerCoordinates.latitude, secondMarkerCoordinates.longitude, actualMarkerCoordinates.latitude, actualMarkerCoordinates.longitude)
    console.log("distance: ", distance)

    //Below will change
    const secondMarker = {
        latitude: secondMarkerCoordinates.latitude,
        longitude: secondMarkerCoordinates.longitude
    }
    //Above will change
    return secondMarker 
}

export default calculateNextCoordinates