import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAccount} from '../types/IAccount';
import {IAccounts} from '../types/IAccounts';
import {IPersonalInfo} from '../types/IMyPersonalInfo';


const initialState: IAccounts = {newEmail: '', accounts: []};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountSetNewEmail: (state, action: PayloadAction<string>): void => {
      state.newEmail = action.payload;
    },

    accountCreate: (state, action: PayloadAction<IAccount>): void => {
      state.accounts.push(action.payload);
    },

    accountChangeMyPersonalInfo: (state, action: PayloadAction<IPersonalInfo>): void => {
      const account = state.accounts[state.accounts.findIndex(
        (account: IAccount): boolean => account.isActive
      )];
      
      account.firstName = action.payload.firstName;
      account.lastName = action.payload.lastName;
      account.email = action.payload.email;
      account.password = action.payload.password;
      account.newsletterSubscription = action.payload.newsletterSubscription;
    },

    accountLogIn: (state, action: PayloadAction<number>): void => {
      state.accounts[action.payload].isActive = true;
    },

    accountLogOut: (state, action: PayloadAction<number>): void => {
      state.accounts[action.payload].isActive = false;
    }
  }
});


export const {
  accountSetNewEmail,
  accountCreate,
  accountChangeMyPersonalInfo,
  accountLogIn,
  accountLogOut
} = accountSlice.actions;

export default accountSlice.reducer;
