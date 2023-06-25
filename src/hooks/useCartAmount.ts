import { Store } from '@/redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCartCounter = () => {
  const cart = useSelector((state: Store) => state.cart);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (const id in cart) {
      sum += cart[id];
    }
    setAmount(() => sum);
  }, [cart]);

  return amount;
};
export default useCartCounter;
