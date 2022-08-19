import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAccount} from '../types/IAccount';


const initialState: IAccount[] = [];

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountChange: (state, action: PayloadAction<IAccount>): void => {
      state.push(action.payload);
    }
  }
});


export const {accountChange} = accountSlice.actions;
export default accountSlice.reducer;
