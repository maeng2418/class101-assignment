import React from 'react';
import styles from './styles.module.css';
import { CartSection } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <CartSection />
    </div>
  );
};

export default Product;
