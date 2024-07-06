import { createSlice } from '@reduxjs/toolkit';

const initialState = 131;

const translationIdSlice = createSlice({
  name: 'translationId',
  initialState,
  reducers: {
    setTranslationId: (state, action) => action.payload,
  },
});

export const { setTranslationId } = translationIdSlice.actions;
export default translationIdSlice.reducer;
