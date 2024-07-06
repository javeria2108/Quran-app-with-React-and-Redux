import { createSlice } from '@reduxjs/toolkit';
import { languagesApi } from './languagesApi';

const languagesSlice = createSlice({
  name: 'languages',
  initialState: { languages: [], error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        languagesApi.endpoints.fetchLanguages.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        languagesApi.endpoints.fetchLanguages.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.languages = action.payload.languages;
        }
      )
      .addMatcher(
        languagesApi.endpoints.fetchLanguages.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default languagesSlice.reducer;
