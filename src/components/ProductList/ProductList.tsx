import React from 'react';
import styles from './styles.module.css';
import Product from '../Product';
import { IProductListType } from '../../interfaces';

export const ProductList: React.FC<IProductListType> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map(({ id, title, coverImage, price, score, availableCoupon, count }) => (
        <Product
          key={id}
          id={id}
          title={title}
          coverImage={coverImage}
          price={price}
          score={score}
          availableCoupon={availableCoupon}
          count={count}
        />
      ))}
    </div>
  );
};
