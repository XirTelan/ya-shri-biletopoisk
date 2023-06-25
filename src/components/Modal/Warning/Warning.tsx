import { ReactNode } from 'react';
import styles from './Warning.module.css';

const Warning = ({ action, disable }: Props): ReactNode => {
  return (
    <div className={styles.warning}>
      <div className="flex">
        <div>Удаление билета</div>
        <button />
      </div>
      <div>Вы уверены что хотите удалить билет?</div>
      <div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.stopPropagation();
            disable();
            action();
          }}
        >
          Да
        </button>
        <button className="btn btn-inline" onClick={() => disable()}>
          Нет
        </button>
      </div>
    </div>
  );
};

export default Warning;

interface Props {
  action: () => void;
  disable: () => void;
}
