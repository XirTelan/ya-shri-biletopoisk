import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { cartReducer } from './features/cartSlice';
import { moviesApi } from './services/moviesApi';
import { reviewsApi } from './services/reviewsApi';
import { cinemasApi } from './services/cinemaApi';
import { filterReducer } from './features/filterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware,
      reviewsApi.middleware,
      cinemasApi.middleware
    ),
});

export type Store = ReturnType<typeof store.getState>;
