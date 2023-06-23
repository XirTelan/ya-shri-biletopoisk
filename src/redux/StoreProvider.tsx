'use client';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { FunctionComponent, ReactNode } from 'react';

const StoreProvider: FunctionComponent<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;

interface Props {
  children?: ReactNode;
}
