import axios from 'axios';
import { fetchVerseSuccess,fetchVersesFailure,fetchVersesByChapter } from '../actions';

export const fetchChapterVerses = (id) => {
    return async dispatch => {
      dispatch(fetchVersesByChapter());
      try {

        const response = await
         axios.get(`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`);
        const verses = response.data.verses;
        dispatch(fetchVerseSuccess(verses));
      
      } catch (error) {
        dispatch(fetchVersesFailure(error.message));
      }
    };
  
  };