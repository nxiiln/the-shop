import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../IProduct";


const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>): void => {
      state.push(action.payload);
    },

    remove: (state, action: PayloadAction<IProduct>) => {
      return state.filter(product => product.id !== action.payload.id);
    },

    incrementQuantity: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (state[index].quantity > 1) state[index].quantity -= 1;
    }
  }
});


export const {add, remove, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
