import React, { useState } from 'react';
import styles from './styles.module.css';
import CartProduct from '../CartProduct';
import CartSelectBtn from '../CartSelectBtn';
import CartListHeader from '../CartListHeader';
import { useStateValue } from '../../context';
import { IProductType } from '../../interfaces';

export const CartList: React.FC = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [checkProducts, setCheckProducts] = useState<Array<string>>([]);

  // 개별 선택
  const checkHandler = (checked: boolean, id: string) => {
    if (checked) {
      setCheckProducts([...checkProducts, id]);
    } else {
      // 체크 해제
      setCheckProducts(checkProducts.filter((product) => product !== id));
    }
  };

  // 전체 선택
  const checkAllHandler = (checked: boolean) => {
    if (checked) {
      setCheckProducts(cart.map((product: IProductType) => product.id));
    } else {
      setCheckProducts([]);
    }
  };

  // 선택 삭제
  const removeFromCheckHandler = () => {
    checkProducts.forEach((id) => {
      dispatch({
        type: 'REMOVE_FROM_CART',
        id: id,
      });
    });
    setCheckProducts([]);
  };

  return (
    <div className={styles.cartList}>
      <table className={styles.cartTable}>
        <CartListHeader />
        <tbody>
          {cart.map(({ id, title, coverImage, price, score, availableCoupon }: IProductType) => (
            <CartProduct
              key={id}
              id={id}
              title={title}
              coverImage={coverImage}
              price={price}
              score={score}
              availableCoupon={availableCoupon}
              onCheck={checkHandler}
              checked={checkProducts.some((productId) => productId === id)}
            />
          ))}
        </tbody>
      </table>
      <CartSelectBtn onCheck={checkAllHandler} onDelete={removeFromCheckHandler} />
    </div>
  );
};
