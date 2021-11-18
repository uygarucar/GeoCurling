// Initial State
const INITIAL_STATE = {
    target_longitude: null,
};

// Selectors
export const targetLongitudeSelector = state => state.targetLongitudeState.target_longitude;

// Action Types

export const TARGET_LONGITUDE= "coordinate/target_longitude";


// Action Creators
export const targetLongitudeCreator = (longitude) => {
    return {
        type: TARGET_LONGITUDE,
        payload: {
            longitude,
        },
    };
}


// Reducer
export const targetLongitudeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TARGET_LONGITUDE:
            const newLongitude = action.payload.longitude;

            return {
                target_longitude: newLongitude,
            }
        default:
            return state;
    }
};