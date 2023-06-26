import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loading}>
      <div>Загружаем...</div>
      <div className={styles.spinner}></div>
    </div>
  );
};
export default Loader;
