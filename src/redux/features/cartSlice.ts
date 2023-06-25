import { createSlice } from '@reduxjs/toolkit';

interface CartSlice {
  [k: string]: number;
}

const MAX_COUNT = 30;

const initialState: CartSlice = {};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || 0;
      if (count === MAX_COUNT) return;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];
      if (!count) return;
      if (count === 1) {
        delete state[payload];
        return;
      }
      state[payload] = count - 1;
    },
    remove: (state, { payload }) => {
      if (state[payload]) delete state[payload];
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
