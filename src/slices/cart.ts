import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  triangle?: string;
  color: string;
  size: string;
  quantity: number;
}

const initialState: Product[] = [];


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>): void => {
      state.push(action.payload);
    },

    remove: (state, action: PayloadAction<Product>) => {
      return state.filter(product => product.id !== action.payload.id);
    },

    incrementQuantity: (state, action: PayloadAction<Product>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      state[index].quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<Product>): void => {
      const index = state.findIndex(product => product.id === action.payload.id);
      if (state[index].quantity > 1) state[index].quantity -= 1;
    }
  }
});


export const {add, remove, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
