import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import StoreProvider from '@/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Билетопоиск',
  description: 'Поиск билетов',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal"></div>
        <div id="select"></div>
        <StoreProvider>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
