import { MovieProps } from '@/components/Movie/Movie';
import {
  useGetMoviesByCinemaQuery,
  useGetMoviesQuery,
} from '@/redux/services/moviesApi';
import { Store } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFilter = () => {
  const filter = useSelector((state: Store) => state.filter);
  const { data, isLoading } = useGetMoviesByCinemaQuery(
    filter.selectedCinema.id
  );
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    let moviesList = data;
    if (filter.query !== '') {
      moviesList = moviesList.filter((movie: MovieProps) =>
        movie.title.includes(filter.query)
      );
    }
    if (filter.selectedGenre.id !== '') {
      moviesList = moviesList.filter(
        (movie: MovieProps) => movie.genre === filter.selectedGenre.id
      );
    }
    setMovies(moviesList);
  }, [filter, data]);

  return { movies, isLoading };
};

export default useFilter;
