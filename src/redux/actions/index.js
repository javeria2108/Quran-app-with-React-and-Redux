export const FETCH_CHAPTERS_REQUEST = 'FETCH_CHAPTERS_REQUEST';
export const FETCH_CHAPTERS_SUCCESS = 'FETCH_CHAPTERS_SUCCESS';
export const FETCH_CHAPTERS_FAILURE = 'FETCH_CHAPTERS_FAILURE';
export const FETCH_VERSE_BY_CHAPTER='FETCH_VERSE_BY_CHAPTER';
export const FETCH_VERSE_SUCCESS = 'FETCH_VERSE_SUCCESS';
export const FETCH_VERSE_FAILURE = 'FETCH_VERSE_FAILURE';

export const CLEAR_VERSES = 'CLEAR_VERSES';
export const FETCH_TRANSLATION_REQUEST='FETCH_TRANSLATION_REQUEST';
export const FETCH_TRANSLATION_SUCCESS='FETCH_TRANSLATION_SUCCESS';
export const FETCH_TRANSLATION_FAILURE='FETCH_TRANSLATION_FAILURE';
export const FETCH_TAFSEER_REQUEST='FETCH_TAFSEER_REQUEST';
export const FETCH_TAFSEER_SUCCESS='FETCH_TAFSEER_SUCCESS';
export const FETCH_TAFSEER_FAILURE='FETCH_TAFSEER_FAILURE'

export const fetchChaptersRequest = () => ({
  type: FETCH_CHAPTERS_REQUEST
});

export const fetchChaptersSuccess = chapters => ({
  type: FETCH_CHAPTERS_SUCCESS,
  payload: chapters
});

export const fetchChaptersFailure = error => ({
  type: FETCH_CHAPTERS_FAILURE,
  payload: error
});
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

export const fetchTranslationRequest = () => ({
  type: FETCH_TRANSLATION_REQUEST
});

export const fetchTranslationSuccess = translation => ({
  type: FETCH_TRANSLATION_SUCCESS,
  payload: translation
});

export const fetchTranslationFailure = error => ({
  type: FETCH_TRANSLATION_FAILURE,
  payload: error
});
export const fetchTafseerRequest = () => ({
  type: FETCH_TAFSEER_REQUEST
});
export const fetchTafseerSuccess = (tafseer) => ({
  type: FETCH_TAFSEER_SUCCESS,
  payload: tafseer
});
export const fetchTafseerFailure = (error) => ({
  type: FETCH_TAFSEER_FAILURE,
  payload: error
});