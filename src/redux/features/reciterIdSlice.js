import { createSlice } from '@reduxjs/toolkit';

const initialState = 5;

const reciterIdSlice = createSlice({
  name: 'reciterId',
  initialState,
  reducers: {
    setReciterId: (state, action) => action.payload,
  },
});

export const { setReciterId } = reciterIdSlice.actions;
export default reciterIdSlice.reducer;
