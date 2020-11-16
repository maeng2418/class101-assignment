import React from 'react';
import styles from './styles.module.css';
import PageTitle from '../PageTitle';
import { ISectionType } from '../../interfaces';

export const Section: React.FC<ISectionType> = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <PageTitle>{title}</PageTitle>
      {children}
    </div>
  );
};
