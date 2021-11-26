// Initial State
const INITIAL_STATE = {
    target_longitude: null,
};

// Selectors
export const currentLongitudeSelector = state => state.currentLongitudeState.current_longitude;

// Action Types

export const CURRENT_LONGITUDE= "coordinate/current_longitude";


// Action Creators
export const currentLongitudeCreator = (longitude) => {
    return {
        type: CURRENT_LONGITUDE,
        payload: {
            longitude,
        },
    };
}


// Reducer
export const currentLongitudeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_LONGITUDE:
            const newLongitude = action.payload.longitude;

            return {
                current_longitude: newLongitude,
            }
        default:
            return state;
    }
};