import React from 'react';
import styles from './styles.module.css';
import { IProductType } from '../../interfaces';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateValue } from '../../context';

export const CartProduct: React.FC<IProductType> = ({
  id,
  title,
  coverImage,
  price,
  score,
  availableCoupon,
}) => {
  const [state, dispatch] = useStateValue();

  const removeFromCartHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  return (
    <tr className={styles.cartProduct} id={id}>
      <td className={`${styles.checkbox} ${styles.box}`}>
        <input className={styles.cartCheckbox} type={'checkbox'} checked />
      </td>
      <td className={`${styles.imgBox} ${styles.box}`}>
        <img className={styles.productImg} src={coverImage} />
      </td>
      <td className={`${styles.titleBox} ${styles.box}`}>
        <div className={styles.title}>{title}</div>
      </td>
      <td className={`${styles.couponBox} ${styles.box}`}>
        {availableCoupon && <div className={styles.couponBadge}>할인 쿠폰</div>}
      </td>
      <td className={`${styles.countBox} ${styles.box}`}>
        <div className={styles.counter}>
          <button className={styles.minus}>
            <AiOutlineMinus />
          </button>
          <input className={styles.count} type={'text'} readOnly defaultValue={1} />
          <button className={styles.plus}>
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td className={`${styles.priceBox} ${styles.box}`}>
        <div className={styles.price}>{price.toLocaleString()}</div>
      </td>
      <td className={`${styles.deleteBox} ${styles.box}`}>
        <button className={styles.delete} onClick={removeFromCartHandler}>
          삭제
        </button>
      </td>
    </tr>
  );
};
