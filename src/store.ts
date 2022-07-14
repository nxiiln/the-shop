import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import wishListReducer from './slices/wishList';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
