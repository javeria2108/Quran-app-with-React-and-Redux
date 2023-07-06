import {FETCH_LANGUAGES_REQUEST,FETCH_LANGUAGES_SUCCESS,FETCH_LANGUAGES_FAILURE } from "../actions";

const initialState = {
  loading: false,
  languages: [],
  error: '',
};

const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LANGUAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        languages: action.payload,
        error: '',
      };
    case FETCH_LANGUAGES_FAILURE:
      return {
        ...state,
        loading: false,
        languages: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default languagesReducer;
