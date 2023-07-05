import axios from 'axios';
import { fetchTranslationFailure,fetchTranslationRequest,fetchTranslationSuccess } from '../actions';

export const fetchTranslation = (id) => {
    return async dispatch => {
      dispatch(fetchTranslationRequest());
      try {

        const response = await
         axios.get(`https://api.quran.com/api/v4/quran/translations/131?chapter_number=${id}`);
        const translation = response.data.translations;
        dispatch(fetchTranslationSuccess(translation));
      
      } catch (error) {
        dispatch(fetchTranslationFailure(error.message));
      }
    };
  
  };