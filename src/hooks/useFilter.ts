import { MovieProps } from '@/components/Movie/Movie';
import { Store } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useFilter = () => {
  const filter = useSelector((state: Store) => state.filter);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMovies([]);
    let moviesList: MovieProps[] = [];
    let query;
    const loadData = async (query: string) => {
      setIsLoading(true);
      const data = await fetch(query);
      moviesList = await data.json();
      if (moviesList.length === 0) return;
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
      setIsLoading(false);
      setMovies(moviesList);
    };

    if (filter.selectedCinema.id !== '') {
      query = `http://localhost:3001/api/movies?cinemaId=${filter.selectedCinema.id}`;
    } else {
      query = `http://localhost:3001/api/movies`;
    }
    loadData(query);
  }, [filter]);

  return { movies, isLoading };
};

export default useFilter;
