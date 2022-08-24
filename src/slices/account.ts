import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TAccount} from '../types/TAccount';
import {IAccounts} from '../types/IAccounts';
import {IPersonalInfo} from '../types/IPersonalInfo';


const initialState: IAccounts = {newEmail: '', accounts: []};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    accountSetNewEmail: (state, action: PayloadAction<string>): void => {
      state.newEmail = action.payload;
    },

    accountCreate: (state, action: PayloadAction<TAccount>): void => {
      state.accounts.push(action.payload);
    },

    accountChangePersonalInfo: (state, action: PayloadAction<IPersonalInfo>): void => {
      const account = state.accounts[state.accounts.findIndex(
        (account: TAccount): boolean => account.isActive
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
  accountChangePersonalInfo,
  accountLogIn,
  accountLogOut
} = accountSlice.actions;

export default accountSlice.reducer;
