import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Input.module.css';
const Input: FunctionComponent<Props> = ({ title, value, changeValue }) => {
  const [query, setQuery] = useState(value);
  //debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      changeValue(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <div>
        <div className={styles.title}>{title}</div>
        <input
          placeholder="Введите название"
          className={styles.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
    </>
  );
};
export default Input;

interface Props {
  value: string;
  changeValue: (value: string) => void;
  title: string;
}
