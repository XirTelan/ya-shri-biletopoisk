import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Link href="/">Вопросы-ответы</Link>
      <Link href="/">О нас</Link>
    </div>
  );
};
export default Footer;
