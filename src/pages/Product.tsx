import React from 'react';
import styles from './styles.module.css';
import { Products } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <Products />
    </div>
  );
};

export default Product;
