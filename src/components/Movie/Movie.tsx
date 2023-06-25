'use client';

import Image from 'next/image';
import styles from './Movie.module.css';
import Link from 'next/link';
import { FunctionComponent, ReactNode, useState } from 'react';
import useMovie from '@/hooks/useMovie';
import Modal from '../Modal/Modal';
import { genresMap } from '@/data/genre';
import useModal from '@/hooks/useModal';
import Warning from '../Modal/Warning/Warning';
import { icons } from '@/data/icons';
import Actions from './Actions/Actions';

const Movie: FunctionComponent<Props> = ({ movie, isCart = false }) => {
  const { removeMovie } = useMovie(movie.id);

  const { isShow, changeState } = useModal();

  return (
    <div className={styles.card}>
      <Image
        className={styles.poster}
        src={movie.posterUrl}
        width={100}
        height={120}
        alt={''}
      ></Image>
      <div className={styles.description}>
        <div className="flex-grow">
          <Link href={`/films/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
          <div className={styles.genre}>
            {genresMap.get(movie.genre) || movie.genre}
          </div>
        </div>
        <Actions id={movie.id} isCart={isCart} changeState={changeState} />
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

export interface MovieProps {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
}
