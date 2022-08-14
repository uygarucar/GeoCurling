
const nextCoordinates = (distance, stoneMarkerLatitude, stoneMarkerLongitude, directionMarkerLatitude, directionMarkerLongitude) => {
    
    let newCoords = {
        latitude: null,
        longitude: null,
    }

    let latUnit = directionMarkerLatitude - stoneMarkerLatitude
    let longUnit= directionMarkerLongitude - stoneMarkerLongitude

    newCoords.latitude=  stoneMarkerLatitude - 5 * latUnit;
    newCoords.longitude=  stoneMarkerLongitude - 5 * longUnit;

    return newCoords
}

export default nextCoordinates