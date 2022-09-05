
const calculateScoring = (curlPitchPoint, noOfFires, beginningDistance) => {
    let howFarPoint
    let tryingPoint

    switch (true) {
        case beginningDistance >= 800000:
            howFarPoint = 80
            break;
        case beginningDistance >= 700000:
            howFarPoint = 75
            break;
        case beginningDistance >= 600000:
            howFarPoint = 70
            break;
        case beginningDistance >= 500000:
            howFarPoint = 68
            break;
        case beginningDistance >= 400000:
            howFarPoint = 65
            break;
        case beginningDistance >= 300000:
            howFarPoint = 61
            break;
        case beginningDistance >= 200000:
            howFarPoint = 60
            break;
        case beginningDistance >= 100000:
            howFarPoint = 55
            break;

        default:
            howFarPoint = 50
            break;
    }

    switch (true) {
        case noOfFires == 1:
            tryingPoint = 0
            break;
        case noOfFires == 2:
            tryingPoint = -15
            break;
        case noOfFires == 3:
            tryingPoint = -25
            break;
        case noOfFires == 4:
            tryingPoint = -25
            break;
        default:
            tryingPoint= -30
            break;
    }
    console.log("howFarPoint", howFarPoint)
   const score= curlPitchPoint+ howFarPoint+ tryingPoint
return score
}

export default calculateScoring 