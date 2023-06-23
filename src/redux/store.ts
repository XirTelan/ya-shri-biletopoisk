import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;
