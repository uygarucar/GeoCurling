// Initial State
const INITIAL_STATE = {
    target_latitude: null,
};

// Selectors
export const targetLatitudeSelector = state => state.targetLatitudeState.target_latitude;

// Action Types

export const TARGET_LATITUDE= "coordinate/target_latitude";


// Action Creators
export const targetLatitudeCreator = (latitude) => {
    return {
        type: TARGET_LATITUDE,
        payload: {
            latitude,
        },
    };
}


// Reducer
export const targetLatitudeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TARGET_LATITUDE:
            const newLatitude = action.payload.latitude;

            return {
                target_latitude: newLatitude,
            }
        default:
            return state;
    }
};