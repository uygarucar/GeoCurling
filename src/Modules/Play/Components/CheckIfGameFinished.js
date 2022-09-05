import distanceFinder from "../Utils/DistanceFinder"

const checkIfGameFinished = (tLat, tLong, sLat, sLong) => {
    // 5 elden fazla sürdüyse giveOneMoreShot dönsün
    //aşağıdaki caselerden birindeyse YouPassed'e dönsün
    //Her Oyunun başında tekrar null'a çekilsin
    
    //Sırada modal eklemek var
    //Modal diye arat linkten
    //https://github.com/beyzatopcu-ba/rn-egitim-mekan/commits/master?after=919ee61bcf865f156822eb0807035ed36b5f243c+34&branch=master&qualified_name=refs%2Fheads%2Fmaster

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