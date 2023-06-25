'use client';
import Movie from '@/components/Movie/Movie';
import useCartContent from '@/hooks/useCartContent';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from './page.module.css';
import { useGetMoviesQuery } from '@/redux/services/moviesApi';
import { MovieProps } from '@/components/Movies/Movies';

const Cart: FunctionComponent = () => {
  const moviesInCart = useCartContent();
  const { data, isLoading, error } = useGetMoviesQuery();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    if (isLoading || moviesInCart.length === 0) return;
    const keys = Object.values(moviesInCart);
    setMovies(data.filter((movie: MovieProps) => keys.includes(movie.id)));
  }, [data, moviesInCart, isLoading]);

  if (error) return <div>Error</div>;
  if (moviesInCart.length === 0) return <div>Корзина пуста</div>;
  console.log(movies);
  return (
    <>
      <div className={styles.container}>
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} isCart={true} />;
          })}
      </div>
    </>
  );
};
export default Cart;
