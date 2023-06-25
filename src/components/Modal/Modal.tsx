'use client';
import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ close, children }: Props) => {
  const modalContainer = document.getElementById('modal');
  // modalContainer?.classList.toggle('hidden');

  return ReactDOM.createPortal(
    <div
      className={styles.modal}
      onClick={(e) => {
        if (e.currentTarget != e.target) return;
        close();
      }}
    >
      {children}
    </div>,
    modalContainer ? modalContainer : document.body
  );
};

export default Modal;

interface Props {
  close: () => void;
  children?: ReactNode;
}
