import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from '../store';


interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  triangle?: string;
}

const initialState: Product[] = [];


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>): void => {
      state.push(action.payload);
    },

    remove: (state, action: PayloadAction<number>): void => {
      state.splice(action.payload, 1);
    }
  }
});


export const {add} = cartSlice.actions;
export const {remove} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
