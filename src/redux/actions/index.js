export const FETCH_CHAPTERS_REQUEST = 'FETCH_CHAPTERS_REQUEST';
export const FETCH_CHAPTERS_SUCCESS = 'FETCH_CHAPTERS_SUCCESS';
export const FETCH_CHAPTERS_FAILURE = 'FETCH_CHAPTERS_FAILURE';
export const FETCH_VERSE_BY_CHAPTER='FETCH_VERSE_BY_CHAPTER';
export const FETCH_VERSE_SUCCESS = 'FETCH_VERSE_SUCCESS';
export const FETCH_VERSE_FAILURE = 'FETCH_VERSE_FAILURE';
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