'use client';

import Image from 'next/image';
import styles from './Movie.module.css';
import Link from 'next/link';
import { FunctionComponent, ReactNode, useState } from 'react';
import useMovie from '@/hooks/useMovie';
import Modal from '../Modal/Modal';
import { genresMap } from '@/data/genre';
import { MovieProps } from '../Movies/Movies';
import useModal from '@/hooks/useModal';
import Warning from '../Modal/Warning/Warning';
import { icons } from '@/data/icons';

const Movie: FunctionComponent<Props> = ({ movie, isCart = false }) => {
  const { incrementValue, decrementValue, removeMovie, amount } = useMovie(
    movie.id
  );

  const { isShow, changeState } = useModal();

  return (
    <div className={styles.card}>
      <Image className={styles.poster} src={movie.posterUrl} width={100} height={120} alt={''}></Image>
      <div className={styles.description}>
        <div className="flex-grow">
          <Link href={`/films/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
          <div className={styles.genre}>
            {genresMap.get(movie.genre) || movie.genre}
          </div>
        </div>
        <div className="flex">
          <button
            className="btn btn-mini btn-mini__orange"
            onClick={() => {
              if (isCart && amount === 1) changeState();
              else {
                decrementValue();
              }
            }}
          >
            <svg
              width="10"
              height="2"
              viewBox="0 0 10 2"
              fill="none"
              fillRule="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 1C9.5 1.09946 9.46049 1.19484 9.39017 1.26517C9.31984 1.33549 9.22446 1.375 9.125 1.375H0.875C0.775544 1.375 0.680161 1.33549 0.609835 1.26517C0.539509 1.19484 0.5 1.09946 0.5 1C0.5 0.900544 0.539509 0.805161 0.609835 0.734835C0.680161 0.664509 0.775544 0.625 0.875 0.625H9.125C9.22446 0.625 9.31984 0.664509 9.39017 0.734835C9.46049 0.805161 9.5 0.900544 9.5 1Z"
                fill="white"
              />
            </svg>
          </button>
          <div className={styles.value}>{amount}</div>
          <button
            className="btn btn-mini btn-mini__orange"
            onClick={() => incrementValue()}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              fillRule="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 5C9.5 5.09946 9.46049 5.19484 9.39017 5.26517C9.31984 5.33549 9.22446 5.375 9.125 5.375H5.375V9.125C5.375 9.22446 5.33549 9.31984 5.26517 9.39017C5.19484 9.46049 5.09946 9.5 5 9.5C4.90054 9.5 4.80516 9.46049 4.73484 9.39017C4.66451 9.31984 4.625 9.22446 4.625 9.125V5.375H0.875C0.775544 5.375 0.680161 5.33549 0.609835 5.26517C0.539509 5.19484 0.5 5.09946 0.5 5C0.5 4.90054 0.539509 4.80516 0.609835 4.73484C0.680161 4.66451 0.775544 4.625 0.875 4.625H4.625V0.875C4.625 0.775544 4.66451 0.680161 4.73484 0.609835C4.80516 0.539509 4.90054 0.5 5 0.5C5.09946 0.5 5.19484 0.539509 5.26517 0.609835C5.33549 0.680161 5.375 0.775544 5.375 0.875V4.625H9.125C9.22446 4.625 9.31984 4.66451 9.39017 4.73484C9.46049 4.80516 9.5 4.90054 9.5 5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {isCart && (
          <button
            className="btn-mini btn-mini__transparent"
            onClick={() => changeState()}
          >
            {icons.close}
          </button>
        )}
        {isShow && (
          <Modal close={changeState}>
            {<Warning action={removeMovie} disable={changeState} />}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Movie;

interface Props {
  movie: MovieProps;
  isCart?: boolean;
}
