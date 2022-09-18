import { Daglar, MasifAraziler, Platolar, Volkanizma, FayHatları } from '../Data/TargetPlacesInfos_Unit1'
import { Ovalar, AkarsuSekilleri, Selalelerimiz, RuzgarSekilleri, KarstikSekiller1, KarstikSekiller2 } from '../Data/TargetPlacesInfos_Unit2';
import { BesiUreticiligiVeToprak, IklimlerVeBesiUretimi1, IklimlerVeBesiUretimi2, IklimlerVeBesiUretimi3, Mikroklima } from '../Data/TargetPlacesInfos_Unit3';
import GiveCoordinates from "./GiveCoordinates";
import useDispatchTarget from "../CustomHooks/useDispatchTarget";
import { Enerji, NehirlerVeMadenler, SuVarligi1 } from '../Data/TargetPlacesInfos_Unit4';

const dispatchCoordinateForChosenTopic = (outerCategoryId, innerCategoryId) => {
    let coordinate;
    switch (outerCategoryId) {
        case 1:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(Daglar)
                break;
            } else if (innerCategoryId == 2) {
                coordinate = GiveCoordinates(Volkanizma)
                break;
            }
            else if (innerCategoryId == 3) {
                coordinate = GiveCoordinates(MasifAraziler)
                break;
            }
            else if (innerCategoryId == 4) {
                coordinate = GiveCoordinates(Platolar)
                break;
            }
            else if (innerCategoryId == 5) {
                coordinate = GiveCoordinates(FayHatları)
                break;
            }
        case 2:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(Ovalar)
                break;
            } else if (innerCategoryId == 2) {
                coordinate = GiveCoordinates(AkarsuSekilleri)
                break;
            }
            else if (innerCategoryId == 3) {
                coordinate = GiveCoordinates(Selalelerimiz)
                break;
            }
            else if (innerCategoryId == 4) {
                coordinate = GiveCoordinates(RuzgarSekilleri)
                break;
            }
            else if (innerCategoryId == 5) {
                coordinate = GiveCoordinates(KarstikSekiller1)
                break;
            }
            else if (innerCategoryId == 6) {
                coordinate = GiveCoordinates(KarstikSekiller2)
                break;
            }
        case 3:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(IklimlerVeBesiUretimi1)
                break;
            } else if (innerCategoryId == 2) {
                coordinate = GiveCoordinates(IklimlerVeBesiUretimi2)
                break;
            }
            else if (innerCategoryId == 3) {
                coordinate = GiveCoordinates(IklimlerVeBesiUretimi3)
                break;
            }
            else if (innerCategoryId == 4) {
                coordinate = GiveCoordinates(BesiUreticiligiVeToprak)
                break;
            }
            else if (innerCategoryId == 5) {
                coordinate = GiveCoordinates(Mikroklima)
                break;
            }
        case 4:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(SuVarligi1)
                break;
            } else if (innerCategoryId == 2) {
                coordinate = GiveCoordinates(NehirlerVeMadenler)
                break;
            }
            else if (innerCategoryId == 3) {
                coordinate = GiveCoordinates(Enerji)
                break;
            }

        default:
            coordinate = GiveCoordinates(Mikroklima)
            break;
    }

    useDispatchTarget(coordinate)
}
export { dispatchCoordinateForChosenTopic }