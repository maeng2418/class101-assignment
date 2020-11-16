import React from 'react';
import styles from './styles.module.css';
import { Section, PageNavigation } from '../components';

const Product: React.FC = () => {
  return (
    <div className={styles.page}>
      <Section title={'오픈클래스'}>
        <PageNavigation
          url={'/data/productItems.json'}
          start={0}
          end={5}
          count={5}
          order={'DESC'}
          orderKey={'score'}
        />
      </Section>
    </div>
  );
};

export default Product;
