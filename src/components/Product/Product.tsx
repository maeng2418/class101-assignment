import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { AiOutlineShopping } from 'react-icons/ai';
import { IProductType } from '../../interfaces';
import { useStateValue } from '../../context';

export const Product: React.FC<IProductType> = ({
  id,
  title,
  coverImage,
  price,
  score,
  availableCoupon = true,
  count = 1,
}) => {
  const [pick, setPick] = useState(false);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const isPicked = cart.some((item: IProductType) => item.id === id);
    setPick(isPicked);
  }, [cart]);

  const addToCartHandler = () => {
    if (cart.length < 3) {
      dispatch({
        type: 'ADD_TO_CART',
        item: {
          id,
          title,
          coverImage,
          price,
          score,
          availableCoupon,
          count,
        },
      });
    } else {
      alert('장바구니에는 최대 3개까지 담을 수 있습니다.');
    }
  };

  const removeFromCartHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <div className={styles.product} id={id}>
      <div className={styles.productImgContainer}>
        {availableCoupon && <div className={styles.couponBadge}>할인 쿠폰</div>}
        <img className={styles.coverImage} src={coverImage} />
        <div
          className={`${styles.cartBadge} ${pick && styles.selected}`}
          onClick={pick ? removeFromCartHandler : addToCartHandler}
        >
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
