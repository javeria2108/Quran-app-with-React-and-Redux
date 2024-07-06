import { createSlice } from '@reduxjs/toolkit';
import { audioApi } from './audioApi';

const audioSlice = createSlice({
  name: 'audio',
  initialState: { audioUrl: '', error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        audioApi.endpoints.fetchAudio.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        audioApi.endpoints.fetchAudio.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.audioUrl = action.payload.audio_file.audio_url;
        }
      )
      .addMatcher(
        audioApi.endpoints.fetchAudio.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default audioSlice.reducer;
