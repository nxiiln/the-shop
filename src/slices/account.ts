import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAccount} from '../types/IAccount';

interface IMyPersonalInfo {
  isActive?: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  newsletterSubscription?: boolean;
}

const initialState: IAccount[] = [];

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountCreate: (state, action: PayloadAction<IAccount>): void => {
      state.push(action.payload);
    },

    accountChangeMyPersonalInfo: (state, action: PayloadAction<IMyPersonalInfo>): void => {
      const account = state[state.findIndex(
        (account: IAccount): boolean | undefined => account?.isActive
      )];
      
      account.firstName = action.payload.firstName;
      account.lastName = action.payload.lastName;
      account.email = action.payload.email;
      account.password = action.payload.password;
      account.newsletterSubscription = action.payload.newsletterSubscription;
    }
  }
});


export const {accountCreate, accountChangeMyPersonalInfo} = accountSlice.actions;
export default accountSlice.reducer;
