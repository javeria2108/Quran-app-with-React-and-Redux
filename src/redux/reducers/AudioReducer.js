import { FETCH_AUDIO_REQUEST, FETCH_AUDIO_SUCCESS, FETCH_AUDIO_FAILURE } from '../actions';

const initialState = {
  loading: false,
  audioUrl: '',
  error: null,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUDIO_REQUEST:
      return { ...state, loading: true };
    case FETCH_AUDIO_SUCCESS:
      return { ...state, loading: false, audioUrl: action.payload };
    case FETCH_AUDIO_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default audioReducer;