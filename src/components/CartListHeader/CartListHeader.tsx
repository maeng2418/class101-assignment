import React from 'react';
import styles from './styles.module.css';

export const CartListHeader: React.FC = () => {
  return (
    <thead className={styles.cartListHeader}>
      <tr>
        <th colSpan={3} className={styles.class}>
          클래스
        </th>
        <th className={styles.coupon}>할인쿠폰</th>
        <th className={styles.count}>수량</th>
        <th className={styles.price}>판매금액</th>
        <th className={styles.delete}>삭제</th>
      </tr>
    </thead>
  );
};
