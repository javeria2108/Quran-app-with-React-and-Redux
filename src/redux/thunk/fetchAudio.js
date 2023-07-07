import axios from 'axios';
import { fetchAudioRequest, fetchAudioSuccess, fetchAudioFailure } from '../actions';


export const fetchAudioUrl = (id,reciterId) => {
    return async dispatch => {
      dispatch(fetchAudioRequest());
      try {

        const response = await
         axios.get(`https://api.quran.com/api/v4/chapter_recitations/${reciterId}/${id}`);
        console.log(response.data)
         const audio = response.data.audio_file.audio_url;
      
        dispatch(fetchAudioSuccess(audio));
      
      } catch (error) {
        dispatch(fetchAudioFailure(error.message));
      }
    };
  
  };