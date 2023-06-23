'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { FunctionComponent } from 'react';
import CartIcon from './CartIcon/CartIcon';

const Header: FunctionComponent = () => {
  return (
    <header className={styles.container}>
      <Link href={'/'} className={styles.header}>
        Билетопоиск
      </Link>
      <CartIcon />
    </header>
  );
};
export default Header;
