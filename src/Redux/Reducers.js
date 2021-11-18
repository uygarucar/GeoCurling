// Packages
import { combineReducers } from 'redux';
import { ThemeReducer, THEMING_NAMESPACE } from '../Modules/Theming';
import { LocalizationReducer, LOCALIZATION_NAMESPACE } from '../Modules/Localization';
import { loadingReducer, LOADING_NAMESPACE } from '../Modules/Loading';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth';
import { targetLatitudeReducer } from '../Modules/Play/Redux/TargetLatitudeRedux';
import { targetLongitudeReducer } from '../Modules/Play/Redux/TargetLongitudeRedux';
import { targetTextReducer  } from '../Modules/Play/Redux/TargetTextRedux';

// Reducers

export default combineReducers({
    [THEMING_NAMESPACE]: ThemeReducer,
    [LOCALIZATION_NAMESPACE]: LocalizationReducer,
    [LOADING_NAMESPACE]: loadingReducer,
    [USER_NAMESPACE]: userReducer,
    targetLatitudeState: targetLatitudeReducer,
    targetLongitudeState: targetLongitudeReducer,
    targetTextState: targetTextReducer, 
});


