import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ICheckout {
  step: number;
  step2Complete: boolean;
  step4Complete: boolean;
}

const initialState: ICheckout = {
  step: 1,
  step2Complete: false,
  step4Complete: false
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutSetStep: (state, action: PayloadAction<number>): void => {
      state.step = action.payload;
    },

    checkoutSetStep2Complete: (state, action: PayloadAction<boolean>): void => {
      state.step2Complete = action.payload;
    },

    checkoutSetStep4Complete: (state, action: PayloadAction<boolean>): void => {
      state.step4Complete = action.payload;
    }
  }
});


export const {checkoutSetStep, checkoutSetStep2Complete, checkoutSetStep4Complete} = checkoutSlice.actions;
export default checkoutSlice.reducer;
