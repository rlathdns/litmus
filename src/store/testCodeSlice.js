import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testCode : '',
};

const testCodeSlice = createSlice({
  name: 'testCode',
  initialState,
  reducers : {
    updateTestCode(state, action){
      state.testCode = action.payload;
    }
  }
});

export const { updateTestCode, } =testCodeSlice.actions;
export default testCodeSlice.reducer;
