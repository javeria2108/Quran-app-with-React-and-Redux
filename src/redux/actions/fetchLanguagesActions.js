export const FETCH_LANGUAGES_REQUEST = "FETCH_LANGUAGES_REQUEST";
export const FETCH_LANGUAGES_SUCCESS = "FETCH_LANGUAGES_SUCCESS";
export const FETCH_LANGUAGES_FAILURE = "FETCH_LANGUAGES_FAILURE";

export const fetchLanguagesRequest = () => ({
  type: FETCH_LANGUAGES_REQUEST,
});

export const fetchLanguagesSuccess = (languages) => ({
  type: FETCH_LANGUAGES_SUCCESS,
  payload: languages,
});

export const fetchLanguagesFailure = (error) => ({
  type: FETCH_LANGUAGES_FAILURE,
  payload: error,
});
