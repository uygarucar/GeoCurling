import distanceFinder from "./DistanceFinder"

const calculateDistanceToNextPlace = (prevLatCoord, prevLongCoord, currLatCoord, currLongCoord) => {
    const distance= distanceFinder(prevLatCoord, prevLongCoord, currLatCoord, currLongCoord)
    return distance;
}

export default calculateDistanceToNextPlace