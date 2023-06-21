import Select from '../Select/Select';
import styles from './Filter.module.css';
import Input from './Input/Input';

const Filter = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Фильтр поиска</div>
        <div className={styles.flex}>
          <Input title={'Название'} />
          <Select title={'Жанр'} placeholder={'Выберите жанр'} />
          <Select title={'Кинотеатр'} placeholder={'Выберите кинотеатр'} />
        </div>
      </div>
    </>
  );
};
export default Filter;
