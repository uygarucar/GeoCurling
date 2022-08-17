
const nextCoordinates = (stoneMarkerLatitude, stoneMarkerLongitude, directionMarkerLatitude, directionMarkerLongitude) => {
    
    let newCoords = {
        latitude: null,
        longitude: null,
    }

    let latUnit = directionMarkerLatitude - stoneMarkerLatitude
    let longUnit= directionMarkerLongitude - stoneMarkerLongitude

    newCoords.latitude=  stoneMarkerLatitude - 15 * latUnit;
    newCoords.longitude=  stoneMarkerLongitude - 15 * longUnit;

    return newCoords
}

export default nextCoordinates