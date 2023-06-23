'use client';

import ReactDOM from 'react-dom';
import styles from './Select.module.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

const Select: FunctionComponent<Props> = ({ title, placeholder }) => {
  const [isOpen, setIsOpnen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const rect = inputRef.current?.getBoundingClientRect();

  return (
    <div ref={inputRef}>
      <div className={styles.title}>{title}</div>

      <button
        onClick={() => setIsOpnen((prevVal) => !prevVal)}
        className={styles.input}
      >
        <div className={styles.placeholder}>{placeholder}</div>
        <div className={styles.arrow}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.49999 17.9583H11.5C16.025 17.9583 17.9583 16.025 17.9583 11.5V6.49996C17.9583 1.97496 16.025 0.041626 11.5 0.041626H6.49999C1.97499 0.041626 0.0416565 1.97496 0.0416565 6.49996V11.5C0.0416565 16.025 1.97499 17.9583 6.49999 17.9583ZM1.29166 6.49996C1.29166 2.65829 2.65832 1.29163 6.49999 1.29163H11.5C15.3417 1.29163 16.7083 2.65829 16.7083 6.49996V11.5C16.7083 15.3416 15.3417 16.7083 11.5 16.7083H6.49999C2.65832 16.7083 1.29166 15.3416 1.29166 11.5V6.49996ZM8.55833 11.2417C8.68333 11.3667 8.84166 11.4251 8.99999 11.4251C9.15833 11.4251 9.31666 11.3667 9.44166 11.2417L12.3833 8.30006C12.625 8.05839 12.625 7.65839 12.3833 7.41672C12.1417 7.17506 11.7417 7.17506 11.5 7.41672L8.99999 9.91672L6.49999 7.41672C6.25833 7.17506 5.85833 7.17506 5.61666 7.41672C5.37499 7.65839 5.37499 8.05839 5.61666 8.30006L8.55833 11.2417Z"
              fill="#999FA6"
            />
          </svg>
        </div>
      </button>
      {isOpen && <DropDown {...getPosition(rect)} />}
    </div>
  );
};
export default Select;

const getPosition = (rect: DOMRect | undefined) => {
  if (!rect) return {};
  const top = rect.height + rect.top;
  const left = rect.left;
  const width = rect.width;
  return { top, left, width };
};

const DropDown = ({ left, width, top }: Positions) => {
  const modalContainer = document.getElementById('modal');
  return ReactDOM.createPortal(
    <div className={styles.dropdown} style={{ left, top, width }}>
      <ul>
        <li>Боевик</li>
        <li>Боевик</li>
        <li>Боевик</li>
        <li>Боевик</li>
        <li>Боевик</li>
      </ul>
    </div>,
    modalContainer ? modalContainer : document.body
  );
};

interface Positions {
  top?: number;
  width?: number;
  left?: number;
}

interface Props {
  title: string;
  placeholder: string;
}
