import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { IProductType, IPageType } from '../../interfaces';
import ProductList from '../ProductList';
import { sortHandler } from '../../utils/sorting';

export const PageNavigation: React.FC<IPageType> = ({
  url,
  start,
  end,
  count,
  order,
  orderKey,
}) => {
  const [page, setPage] = useState({ page: 1, start, end, lastPage: 0 });
  const [products, setProducts] = useState<Array<IProductType>>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => res.productItems)
      .then((productItems) =>
        setPage({ ...page, lastPage: Math.ceil(productItems.length / count) })
      );
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => sortHandler<IProductType>(res.productItems, order, orderKey))
      .then((sortedProducts) => sortedProducts.slice(page.start, page.end))
      .then((slicedProducts) => setProducts(slicedProducts));
  }, [page]);

  const indexDownHandler = () => {
    if (page.start === 0) return;

    setPage({
      ...page,
      page: page.page - 1,
      start: page.start - count,
      end: page.end - count,
    });
  };

  const indexUpHandler = () => {
    if (page.page + 1 > page.lastPage) return;
    setPage({
      ...page,
      page: page.page + 1,
      start: page.start + count,
      end: page.end + count,
    });
  };

  return (
    <div className={styles.pageNavigation}>
      <GrPrevious
        className={page.page <= 1 ? styles.hidden : styles.prev}
        onClick={indexDownHandler}
      />
      <ProductList products={products} />
      <GrNext
        className={page.page >= page.lastPage ? styles.hidden : styles.next}
        onClick={indexUpHandler}
      />
    </div>
  );
};
