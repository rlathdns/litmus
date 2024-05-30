// src/store/neverSeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const neverSeeSlice = createSlice({
  name: 'neverSee',
  initialState: {
    isNeverSee: false,
  },
  reducers: {
    toggleNeverSee(state) {
      state.isNeverSee = !state.isNeverSee;
    },
  },
});

export const { toggleNeverSee } = neverSeeSlice.actions;
export default neverSeeSlice.reducer;
