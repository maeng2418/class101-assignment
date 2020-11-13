import React from 'react';
import styles from './styles.module.css';

export const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
