import axios from 'axios';
import { fetchRecitersListFailure, fetchRecitersListRequest, fetchRecitersListSuccess } from '../actions';

export const fetchRecitersList = () => {
  return async (dispatch) => {
    dispatch(fetchRecitersListRequest());
    try {
      const response = await axios.get('https://api.quran.com/api/v4/resources/chapter_reciters?language=en');
      const reciters = response.data.reciters;
      dispatch(fetchRecitersListSuccess(reciters));
    } catch (error) {
      console.error('Error fetching reciters:', error.message);
      dispatch(fetchRecitersListFailure('Failed to fetch reciters. Please try again later.'));
    }
  };
};
