export const FETCH_TRANSLATION_REQUEST='FETCH_TRANSLATION_REQUEST';
export const FETCH_TRANSLATION_SUCCESS='FETCH_TRANSLATION_SUCCESS';
export const FETCH_TRANSLATION_FAILURE='FETCH_TRANSLATION_FAILURE';

export const fetchTranslationRequest = () => ({
    type: FETCH_TRANSLATION_REQUEST
  });
  
  export const fetchTranslationSuccess = translation => ({
    type: FETCH_TRANSLATION_SUCCESS,
    payload: translation
  });
  
  export const fetchTranslationFailure = error => ({
    type: FETCH_TRANSLATION_FAILURE,
    payload: error
  });