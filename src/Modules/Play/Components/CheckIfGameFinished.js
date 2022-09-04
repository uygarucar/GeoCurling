import distanceFinder from "../Utils/DistanceFinder"

const checkIfGameFinished = (tLat, tLong, sLat, sLong) => {

    const distance = distanceFinder(tLat, tLong, sLat, sLong)
    switch (true) {
        case distance <= 13150:
            console.log("***************-*-*-*-*ÇOOOOK İYİİİ ***********************")
            break;
        case distance <= 18700:
            console.log("***************-*-*-*-* İYİSİN ***********************")
            break;
        case distance <= 27400:
            console.log("***************************Fena Değil***************************")
            break;
        case distance <= 39400:
            console.log("***************************Hiç yoktan iyi***************************")
            break;
        default:
            break;
    }

}

export default checkIfGameFinished