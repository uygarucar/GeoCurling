import { Daglar, Volkanizma } from "../Components/TargetPlacesInfos";
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

        //case 2:

        default:
            break;
    }

    useDispatchTarget(coordinate)
}
export { dispatchCoordinateForChosenTopic }