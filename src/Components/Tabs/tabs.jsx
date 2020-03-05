import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import * as styles from './tabs.module.css';
import Categories from '../CategoriesData.jsx/categories';
import useProduct from '../../hooks/useProduct';

const clickEvent = (products, setData, setFilterSelected, filter) => {
  setFilterSelected(filter);
  setData(products);
};
const Tabs = ({ total, setTotal }) => {
  const [products, filterProduct, callComplete] = useProduct();

  const filterNames = Object.keys(filterProduct);
  const [data, setData] = useState(null);
  const [filterSelected, setFilterSelected] = useState('All');
  const updateData = data || products;
  if (!callComplete) return <div>Loading!...</div>;
  return (

    <div className={styles.Container}>
      <div className={styles.filterBar}>
        Filter Categories
        <div className={styles.filterTabs}>
          <div
            key="All"
            className={styles.tabItem}
            onClick={() => clickEvent(products, setData, setFilterSelected, 'All')}
          >
            All
          </div>
          {
         filterNames.map((filter) => (
           <div
             key={filter}
             className={styles.tabItem}
             onClick={() => clickEvent(filterProduct[filter], setData, setFilterSelected, filter)}
           >
             {filter}
           </div>
         ))
          }
        </div>

      </div>

      <Categories
        data={updateData}
        filter={filterSelected}
        total={total}
        setTotal={setTotal}
      />

    </div>
  );
};

Tabs.propTypes = {
  products: propTypes.arrayOf(propTypes.object).isRequired,
  filterProduct: propTypes.objectOf(propTypes.array).isRequired,
  total: propTypes.number.isRequired,
  setTotal: propTypes.func.isRequired,
};

export default Tabs;
