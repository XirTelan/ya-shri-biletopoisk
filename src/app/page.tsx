import Image from 'next/image';
import styles from './page.module.css';
import Filter from '@/components/Filter/Filter';
import ReviewCard from '@/components/ReviewCard/ReviewCard';

export default function Home() {
  return (
    <>
      <div className={styles.columns}>
        <Filter />
        <div className={styles.filler}></div>
        <div className={styles.reviews}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </>
  );
}
