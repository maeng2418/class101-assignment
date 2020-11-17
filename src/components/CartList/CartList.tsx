import React, { useState } from 'react';
import styles from './styles.module.css';
import CartProduct from '../CartProduct';
import CartListHeader from '../CartListHeader';
import { useStateValue } from '../../context';
import { IProductType, ICartListType } from '../../interfaces';

export const CartList: React.FC<ICartListType> = ({ onCheck, checkProducts }) => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <table className={styles.cartList}>
      <CartListHeader />
      <tbody>
        {cart.map(
          ({ id, title, coverImage, price, score, availableCoupon, count }: IProductType) => (
            <CartProduct
              key={id}
              id={id}
              title={title}
              coverImage={coverImage}
              price={price}
              score={score}
              availableCoupon={availableCoupon}
              count={count}
              onCheck={onCheck}
              checked={checkProducts.some((product) => product.id === id)}
            />
          )
        )}
      </tbody>
    </table>
  );
};
