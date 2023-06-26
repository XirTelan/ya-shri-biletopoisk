'use client';

import ReactDOM from 'react-dom';
import styles from './Select.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { icons } from '@/data/icons';

const Select = ({ title, placeholder, value, data, onChange }: Props) => {
  const [isOpen, setIsOpnen] = useState(false);
  const switchDropDown = () => {
    setIsOpnen((prev) => !prev);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const rect = inputRef.current?.getBoundingClientRect();

  return (
    <div ref={inputRef}>
      <div className={styles.title}>{title}</div>

      <button
        onClick={() => setIsOpnen((prevVal) => !prevVal)}
        className={styles.input}
        style={{ borderColor: isOpen ? 'var(--orange)' : '' }}
      >
        <div
          className={styles.placeholder}
          style={{ color: value.id !== '' ? '#000' : '' }}
        >
          {value.id ? value.name : placeholder}
        </div>

        <div
          className={styles.arrow}
          style={isOpen ? { rotate: '180deg' } : {}}
        >
          {icons.arrow}
        </div>
      </button>
      {isOpen && (
        <DropDown
          data={data}
          pos={getPosition(rect)}
          onChange={onChange}
          close={switchDropDown}
        />
      )}
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

const DropDown = ({ data, pos, onChange, close }: DropDownProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const { left, top, width } = pos;
  const modalContainer = document.getElementById('select');
  return ReactDOM.createPortal(
    <div ref={ref} className={styles.dropdown} style={{ left, top, width }}>
      <ul>
        {data.map((cinema) => (
          <li
            onClick={(e) => {
              onChange(cinema);
              close();
            }}
            key={cinema.id}
          >
            {cinema.name}
          </li>
        ))}
      </ul>
    </div>,
    modalContainer ? modalContainer : document.body
  );
};

interface DropDownProps {
  data: Cinema[];
  pos: Positions;
  onChange: (obj: Cinema) => void;
  close: () => void;
}
interface Positions {
  top?: number;
  width?: number;
  left?: number;
}

interface Props {
  title: string;
  onChange: (obj: Cinema) => void;
  placeholder: string;
  value: Cinema;
  data: Cinema[];
}
interface Cinema {
  id: string;
  name: string;
}
