import React from 'react';
import styles from './styles.module.css';
import { Section, CartList, CouponSelect } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <Section title={'장바구니'}>
        <CartList />
      </Section>
      <Section title={'쿠폰'}>
        <CouponSelect url={'/data/coupons.json'} />
      </Section>
    </div>
  );
};

export default Product;
