'use client';

import { useGetMoviesQuery } from '@/redux/services/moviesApi';

import React from 'react';
import Movie from '../Movie/Movie';

const Movies = (movies: MovieProps[]) => {
  return (
    <>
     
    </>
  );
};

export default Movies;


export interface MovieProps {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
}
