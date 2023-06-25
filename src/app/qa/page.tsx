import AccrodionComponent from '@/components/Accordion/Accordion';
import React from 'react';
import styles from './page.module.css';
const Qa = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вопросы-ответы</h2>
      <div className={styles.qa}>
        <AccrodionComponent />
      </div>
    </div>
  );
};

export default Qa;
