export const recitersListReducer = (state = [], action) => {
    switch(action.type) {
        case "FETCH_RECITERS_LIST_REQUEST":
            return state;
        case "FETCH_RECITERS_LIST_SUCCESS":
            return action.payload;
        case "FETCH_RECITERS_LIST_FAILURE":
            return state;
        default:
            return state;
    }
};
