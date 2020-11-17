import React from 'react';
import styles from './styles.module.css';
import { ICartSelectBtn } from '../../interfaces';
import { useStateValue } from '../../context';
import { check } from 'prettier';

export const CartSelectBtn: React.FC<ICartSelectBtn> = ({ onCheck, onDelete, checkProducts }) => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className={styles.cartSelectBtn}>
      <input
        type={'checkbox'}
        className={styles.checkbox}
        name={'total-check'}
        checked={cart.length === checkProducts.length}
        onChange={(e) => onCheck(e.target.checked)}
      />
      <label className={styles.label} htmlFor={'total-check'}>
        전체 선택
      </label>
      <button className={styles.delete} onClick={onDelete}>
        선택 삭제
      </button>
    </div>
  );
};
