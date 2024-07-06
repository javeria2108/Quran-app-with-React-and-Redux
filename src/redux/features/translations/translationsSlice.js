import { createSlice } from '@reduxjs/toolkit';
import { translationsApi } from './translationsApi';

const translationsSlice = createSlice({
  name: 'translations',
  initialState: { data: [], error: null, loading: false, translationsList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        translationsApi.endpoints.fetchTranslation.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        translationsApi.endpoints.fetchTranslation.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.data = action.payload.translations;
        }
      )
      .addMatcher(
        translationsApi.endpoints.fetchTranslation.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      )
      .addMatcher(
        translationsApi.endpoints.fetchTranslationsList.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        translationsApi.endpoints.fetchTranslationsList.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.translationsList = action.payload.translations;
        }
      )
      .addMatcher(
        translationsApi.endpoints.fetchTranslationsList.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default translationsSlice.reducer;
