import { TargetPlaces_Unit1, TargetPlaces_Unit2 } from "../Components/TargetPlacesInfos";
import GiveCoordinates from "./GiveCoordinates";
import useDispatchTarget from "../CustomHooks/useDispatchTarget";

const dispatchCoordinateForChosenTopic = (topic) => {
    let coordinate;
     switch (topic) {
        case topic: 1
            coordinate = GiveCoordinates(TargetPlaces_Unit1)
            break;
        case topic: 2
            coordinate = GiveCoordinates(TargetPlaces_Unit2)
            break;
        default:
            break;
    }

    useDispatchTarget(coordinate)
}
export {dispatchCoordinateForChosenTopic}