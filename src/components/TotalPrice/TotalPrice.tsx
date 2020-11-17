import React from 'react';
import styles from './styles.module.css';
import { FaMinus, FaEquals } from 'react-icons/fa';
import { IProductType, ITotalPriceType } from '../../interfaces';
import { useStateValue } from '../../context';

export const TotalPrice: React.FC<ITotalPriceType> = ({ products, coupon }) => {
  const [{ cart }, dispatch] = useStateValue();

  const getCountFromCart = (id: string) => {
    const product = cart.filter((product: IProductType) => product.id === id);
    if (product.length > 0) {
      return product[0].count;
    }
    return 0;
  };

  const getTotalPrice = (products: Array<IProductType>) => {
    return products?.reduce(
      (acc: number, cur: IProductType) => acc + cur.price * getCountFromCart(cur.id),
      0
    );
  };

  const getDiscountPrice = (products: Array<IProductType>, coupon: string) => {
    const discountProducts = products.filter((product) => product?.availableCoupon !== false);
    if (coupon === 'rate') {
      return discountProducts?.reduce(
        (acc: number, cur: IProductType) => acc + (cur.price * getCountFromCart(cur.id)) / 10,
        0
      );
    }
    if (coupon === 'amount') {
      return discountProducts?.reduce(
        (acc: number, cur: IProductType) => acc + getCountFromCart(cur.id) * 10000,
        0
      );
    }
    return 0;
  };

  const getPaymentPrice = (products: Array<IProductType>, coupon: string) => {
    return getTotalPrice(products) - getDiscountPrice(products, coupon);
  };

  return (
    <div className={styles.totalPrice}>
      <div className={styles.preTotalPriceBox}>
        <div className={styles.head}>제품금액</div>
        <div className={styles.price}>{getTotalPrice(products).toLocaleString()}</div>
      </div>
      <div className={styles.minusBox}>
        <div>
          <FaMinus />
        </div>
      </div>
      <div className={styles.discountBox}>
        <div className={styles.head}>할인금액</div>
        <div className={styles.price}>{getDiscountPrice(products, coupon).toLocaleString()}</div>
      </div>
      <div className={styles.equalBox}>
        <div>
          <FaEquals />
        </div>
      </div>
      <div className={styles.totalPriceBox}>
        <div className={styles.head}>주문 합계금액</div>
        <div className={styles.price}>{getPaymentPrice(products, coupon).toLocaleString()}</div>
      </div>
      <div className={styles.orderBox}>
        <button className={styles.order}>결제하기</button>
      </div>
    </div>
  );
};
