

const initialState = {
    loading: false,
    translationsList: [],
    error: ''
  };
  
  const translationsListReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_TRANSLATIONS_LIST_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'FETCH_TRANSLATIONS_LIST_SUCCESS':
        return {
          loading: false,
          translationsList: action.payload,
          error: ''
        };
      case 'FETCH_TRANSLATIONS_LIST_FAILURE':
        return {
          loading: false,
          translationsList: [],
          error: action.payload
        };
      default:
        return state;
    };
  };
  
  export default translationsListReducer;
  