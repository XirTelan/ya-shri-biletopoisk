import { createSlice } from '@reduxjs/toolkit';

interface FilterSlice {
  query: string;
  selectedGenre: string;
  selectedCinema: string;
}

const initialState: FilterSlice = {
  query: '',
  selectedGenre: '',
  selectedCinema: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setGenre: (state, { payload }) => {
      state.selectedGenre = payload;
    },
    setCinema: (state, { payload }) => {
      state.selectedCinema = payload;
    },
    reset: () => initialState,
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
