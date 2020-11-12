import React from 'react';
import styles from './styles.module.css';
import Logo from '../Logo';
import CartMenu from '../CartMenu';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContents}>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/cart">
          <CartMenu />
        </Link>
      </div>
    </div>
  );
};
