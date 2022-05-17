import { TargetPlaces_Unit1, TargetPlaces_Unit2 } from "../Components/TargetPlacesInfos";
import GiveCoordinates from "./GiveCoordinates";
import useDispatchTarget from "../CustomHooks/useDispatchTarget";

const dispatchCoordinateForChosenTopic = (outerCategoryId, innerCategoryId) => {
    let coordinate;
    switch (outerCategoryId) {
        case 1:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(TargetPlaces_Unit1)
            }
            break;
        case 2:
            if (innerCategoryId == 1) {
                coordinate = GiveCoordinates(TargetPlaces_Unit2)
            }
            break;
        default:
            break;
    }

    useDispatchTarget(coordinate)
}
export { dispatchCoordinateForChosenTopic }