import axios from 'axios';
import { fetchChaptersSuccess,fetchChaptersFailure,fetchChaptersRequest } from '../actions';

export const fetchChapters = () => {
    return async dispatch => {
      dispatch(fetchChaptersRequest());
      try {
        const response = await axios.get('https://api.quran.com/api/v4/chapters?language=en');
        const chapters = response.data.chapters;
        dispatch(fetchChaptersSuccess(chapters));
      
      } catch (error) {
        dispatch(fetchChaptersFailure(error.message));
      }
    };
  
  };