// Initial State
const INITIAL_STATE = {
    current_latitude: null,
};

// Selectors
export const currentLatitudeSelector = state => state.currentLatitudeState.current_latitude;

// Action Types

export const CURRENT_LATITUDE= "coordinate/current_latitude_latitude";


// Action Creators
export const currentLatitudeCreator = (latitude) => {
    return {
        type: CURRENT_LATITUDE,
        payload: {
            latitude,
        },
    };
}


// Reducer
export const currentLatitudeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CURRENT_LATITUDE:
            const newLatitude = action.payload.latitude;

            return {
                current_latitude: newLatitude,
            }
        default:
            return state;
    }
};