'use client';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../Select/Select';
import styles from './Filter.module.css';
import Input from './Input/Input';
import { Store } from '@/redux/store';
import { filterActions } from '@/redux/features/filterSlice';
import { useGetCinemasQuery } from '@/redux/services/cinemaApi';
import { genresMap } from '@/data/genre';

const Filter = () => {
  const state = useSelector((state: Store) => state.filter);

  const { data, isLoading } = useGetCinemasQuery();

  const { setQuery, setGenre, setCinema } = filterActions;
  const dispatcher = useDispatch();

  const changeQuery = (str: string) => {
    dispatcher(setQuery(str));
  };
  const changeGenre = (str: string) => {
    dispatcher(setGenre(str));
  };

  const changeCinema = (str: string) => {
    dispatcher(setCinema(str));
  };

  if (isLoading) return <div>IsLoading</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Фильтр поиска</div>
        <div className={styles.flex}>
          <Input
            title={'Название'}
            value={state.query}
            changeValue={changeQuery}
          />
          <Select
            title={'Жанр'}
            placeholder={'Выберите жанр'}
            value={state.selectedGenre}
            onChange={changeGenre}
            data={Array.from(genresMap).map(([name, value]) => ({
              id: name,
              name: value,
            }))}
          />
          <Select
            title={'Кинотеатр'}
            onChange={changeCinema}
            value={state.selectedCinema}
            placeholder={'Выберите кинотеатр'}
            data={data}
          />
        </div>
      </div>
    </>
  );
};
export default Filter;
