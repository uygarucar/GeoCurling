import distanceFinder from "../Utils/DistanceFinder"

const checkIfGameFinished = (tLat, tLong, sLat, sLong, fireNumber) => {
    //Redux'ta bir value tut
    //Henüz 5. ele gelmediyse
    // 5 elden fazla sürdüyse giveOneMoreShot dönsün-> Tamam veya devam (Reklam).
    //aşağıdaki caselerden birindeyse YouPassed'e dönsün -> yani bilgi verdikten sonra innerCat sayfasına dönsün.
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
    //Bütün oyunlarda
    //Targeti bulduysan, en temel öge bittiyse
    //1. -> modal ekranı ile
    //sonucu açıkla & bilgi ver
    //Son oyunda belli bir puana gelemediyse reklam seçeneğini ortaya çıkart
    //2.1Kabul ederse reklam ve oyuna devam
    //2.Inner Cat uzunluğu kadar oyun oynanmamışsa yani hala oyun kalmışsa
    //Yeni oyunu çağır - Daha önce oynanmamış olmalı (Reduxa göndererek tetikleyebilirsin.)
    //3. inn. cat. oyunları bittiyse
    //İsLocked'ı false yaparak innerCat sayfasına dönmelisin.
}

export default checkIfGameFinished