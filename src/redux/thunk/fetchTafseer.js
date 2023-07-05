import axios from 'axios';
import {fetchTafseerRequest,fetchTafseerSuccess,fetchTafseerFailure } from '../actions';

export const fetchTafseer = (id) => {
    return async dispatch => {
      dispatch(fetchTafseerRequest());
      try {

        const response = await
         axios.get('https://api.quran.com/api/v4/verses/by_chapter/1?language=en&words=true');
        const tafseer = response.data.tafsirs;
        console.log(response.data)
        console.log('tafsir:'+tafseer)
        dispatch(fetchTafseerSuccess(tafseer));
      
      } catch (error) {
        dispatch(fetchTafseerFailure(error.message));
      }
    };
  
  };