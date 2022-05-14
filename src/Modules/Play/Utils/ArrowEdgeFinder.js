const arrowEdgeFinder = (firstMarkerLat, firstMarkerLong, secondMarkerLat, secondMarkerLong) => {
    const Coords = {
        lat: null,
        long: null
    }
    //Arrow Edge Longitude
    if (secondMarkerLong - firstMarkerLong < 0) {
        Coords.long = firstMarkerLong + (- secondMarkerLong + firstMarkerLong)
    }
    else if (secondMarkerLong - firstMarkerLong > 0) {
        Coords.long = firstMarkerLong - (secondMarkerLong - firstMarkerLong)
    }
    else {
        Coords.long = firstMarkerLong
    }
    //Arrow Edge Latitude
    if (secondMarkerLat - firstMarkerLat < 0) {
        Coords.lat = firstMarkerLat + (- secondMarkerLat + firstMarkerLat)
    }
    else if (secondMarkerLat - firstMarkerLat > 0) {
        Coords.lat = firstMarkerLat - (secondMarkerLat - firstMarkerLat)
    }
    else {
        Coords.lat = firstMarkerLat
    }
    return {
        latitude: Coords.lat,
        longitude: Coords.long
    }

}

export default arrowEdgeFinder