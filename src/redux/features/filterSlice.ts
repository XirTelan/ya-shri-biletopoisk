import { createSlice } from '@reduxjs/toolkit';

interface FilterSlice {
  query: string;
  selectedGenre: { id: string; name: string };
  selectedCinema: { id: string; name: string };
}

const initialState: FilterSlice = {
  query: '',
  selectedGenre: { id: '', name: '' },
  selectedCinema: { id: '', name: '' },
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
