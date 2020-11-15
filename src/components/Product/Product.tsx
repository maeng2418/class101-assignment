import React, { useState } from 'react';
import styles from './styles.module.css';
import { AiOutlineShopping } from 'react-icons/ai';
import { IProductType } from '../../interfaces';

export const Product: React.FC<IProductType> = ({
  id,
  title,
  coverImage,
  price,
  score,
  availableCoupon = true,
}) => {
  const [pick, setPick] = useState(false);
  const addCartHandler = () => {
    setPick(!pick);
  };
  return (
    <div className={styles.product} id={id}>
      <div className={styles.productImgContainer}>
        {availableCoupon && <div className={styles.couponBadge}>할인 쿠폰</div>}
        <img className={styles.coverImage} src={coverImage} />
        <div className={`${styles.cartBadge} ${pick && styles.selected}`} onClick={addCartHandler}>
          <AiOutlineShopping />
        </div>
      </div>
      <div className={styles.productInfoContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.score}>{score}</div>
      </div>
      <div className={styles.price}>{price.toLocaleString()}</div>
    </div>
  );
};
