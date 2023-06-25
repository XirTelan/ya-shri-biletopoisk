'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Filter from '@/components/Filter/Filter';
import Movie, { MovieProps } from '@/components/Movie/Movie';
import useFilter from '@/hooks/useFilter';
import { useGetMoviesQuery } from '@/redux/services/moviesApi';

export default function Home() {
  const { data } = useGetMoviesQuery();
  const movies = useFilter();

  return (
    <>
      <div className={styles.columns}>
        <Filter />
        <div className={styles.filler}></div>
        <div className={styles.movies}>
          {movies.length === 0 && <div>Загружаем...</div>}
          {movies.length > 0 &&
            movies.map((movie: MovieProps) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </>
  );
}
