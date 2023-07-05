import { FETCH_TAFSEER_SUCCESS,FETCH_TAFSEER_REQUEST,FETCH_TAFSEER_FAILURE } from "../actions";
const tafseer = {
    loading: false,
    data: [],
    error: ''
  };
  
  const tafseerReducer = (state = tafseer, action) => {
    switch (action.type) {
      case FETCH_TAFSEER_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_TAFSEER_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        };
      case FETCH_TAFSEER_FAILURE:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload
        };
       
      default:
        return state;
    }
  };
  
  export default tafseerReducer;
  