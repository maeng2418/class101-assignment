import React, { useState } from 'react';
import styles from './styles.module.css';
import { AiOutlineShopping } from 'react-icons/ai';

export const Product: React.FC = () => {
  const [pick, setPick] = useState(false);
  const addCartHandler = () => {
    setPick(!pick);
  };
  return (
    <div className={styles.product} id={'B9vUv0E0ibc0X55kVVLr'}>
      <div className={styles.productImgContainer}>
        <div className={styles.couponBadge}>할인 쿠폰</div>
        <img
          className={styles.coverImage}
          src="https://cdn.class101.net/images/ec0f0c15-aeec-43a3-a0c9-b649b0999f0a"
        />
        <div className={`${styles.cartBadge} ${pick && styles.selected}`} onClick={addCartHandler}>
          <AiOutlineShopping />
        </div>
      </div>
      <div className={styles.productInfoContainer}>
        <div className={styles.title}>
          포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스
        </div>
        <div className={styles.score}>200</div>
      </div>
      <div className={styles.price}>560,000</div>
    </div>
  );
};
