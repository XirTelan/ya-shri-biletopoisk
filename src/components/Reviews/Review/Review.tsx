import React from 'react';
import styles from './Review.module.css';
import { icons } from '@/data/icons';

const Review = ({ id, name, text, rating }: Review) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>{icons.img}</div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.name}>{name}</div>
          <div>
            Оценка: <span className={styles.rating}>{rating}</span>
          </div>
        </div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Review;

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}
