import { Daglar, MasifAraziler, Platolar, Volkanizma, FayHatları } from '../Data/TargetPlacesInfos_Unit1_1'
import GiveCoordinates from "./GiveCoordinates";
import useDispatchTarget from "../CustomHooks/useDispatchTarget";

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
            else if(innerCategoryId== 5){
                coordinate= GiveCoordinates(FayHatları)
                break;
            }

        //case 2:

        default:
            break;
    }

    useDispatchTarget(coordinate)
}
export { dispatchCoordinateForChosenTopic }