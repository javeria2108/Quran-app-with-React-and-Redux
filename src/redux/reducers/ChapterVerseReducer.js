import { FETCH_VERSE_BY_CHAPTER,FETCH_VERSE_SUCCESS,FETCH_VERSE_FAILURE } from "../actions";
const verses = {
    loading: false,
    data: [],
    error: ''
  };
  
  const chapterVerseReducer = (state = verses, action) => {
    switch (action.type) {
      case FETCH_VERSE_BY_CHAPTER:
        return {
          ...state,
          loading: true
        };
      case FETCH_VERSE_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: ''
        };
      case FETCH_VERSE_FAILURE:
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
  
  export default chapterVerseReducer;
  