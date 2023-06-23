import Image from 'next/image';
import styles from './page.module.css';
import Filter from '@/components/Filter/Filter';
import Movie from '@/components/Movie/Movie';

export default function Home() {
  return (
    <>
      <div className={styles.columns}>
        <Filter />
        <div className={styles.filler}></div>
        <div className={styles.movies}>
          <Movie id={'asdasd'} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
          <Movie id={''} />
        </div>
      </div>
    </>
  );
}
