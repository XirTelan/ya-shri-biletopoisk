import { ReactNode } from 'react';
import styles from './Warning.module.css';
import { icons } from '@/data/icons';

const Warning = ({ action, disable }: Props): ReactNode => {
  return (
    <div className={styles.warning}>
      <div className={styles.header}>
        <div className={styles.title}>Удаление билета</div>
        <button className={styles.close} onClick={() => disable()}>
          {icons.close}
        </button>
      </div>
      <div className={styles.question}>
        Вы уверены что хотите удалить билет?
      </div>
      <div className={styles.buttons}>
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
