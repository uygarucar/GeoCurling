// Initial State
const INITIAL_STATE = {
    target_text: null,
};

// Selectors
export const targetTextSelector = state => state.targetTextState.target_text;

// Action Types

export const TARGET_TEXT= "coordinate/target_text";


// Action Creators
export const targetTextCreator = (text) => {
    return {
        type: TARGET_TEXT,
        payload: {
            text,
        },
    };
}


// Reducer
export const targetTextReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TARGET_TEXT:
            const newText= action.payload.text;

            return {
                target_text: newText,
            }
        default:
            return state;
    }
};