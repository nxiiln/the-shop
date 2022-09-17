import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import wishListReducer from './slices/wishList';
import productRatingReducer from './slices/productRating';
import quickViewReducer from './slices/quickView';
import accountReducer from './slices/account';
import checkoutReducer from './slices/checkout';
import catalogFiltersReducer from './slices/catalogFilters';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    productRating: productRatingReducer,
    quickView: quickViewReducer,
    account: accountReducer,
    checkout: checkoutReducer,
    catalogFIlters: catalogFiltersReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
