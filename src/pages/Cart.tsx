import React from 'react';
import styles from './styles.module.css';
import { Section, CartList, CouponSelect, TotalPrice } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <Section title={'장바구니'}>
        <CartList />
      </Section>
      <Section title={'쿠폰'}>
        <CouponSelect url={'/data/coupons.json'} />
      </Section>
      <Section title={'결제금액'}>
        <TotalPrice />
      </Section>
    </div>
  );
};

export default Product;
