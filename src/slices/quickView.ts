import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState: boolean = false;

export const quickViewSlice = createSlice({
  name: 'quickView',
  initialState,
  reducers: {
    quickViewChange: (state, action: PayloadAction<boolean>): boolean => action.payload
  }
});


export const {quickViewChange} = quickViewSlice.actions;
export default quickViewSlice.reducer;
