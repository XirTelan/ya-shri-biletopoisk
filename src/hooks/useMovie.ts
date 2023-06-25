import { cartActions } from '@/redux/features/cartSlice';
import { Store } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const useMovie = (id: string) => {
  const amount = useSelector((state: Store) => state.cart[id]) || 0;
  const { increment, decrement, remove } = cartActions;
  const dispatcher = useDispatch();

  const incrementValue = () => {
    dispatcher(increment(id));
  };
  const decrementValue = () => {
    dispatcher(decrement(id));
  };
  const removeMovie = () => {
    dispatcher(remove(id));
  };

  return { incrementValue, decrementValue, removeMovie, amount };
};
export default useMovie;
