import { FunctionComponent } from 'react';
import styles from './Input.module.css';
const Input: FunctionComponent<Props> = ({ title }) => {
  return (
    <>
      <div>
        <div className={styles.title}>{title}</div>
        <input placeholder="Введите название" className={styles.input}></input>
      </div>
    </>
  );
};
export default Input;

interface Props {
  title: string;
}
