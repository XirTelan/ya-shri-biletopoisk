'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Filter from '@/components/Filter/Filter';
import Movie from '@/components/Movie/Movie';
import { useGetMoviesQuery } from '@/redux/services/moviesApi';
import Movies, { MovieProps } from '@/components/Movies/Movies';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@/redux/store';

export default function Home() {
  const filter = useSelector((state: Store) => state.filter);
  const { data, isLoading, error } = useGetMoviesQuery();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (isLoading) return;

    const loadData = async () => {
      const data = await fetch(
        `http://localhost:3001/movies?cinemaId=${filter.selectedCinema}`
      );
    };
    
    setMovies(data);
    if (filter.query !== '') {
      setMovies(
        data.filter((movie: MovieProps) => movie.title.includes(filter.query))
      );
    }
  }, [filter, data, isLoading]);

  console.log('data', data);
  return (
    <>
      <div className={styles.columns}>
        <Filter />
        <div className={styles.filler}></div>
        <div className={styles.movies}>
          {movies.map((movie: MovieProps) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
