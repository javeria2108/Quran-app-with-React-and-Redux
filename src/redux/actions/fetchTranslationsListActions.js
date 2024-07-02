export const fetchTranslationsListRequest = () => {
    return {
      type: 'FETCH_TRANSLATIONS_LIST_REQUEST'
    };
  };
  
  export const fetchTranslationsListSuccess = translationsList => {
    return {
      type: 'FETCH_TRANSLATIONS_LIST_SUCCESS',
      payload: translationsList
    };
  };
  
  export const fetchTranslationsListFailure = error => {
    return {
      type: 'FETCH_TRANSLATIONS_LIST_FAILURE',
      payload: error
    };
  };