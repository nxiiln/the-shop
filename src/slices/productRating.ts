import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProductRating} from '../types/IProductRating';


const initialState: IProductRating[] = [];

export const productRatingSlice = createSlice({
  name: 'productRating',
  initialState,
  reducers: {
    productRatingAdd: (state, action: PayloadAction<IProductRating>) => {
      state.push(action.payload);
    }
  }
});


export const {productRatingAdd} = productRatingSlice.actions;
export default productRatingSlice.reducer;
