import { FETCH_TRANSLATION_REQUEST,FETCH_TRANSLATION_SUCCESS,FETCH_TRANSLATION_FAILURE } from "../actions";
const translation = {
    loading: false,
    data: [],
    error: ''
  };
  
  const translationReducer = (state = translation, action) => {
    switch (action.type) {
      case FETCH_TRANSLATION_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_TRANSLATION_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        };
      case FETCH_TRANSLATION_FAILURE:
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
  
  export default translationReducer;
  