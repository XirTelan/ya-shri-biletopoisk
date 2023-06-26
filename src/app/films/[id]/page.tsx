'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Reviews from '@/components/Reviews/Reviews';
import { useGetMovieByIdQuery } from '@/redux/services/moviesApi';
import { useParams } from 'next/navigation';
import { genresMap } from '@/data/genre';
import Actions from '@/components/Movie/Actions/Actions';
import Loader from '@/components/Loader/Loader';

const Movie = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetMovieByIdQuery(id);

  if (isLoading) return <Loader />;
  if (error) return <div>error</div>;


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className="flex width-full">
          <Image
            src={data.posterUrl}
            alt={''}
            width={400}
            height={500}
            style={{ objectFit: 'cover' }}
          ></Image>
          <div className={styles.fields}>
            <div className={styles.header}>
              <h2 className={styles.title}>{data.title}</h2>
              <Actions id={data.id} isCart={false} />
            </div>
            <div className={styles.field}>
              Жанр:<span>{genresMap.get(data.genre)}</span>
            </div>
            <div className={styles.field}>
              Год выпуска:<span>{data.releaseYear}</span>
            </div>
            <div className={styles.field}>
              Рейтинг:<span>{data.rating}</span>
            </div>
            <div className={styles.field}>
              Режиссер:<span>{data.director}</span>
            </div>
            <div>
              <div className={styles.field}>Описание</div>
              <div className={styles.description}>{data.description}</div>
            </div>
          </div>
        </div>
      </div>
      <Reviews id={data.id} />
    </div>
  );
};
export default Movie;

interface Props {
  id: string;
  title: string;
}
