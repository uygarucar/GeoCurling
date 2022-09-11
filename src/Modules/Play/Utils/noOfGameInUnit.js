import { Daglar, Volkanizma, MasifAraziler, Platolar, FayHatları } from "../Data/TargetPlacesInfos_Unit1"
import { AkarsuSekilleri, KarstikSekiller1, KarstikSekiller2, Ovalar, RuzgarSekilleri, Selalelerimiz } from "../Data/TargetPlacesInfos_Unit2";
const noOfGameInUnit = (outerId, innerId) => {
    let length;
    if (outerId == 1) {
        switch (innerId) {
            case 1:
                length = Daglar.length
                break;
            case 2:
                length = Volkanizma.length
                break;
            case 3:
                length = MasifAraziler.length
                break;
            case 4:
                length = Platolar.length
                break;
            case 5:
                length = FayHatları.length
                break;

            default:
                length = 3
                break;
        }
    }
    else if (outerId == 2) {
        switch (innerId) {
            case 1:
                length = Ovalar.length
                break;
            case 2:
                length = AkarsuSekilleri.length
                break;
            case 3:
                length = Selalelerimiz.length
                break;
            case 4:
                length = RuzgarSekilleri.length
                break;
            case 5:
                length = KarstikSekiller1.length
                break;
            case 6:
                length = KarstikSekiller2.length
                break;

            default:
                length = 3
                break;
        }
    }


    return length
}

export default noOfGameInUnit