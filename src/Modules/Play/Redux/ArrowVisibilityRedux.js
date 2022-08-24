// Initial State
const INITIAL_STATE = {
    arrow_visibility: true,
};

// Selectors
export const arrowVisibilitySelector = state => state.arrowVisibilityState.arrow_visibility;

// Action Types

export const ARROW_VISIBILITY_BOOL= "arrow_visibility/bool";


// Action Creators
export const arrowVisibilityCreator = (bool) => {
    return {
        type: ARROW_VISIBILITY_BOOL,
        payload: {
            bool,
        },
    };
}


// Reducer
export const ArrowVisibilityReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ARROW_VISIBILITY_BOOL:
            const newBool= action.payload.bool;

            return {
                arrow_visibility: newBool,
            }
        default:
            return state;
    }
};