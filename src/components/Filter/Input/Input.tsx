import { FunctionComponent } from 'react';
import styles from './Input.module.css';
const Input: FunctionComponent<Props> = ({ title, value, changeValue }) => {
  return (
    <>
      <div>
        <div className={styles.title}>{title}</div>
        <input
          placeholder="Введите название"
          className={styles.input}
          value={value}
          onChange={(e) => changeValue(e.target.value)}
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
