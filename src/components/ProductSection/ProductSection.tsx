import React from 'react';
import styles from './styles.module.css';
import PageTitle from '../PageTitle';
import PageNavigation from '../PageNavigation';
import { IProductSectionType } from '../../interfaces';

export const ProductSection: React.FC<IProductSectionType> = ({
  title,
  url,
  start,
  end,
  count,
  order,
  orderKey,
}) => {
  return (
    <div className={styles.section}>
      <PageTitle>{title}</PageTitle>
      <PageNavigation
        start={start}
        url={url}
        end={end}
        count={count}
        order={order}
        orderKey={orderKey}
      />
    </div>
  );
};
