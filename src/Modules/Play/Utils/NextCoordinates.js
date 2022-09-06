import distanceFinder from "./DistanceFinder"

const nextCoordinates = (stoneMarkerLatitude, stoneMarkerLongitude, directionMarkerLatitude, directionMarkerLongitude) => {
    const distance = distanceFinder(stoneMarkerLatitude, stoneMarkerLongitude, directionMarkerLatitude, directionMarkerLongitude)

    let newCoords = {
        latitude: null,
        longitude: null,
    }

    let latUnit = directionMarkerLatitude - stoneMarkerLatitude
    let longUnit = directionMarkerLongitude - stoneMarkerLongitude
    switch (true) {
        case distance < 9600:
            newCoords.latitude = stoneMarkerLatitude;
            newCoords.longitude = stoneMarkerLongitude;
            break;
        case distance >= 9600 && distance < 13000:
            newCoords.latitude = stoneMarkerLatitude - 3 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 3 * longUnit;
            break;
        case distance >= 13000 && distance < 16000:
            newCoords.latitude = stoneMarkerLatitude -  8* latUnit;
            newCoords.longitude = stoneMarkerLongitude - 8 * longUnit;
            break;
        case distance >= 16000 && distance < 19000:
            newCoords.latitude = stoneMarkerLatitude - 12 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 12 * longUnit;
            break;
        case distance >= 19000 && distance < 26000:
            newCoords.latitude = stoneMarkerLatitude - 15 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 15 * longUnit;
            break;
        case distance >= 26000 && distance < 32000:
            newCoords.latitude = stoneMarkerLatitude - 17 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 17 * longUnit;
            break;
        case distance >= 32000 && distance < 40000:
            newCoords.latitude = stoneMarkerLatitude - 19 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 19 * longUnit;
            break;
        case distance >= 40000 && distance < 100000:
            newCoords.latitude = stoneMarkerLatitude - 22 * latUnit;
            newCoords.longitude = stoneMarkerLongitude - 22 * longUnit;
            break;
        default:
            newCoords.latitude = stoneMarkerLatitude;
            newCoords.longitude = stoneMarkerLongitude;
            break;
    }


    return newCoords
}

export default nextCoordinates