import Image from 'next/image';
import styles from './page.module.css';

export default function Reviews() {
  return (
    <div>
      Reviews{' '}
      <Image
        color="red"
        src="/arrow.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </div>
  );
}
