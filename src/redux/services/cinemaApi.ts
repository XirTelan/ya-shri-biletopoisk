import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cinemasApi = createApi({
  reducerPath: 'cinema',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getCinemas: builder.query<any, void>({
      query: () => `cinemas`,
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
