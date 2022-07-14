import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from '../IProduct';


const initialState: IProduct[] = [];

export const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>): void => {
      state.push(action.payload);
    },

    remove: (state, action: PayloadAction<IProduct>) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
});


export const {add, remove} = wishListSlice.actions;
export default wishListSlice.reducer;
