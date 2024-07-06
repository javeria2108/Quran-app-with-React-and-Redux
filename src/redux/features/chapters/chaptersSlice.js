import { createSlice } from '@reduxjs/toolkit';
import { chaptersApi } from './chaptersApi';

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState: { data: [], error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        chaptersApi.endpoints.fetchChapters.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        chaptersApi.endpoints.fetchChapters.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload.chapters;
        }
      )
      .addMatcher(
        chaptersApi.endpoints.fetchChapters.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default chaptersSlice.reducer;
