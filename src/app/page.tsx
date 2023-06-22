'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Filter from '@/components/Filter/Filter';
import Film from '@/components/Film/Film';

export default function Home() {
  return (
    <>
      <div className={styles.columns}>
        <Filter />
        <div className={styles.filler}></div>
        <div className={styles.reviews}>
          <Film id={'asdasd'} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
          <Film id={''} />
        </div>
      </div>
    </>
  );
}
