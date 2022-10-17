import {configureStore, MiddlewareAPI, Dispatch, AnyAction} from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import wishListReducer from './slices/wishList';
import productRatingReducer from './slices/productRating';
import quickViewReducer from './slices/quickView';
import accountReducer from './slices/account';
import checkoutReducer from './slices/checkout';
import catalogFiltersReducer from './slices/catalogFilters';


const localStorageMiddleware =
  (store: MiddlewareAPI<Dispatch<AnyAction>>) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction): AnyAction => {
    const result: AnyAction = next(action);
    localStorage.setItem('reduxStore', JSON.stringify(store.getState()));
    return result;
  }

const preloadedState = (): void | any => {
  const reduxStore: string | null = localStorage.getItem('reduxStore');
  if (reduxStore) return JSON.parse(reduxStore);
}


export const store = configureStore({
  preloadedState: preloadedState(),
  reducer: {
    cart: cartReducer,
    wishList: wishListReducer,
    productRating: productRatingReducer,
    quickView: quickViewReducer,
    account: accountReducer,
    checkout: checkoutReducer,
    catalogFIlters: catalogFiltersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
