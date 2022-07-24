import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../types/IProduct";


const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd: (state, action: PayloadAction<IProduct>): void => {
      if (!state.some(product => product.id === action.payload.id)) {
        state.push(action.payload);
      }
    },

    cartRemove: (state, action: PayloadAction<IProduct>) => {
      return state.filter(product => product.id !== action.payload.id);
    },

    quantityIncrement: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].quantity += 1;
    },

    quantityDecrement: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (state[index].quantity > 1) state[index].quantity -= 1;
    },

    cartProductSize: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].size = action.payload.size;
    },

    cartProductColor: (state, action: PayloadAction<IProduct>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].color = action.payload.color;
    }
  }
});


export const {
  cartAdd,
  cartRemove,
  quantityIncrement,
  quantityDecrement,
  cartProductSize,
  cartProductColor
} = cartSlice.actions;

export default cartSlice.reducer;
