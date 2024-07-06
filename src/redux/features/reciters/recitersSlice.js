import { createSlice } from '@reduxjs/toolkit';
import { recitersApi } from './recitersApi';

const recitersSlice = createSlice({
  name: 'reciters',
  initialState: { reciters: [], error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        recitersApi.endpoints.fetchRecitersList.matchPending,
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        recitersApi.endpoints.fetchRecitersList.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.reciters = action.payload.reciters;
        }
      )
      .addMatcher(
        recitersApi.endpoints.fetchRecitersList.matchRejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default recitersSlice.reducer;
