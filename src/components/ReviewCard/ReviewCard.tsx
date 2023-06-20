import Image from 'next/image';
import styles from './ReviewCard.module.css';

const ReviewCard = () => {
  return (
    <div className={styles.card}>
      <div className="flex">
        <Image
          src="/Rectangle 55.png"
          width={100}
          height={120}
          alt={''}
        ></Image>
        <div className={styles.description}>
          <div>
            <div>Title</div>
            <div>Genre</div>
          </div>
          <div className="flex">
            <button className="btn btn-mini"></button>
            <div className={styles.value}>0</div>
            <button className="btn btn-mini"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
