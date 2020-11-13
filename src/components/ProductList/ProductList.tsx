import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Product from '../Product';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/productItems.json')
      .then((res) => res.json())
      .then((res) => setProducts(res.productItems));
  }, []);

  return (
    <div className={styles.productList}>
      {products.map(({ id, title, coverImage, price, score, availableCoupon }) => (
        <Product
          key={id}
          id={id}
          title={title}
          coverImage={coverImage}
          price={price}
          score={score}
          availableCoupon={availableCoupon}
        />
      ))}
    </div>
  );
};
