import axios from 'axios';
import { fetchLanguagesRequest, fetchLanguagesSuccess, fetchLanguagesFailure } from '../actions';

export const fetchLanguages = () => {
    return async dispatch => {
        dispatch(fetchLanguagesRequest());
        try {
  
          const response = await
           axios.get('https://api.quran.com/api/v4/resources/languages');
       
          const languages = response.data.languages;
         
          dispatch(fetchLanguagesSuccess(languages));
        
        } catch (error) {
          console.error('Error in API request:', err);
          dispatch(fetchLanguagesFailure(error.message));
        }
      };
};
