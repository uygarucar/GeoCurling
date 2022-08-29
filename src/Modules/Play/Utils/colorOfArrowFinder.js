import distanceFinder from "./DistanceFinder";

const colorOfArrowFinder = (lat1stMarker, long1stMarker, lat2ndMarker, long2ndMarker) => {

    const distance = distanceFinder(lat1stMarker, long1stMarker, lat2ndMarker, long2ndMarker);
    console.log("distance", distance)
    let color = null;
    switch (true) {
        case distance >= 40000:
            color = '#EE3B1E'
            break;
        case distance >= 32000:
            color = '#d9590b'
            break;
        case distance >= 26000:
            color = '#EE6D1E'
            break;
        case distance >= 19000:
            color = '#e07c24'
            break;
        case distance >= 16000:
            color = '#EEBC1E'
            break;
        case distance >= 13000:
            color = '#228B22'
            break;
        case distance >= 10000:
            color = '#35ab02'
            break;
        default:
            color = '#35ab02'
            break;
    }

    return color;
}

export default colorOfArrowFinder