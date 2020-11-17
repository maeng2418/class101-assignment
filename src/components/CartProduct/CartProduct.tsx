import React from 'react';
import styles from './styles.module.css';
import { ICartProductType } from '../../interfaces';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useStateValue } from '../../context';

export const CartProduct: React.FC<ICartProductType> = ({
  id,
  title,
  coverImage,
  price,
  score,
  availableCoupon,
  count,
  onCheck,
  checked,
}) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCartHandler = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  const countUpHandler = () => {
    dispatch({
      type: 'COUNT_UP_FROM_CART',
      id: id,
      count: count,
    });
  };

  const countDownHandler = () => {
    if (count > 1) {
      dispatch({
        type: 'COUNT_DOWN_FROM_CART',
        id: id,
        count: count,
      });
    } else {
      alert('최소 1개의 수량은 포함되어야 합니다.');
    }
  };

  return (
    <tr className={styles.cartProduct} id={id}>
      <td className={`${styles.checkbox} ${styles.box}`}>
        <input
          className={styles.cartCheckbox}
          type={'checkbox'}
          checked={checked}
          onChange={(e) =>
            onCheck(e.target.checked, {
              id,
              title,
              coverImage,
              price,
              score,
              availableCoupon,
              count,
            })
          }
        />
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
          <button className={styles.minus} onClick={countDownHandler}>
            <FiMinus />
          </button>
          <input className={styles.count} type={'text'} readOnly value={count} />
          <button className={styles.plus} onClick={countUpHandler}>
            <FiPlus />
          </button>
        </div>
      </td>
      <td className={`${styles.priceBox} ${styles.box}`}>
        <div className={styles.price}>{(price * count).toLocaleString()}</div>
      </td>
      <td className={`${styles.deleteBox} ${styles.box}`}>
        <button className={styles.delete} onClick={removeFromCartHandler}>
          삭제
        </button>
      </td>
    </tr>
  );
};
