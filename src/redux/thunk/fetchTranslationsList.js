import axios from 'axios';
import { fetchTranslationsListRequest, fetchTranslationsListSuccess, fetchTranslationsListFailure } from '../actions';

export const fetchTranslationsList = () => {
  return async dispatch => {
    dispatch(fetchTranslationsListRequest());

    try {
      const response = await axios.get('https://api.quran.com/api/v4/resources/translations?language=ur');
      const translationsList = response.data.translations;
      dispatch(fetchTranslationsListSuccess(translationsList));
    } catch (error) {
      dispatch(fetchTranslationsListFailure(error.message));
    }
  };
};
