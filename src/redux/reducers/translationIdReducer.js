import { SET_TRANSLATION_ID } from '../actions';

const initialState = 131;

export const idReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TRANSLATION_ID:
            return action.payload
            
            default:
                return state;
    }
};
