import React from 'react';
import styles from './styles.module.css';
import { Section, CartList } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <Section title={'장바구니'}>
        <CartList />
      </Section>
    </div>
  );
};

export default Product;
