import React from 'react';
import styles from './styles.module.css';
import { ProductSection } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <ProductSection
        title={'오픈클래스'}
        url={'/data/productItems.json'}
        start={0}
        end={5}
        count={5}
        order={'DESC'}
        orderKey={'score'}
      />
    </div>
  );
};

export default Product;
