export const FETCH_VERSE_BY_CHAPTER='FETCH_VERSE_BY_CHAPTER';
export const FETCH_VERSE_SUCCESS = 'FETCH_VERSE_SUCCESS';
export const FETCH_VERSE_FAILURE = 'FETCH_VERSE_FAILURE';
export const CLEAR_VERSES = 'CLEAR_VERSES';

export const fetchVersesByChapter=()=>({
    type: FETCH_VERSE_BY_CHAPTER
  })
  export const fetchVerseSuccess=verses=>({
    type:FETCH_VERSE_SUCCESS,
    payload:verses
  
  })
  export const fetchVersesFailure = error => ({
    type: FETCH_VERSE_FAILURE,
    payload: error
  });

  export const clearVerses = () => ({
    type: CLEAR_VERSES
  });
  