import React from 'react';
import styles from './styles.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartMenu: React.FC = () => {
  return (
    <div className={styles.cartMenu}>
      <AiOutlineShoppingCart />
    </div>
  );
};
