

const initialState = 5;

export const reciterIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_RECITER_ID':
            return action.payload
            
            default:
                return state;
    }
};
