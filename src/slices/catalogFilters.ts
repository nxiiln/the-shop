import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface IInitialState {
  category: string;
  sizes: string[];
  colors: string[];
}

const initialState: IInitialState = {
  category: 'all',
  sizes: [],
  colors: []
};

export const catalogFiltersSlice = createSlice({
  name: 'catalogFilters',
  initialState,
  reducers: {
    catalogFiltersSetCategory: (state, action: PayloadAction<string>): void => {
      state.category = action.payload;
    },

    catalogFiltersSetSizes: (state, action: PayloadAction<string>): void => {
      !state.sizes.includes(action.payload) ?
        state.sizes.push(action.payload) :
        state.sizes = state.sizes
          .filter((size: string): boolean => size !== action.payload);
    },

    catalogFiltersSetColors: (state, action: PayloadAction<string>): void => {
      !state.colors.includes(action.payload) ?
        state.colors.push(action.payload) :
        state.colors = state.colors
          .filter((color: string): boolean => color !== action.payload);
    },

    catalogFiltersReset: (state) => state = initialState, 
  }
});


export const {
  catalogFiltersSetCategory,
  catalogFiltersSetSizes,
  catalogFiltersSetColors,
  catalogFiltersReset
} = catalogFiltersSlice.actions;
export default catalogFiltersSlice.reducer;
