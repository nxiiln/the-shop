import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../IProduct';


const initialState: IProduct[] = [];

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    wishListAdd: (state, action: PayloadAction<IProduct>): void => {
      if (state.findIndex(product => product.id === action.payload.id) === -1) {
        state.push(action.payload);
      }
    },

    wishListRemove: (state, action: PayloadAction<IProduct>) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
});


export const {wishListAdd, wishListRemove} = wishListSlice.actions;
export default wishListSlice.reducer;
