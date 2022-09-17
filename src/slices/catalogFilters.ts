import {createSlice, PayloadAction} from '@reduxjs/toolkit';


const initialState: {sizes: string[], colors: string[]} = {
  sizes: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
  colors: ['white', 'cream', 'yellow', 'gold', 'orange', 'green', 'blue', 'black']
};

export const catalogFiltersSlice = createSlice({
  name: 'catalogFilters',
  initialState,
  reducers: {
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
    }
  }
});


export const {catalogFiltersSetSizes, catalogFiltersSetColors} = catalogFiltersSlice.actions;
export default catalogFiltersSlice.reducer;
