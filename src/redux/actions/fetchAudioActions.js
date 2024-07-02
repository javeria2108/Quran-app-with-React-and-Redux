export const FETCH_AUDIO_REQUEST = "FETCH_AUDIO_REQUEST";
export const FETCH_AUDIO_SUCCESS = "FETCH_AUDIO_SUCCESS";
export const FETCH_AUDIO_FAILURE = "FETCH_AUDIO_FAILURE";

export const fetchAudioRequest = () => ({ type: FETCH_AUDIO_REQUEST });
export const fetchAudioSuccess = (audio) => ({
  type: FETCH_AUDIO_SUCCESS,
  payload: audio,
});
export const fetchAudioFailure = (error) => ({
  type: FETCH_AUDIO_FAILURE,
  payload: error,
});
