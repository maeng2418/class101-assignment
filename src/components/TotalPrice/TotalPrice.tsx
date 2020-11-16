import React from 'react';
import styles from './styles.module.css';
import { FaMinus, FaEquals } from 'react-icons/fa';
import { useStateValue } from '../../context';
import { IProductType } from '../../interfaces';

export const TotalPrice: React.FC = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className={styles.totalPrice}>
      <div className={styles.preTotalPriceBox}>
        <div className={styles.head}>제품금액</div>
        <div className={styles.price}>
          {cart?.reduce((acc: number, cur: IProductType) => acc + cur.price, 0).toLocaleString()}
        </div>
      </div>
      <div className={styles.minusBox}>
        <div>
          <FaMinus />
        </div>
      </div>
      <div className={styles.discountBox}>
        <div className={styles.head}>할인금액</div>
        <div className={styles.price}>
          {cart?.reduce((acc: number, cur: IProductType) => acc + cur.price, 0).toLocaleString()}
        </div>
      </div>
      <div className={styles.equalBox}>
        <div>
          <FaEquals />
        </div>
      </div>
      <div className={styles.totalPriceBox}>
        <div className={styles.head}>주문 합계금액</div>
        <div className={styles.price}>
          {cart?.reduce((acc: number, cur: IProductType) => acc + cur.price, 0).toLocaleString()}
        </div>
      </div>
      <div className={styles.orderBox}>
        <button className={styles.order}>결제하기</button>
      </div>
    </div>
  );
};
