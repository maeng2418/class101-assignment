import React from 'react';
import styles from './styles.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useStateValue } from '../../context';

export const CartMenu: React.FC = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className={styles.cartMenu}>
      <AiOutlineShoppingCart />
      <span className={styles.cartCount}>{cart?.length}</span>
    </div>
  );
};
