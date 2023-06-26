'use client';

import React, { ReactNode, useCallback, useContext, useState } from 'react';
import styles from './Accordion.module.css';
import { icons } from '@/data/icons';

const MenuContext = React.createContext<ContextProps>({} as ContextProps);

const Accordion = ({ children }: AccordionProps) => {
  const [active, setActive] = useState<number>(-1);
  const switchGroup = useCallback((id: number) => {
    setActive((active) => (active === id ? -1 : id));
  }, []);

  return (
    <MenuContext.Provider value={{ active, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

Accordion.Question = function MenuGroup({
  id,
  children,
  title,
}: QuestionProps) {
  const { active, switchGroup } = useContext(MenuContext);
  return (
    <>
      <button className={styles.container} onClick={() => switchGroup(id)}>
        <div className={styles.header}>
          <p className={styles.question}>{title}</p>
          {active === id && <div className={styles.answers}>{children}</div>}
        </div>
        <div>
          <div style={active === id ? { rotate: '180deg' } : {}}>
            {icons.arrow}
          </div>
        </div>
      </button>
    </>
  );
};

Accordion.Answer = function MenuItem({ children }: AnswerProps) {
  return <p className={styles.answer}>{children}</p>;
};

export default function AccrodionComponent() {
  return (
    <Accordion>
      <Accordion.Question id={1} title="Что такое Билетопоиск?">
        <Accordion.Answer>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </Accordion.Answer>
      </Accordion.Question>
      <Accordion.Question
        id={2}
        title="Какой компании принадлежит Билетопоиск?"
      >
        <Accordion.Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Answer>
      </Accordion.Question>
      <Accordion.Question id={3} title="Как купить билет на Билетопоиск?">
        <Accordion.Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          commodo sed egestas egestas fringilla phasellus.
        </Accordion.Answer>
      </Accordion.Question>
      <Accordion.Question id={4} title="Как оставить отзыв на Билетопоиск?">
        <Accordion.Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          commodo sed egestas egestas fringilla phasellus.
        </Accordion.Answer>
      </Accordion.Question>
    </Accordion>
  );
}

interface AccordionProps {
  children?: ReactNode;
}

interface ContextProps {
  active: number;
  switchGroup: (id: number) => void;
}
interface QuestionProps {
  id: number;
  children?: ReactNode;
  title: string;
}
interface AnswerProps {
  children?: ReactNode;
}
