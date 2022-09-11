// Initial State
const INITIAL_STATE = {
    totalScore: 0,
};

// Selectors
export const totalScoreSelector = state => state.totalScoreState.totalScore;

// Action Types

export const TOTAL_SCORE= "score/totalScore";


// Action Creators
export const totalScoreCreator = (score) => {
    return {
        type: TOTAL_SCORE,
        payload: {
            score,
        },
    };
}


// Reducer
export const totalScoreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOTAL_SCORE:
            const newTotalScore = action.payload.score;

            return {
                totalScore: newTotalScore,
            }
        default:
            return state;
    }
};