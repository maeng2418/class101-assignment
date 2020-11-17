import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { ICouponSelect } from '../../interfaces';

export const CouponSelect: React.FC<ICouponSelect> = ({ url }) => {
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.coupons)
      .then((coupons) => setCoupons(coupons));
  }, []);
  return (
    <div className={styles.couponSelectBox}>
      <select className={styles.couponSelect}>
        <option hidden>쿠폰을 선택해주세요.</option>
        {coupons.map(({ type, title }, idx) => (
          <option key={idx} value={type}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
