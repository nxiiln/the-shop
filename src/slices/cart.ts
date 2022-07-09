import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from '../store';


interface Product {
  id: string;
  image: string;
  description: string;
  price: number;
  status: boolean;
};

const initialState: Product[] = [];


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product[]>): void => {
      // state.push(action.payload);
    },
  }
});


export const {add} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer;
