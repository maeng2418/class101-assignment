import React, { useState } from 'react';
import styles from './styles.module.css';
import Section from '../Section';
import CartList from '../CartList';
import CartSelectBtn from '../CartSelectBtn';
import CouponSelect from '../CouponSelect';
import TotalPrice from '../TotalPrice';
import { useStateValue } from '../../context';
import { IProductType } from '../../interfaces';

export const CartSection: React.FC = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [checkProducts, setCheckProducts] = useState<Array<IProductType>>([]);

  // 개별 선택
  const checkHandler = (checked: boolean, product: IProductType) => {
    if (checked) {
      setCheckProducts([...checkProducts, product]);
    } else {
      // 체크 해제
      setCheckProducts(checkProducts.filter((checkedProduct) => checkedProduct.id !== product.id));
    }
  };

  // 전체 선택
  const checkAllHandler = (checked: boolean) => {
    if (checked) {
      setCheckProducts([...cart]);
    } else {
      setCheckProducts([]);
    }
  };

  // 선택 삭제
  const removeFromCheckHandler = () => {
    checkProducts.forEach((product) => {
      dispatch({
        type: 'REMOVE_FROM_CART',
        id: product.id,
      });
    });
    setCheckProducts([]);
  };
  return (
    <div className={styles.CartSectino}>
      <Section title={'장바구니'}>
        <CartList onCheck={checkHandler} checkProducts={checkProducts} />
        <CartSelectBtn onCheck={checkAllHandler} onDelete={removeFromCheckHandler} />
      </Section>
      <Section title={'쿠폰'}>
        <CouponSelect url={'/data/coupons.json'} />
      </Section>
      <Section title={'결제금액'}>
        <TotalPrice />
      </Section>
    </div>
  );
};
