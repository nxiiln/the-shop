import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../types/IProduct';


const initialState: IProduct[] = [];

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    wishListAdd: (state, action: PayloadAction<IProduct>): void => {
      if (!state.some(product => product.id === action.payload.id)) {
        state.push(action.payload);
      }
    },

    wishListRemove: (state, action: PayloadAction<IProduct>) => {
      return state.filter(product => product.id !== action.payload.id);
    },

    wishListProductSize: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].size = action.payload.size;
    },

    wishListProductColor: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].color = action.payload.color;
    }
  }
});


export const {
  wishListAdd,
  wishListRemove,
  wishListProductSize,
  wishListProductColor
} = wishListSlice.actions;

export default wishListSlice.reducer;
