
const calculateScore_notInPitch = (initialDistance, lastDistance) => {
    let point_initialDistance;
    let point_lastDistance;
console.log("---lastDistance", lastDistance)
console.log("---initialDistance", initialDistance)
    switch (true) {
        case lastDistance >= 300000:
            point_lastDistance = 1
            break;
        case lastDistance >= 250000:
            point_lastDistance = 5
            break;
        case lastDistance >= 200000:
            point_lastDistance = 11
            break;
        case lastDistance >= 150000:
            point_lastDistance = 14
            break;
        case lastDistance >= 100000:
            point_lastDistance = 17
            break;
        case lastDistance >= 49000:
            point_lastDistance = 20
            break;
        default:
            point_lastDistance= point_lastDistance
            break;
    }

    switch (true) {
        case initialDistance >= 800000:
            point_initialDistance = 13
            break;
        case initialDistance >= 600000:
            point_initialDistance = 9
            break;
        case initialDistance >= 400000:
            point_initialDistance = 5
            break;
        case initialDistance >= 200000:
            point_initialDistance = 2
            break;
        case initialDistance >= 0:
            point_initialDistance = 1
            break;
        default:
            point_initialDistance= null
            break;
    }


    let point_notInPitch= point_initialDistance + point_lastDistance
    return point_notInPitch
}

export default calculateScore_notInPitch