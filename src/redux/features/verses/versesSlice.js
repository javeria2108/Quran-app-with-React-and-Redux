import { createSlice } from '@reduxjs/toolkit';
import { versesApi } from './versesApi';

const versesSlice = createSlice({
  name: 'verses',
  initialState: { data: [], error: null, loading: false },
  reducers: {
    clearVerses: (state) => {
      state.data = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        versesApi.endpoints.fetchVersesByChapter.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        versesApi.endpoints.fetchVersesByChapter.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload.verses;
        }
      )
      .addMatcher(
        versesApi.endpoints.fetchVersesByChapter.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { clearVerses } = versesSlice.actions;
export default versesSlice.reducer;
