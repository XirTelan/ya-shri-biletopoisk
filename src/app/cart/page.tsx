'use client';
import Movie, { MovieProps } from '@/components/Movie/Movie';
import useCartContent from '@/hooks/useCartContent';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from './page.module.css';
import { useGetMoviesQuery } from '@/redux/services/moviesApi';
import Loader from '@/components/Loader/Loader';
import useCartCounter from '@/hooks/useCartAmount';

const Cart: FunctionComponent = () => {
  const moviesInCart = useCartContent();
  const amount = useCartCounter();
  const { data, isLoading, error } = useGetMoviesQuery();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    if (isLoading || moviesInCart.length === 0) return;
    const keys = Object.values(moviesInCart);
    setMovies(data.filter((movie: MovieProps) => keys.includes(movie.id)));
  }, [data, moviesInCart, isLoading]);
  if (isLoading) return <Loader />;
  if (error) return <div>Error</div>;
  if (moviesInCart.length === 0)
    return <div className={styles.empty}>Корзина пуста</div>;

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.container}>
          {movies.length > 0 &&
            movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} isCart={true} />;
            })}
        </div>
        <div className={styles.filler}></div>
        <div className={styles.summary}>
          <div>Итого билетов:</div>
          <div>{amount}</div>
        </div>
      </div>
    </>
  );
};
export default Cart;
