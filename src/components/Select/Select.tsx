'use client';

import ReactDOM from 'react-dom';
import styles from './Select.module.css';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { icons } from '@/data/icons';

const Select: FunctionComponent<Props> = ({
  title,
  placeholder,
  value,
  data,
  onChange,
}) => {
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
  const { left, top, width } = pos;
  const modalContainer = document.getElementById('select');
  return ReactDOM.createPortal(
    <div className={styles.dropdown} style={{ left, top, width }}>
      <ul>
        {data.map((cinema) => (
          <li
            onClick={() => {
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
