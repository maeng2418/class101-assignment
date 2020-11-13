import React from 'react';
import styles from './styles.module.css';
import { ProductList, PageTitle } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <PageTitle>오픈 클래스</PageTitle>
      <ProductList />
    </div>
  );
};

export default Product;
