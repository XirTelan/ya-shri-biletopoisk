import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<any, void>({
      query: () => `movies`,
    }),
    getMovieById: builder.query({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getMoviesByCinema: builder.query({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMoviesByCinemaQuery,
} = moviesApi;
