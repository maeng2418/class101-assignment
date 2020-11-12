import React from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import Footer from '../Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
