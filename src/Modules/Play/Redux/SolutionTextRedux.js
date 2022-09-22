// Initial State
const INITIAL_STATE = {
    solution_text: null,
};

// Selectors
export const solutionTextSelector = state => state.solutionTextState.solution_text;

// Action Types

export const SOLUTION_TEXT= "coordinate/solution_text";


// Action Creators
export const solutionTextCreator = (text) => {
    return {
        type: SOLUTION_TEXT,
        payload: {
            text,
        },
    };
}


// Reducer
export const solutionTextReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SOLUTION_TEXT:
            const newText= action.payload.text;

            return {
                solution_text: newText,
            }
        default:
            return state;
    }
};