import distanceFinder from "./DistanceFinder";

const colorOfArrowFinder = (lat1stMarker, long1stMarker, lat2ndMarker, long2ndMarker) => {

    const distance = distanceFinder(lat1stMarker, long1stMarker, lat2ndMarker, long2ndMarker);
    console.log("distance", distance)
    let color = null;
    switch (true) {
        case distance >= 19000:
            color = '#EE3B1E'
            break;
        case distance >= 17000:
            color = '#EE541E'
            break;
        case distance >= 16000:
            color = '#EE6D1E'
            break;
        case distance >= 15000:
            color = '#EE961E'
            break;
        case distance >= 14000:
            color = '#EEBC1E'
            break;
        case distance >= 13000:
            color = '#EEDB1E'
            break;
        case distance >= 10000:
            color = '#99EE1E'
            break;
        case distance >= 6000:
            color = '#99EE1E'
            break;
        case distance >= 2000:
            color = '#5DEE1E'
            break;
        default:
            color = '#4CCD14'
            break;
    }

    return color;
}

export default colorOfArrowFinder