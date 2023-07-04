import { FETCH_CHAPTERS_REQUEST, FETCH_CHAPTERS_SUCCESS, FETCH_CHAPTERS_FAILURE } from '../actions';

const chapters = {
  loading: false,
  data: [],
  error: ''
};

const chapterReducer = (state = chapters, action) => {
  switch (action.type) {
    case FETCH_CHAPTERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_CHAPTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      };
    case FETCH_CHAPTERS_FAILURE:
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

export default chapterReducer;
