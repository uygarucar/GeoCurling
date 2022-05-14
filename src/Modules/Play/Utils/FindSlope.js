
const findSlope = (secMarkerLat, secMarkerLong, firstMarkerLat, firstMarkerLong) => {
    console.log("secMarkerLong:::", secMarkerLong)
    console.log("firstMarkerLong:::", firstMarkerLong)
    console.log("secMarkerLat:::", secMarkerLat)
    console.log("firstMarkerLat:::", firstMarkerLat)

    console.log("secMarker-firstMarkerLong :::", secMarkerLong-firstMarkerLong)
    console.log("secMarker-firstMarkerLat :::", secMarkerLat-firstMarkerLat)

    const slope= (secMarkerLong-firstMarkerLong) / (secMarkerLat - firstMarkerLat);

    //const result = (-0.194) /  (-0.250)

    return slope
}

export default findSlope