import { Store } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCartContent = () => {
  const cart = useSelector((state: Store) => state.cart);
  const [movies, setMovies] = useState<string[]>([]);
  useEffect(() => {
    const arr: string[] = [];
    for (const obj in cart) {
      arr.push(obj);
    }
    setMovies(arr);
  }, [cart]);

  return movies;
};

export default useCartContent;
