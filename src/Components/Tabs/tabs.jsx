import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as styles from './tabs.module.css';
import Categories from '../CategoriesData.jsx/categories';
import useProduct from '../../hooks/useProduct/useProduct';

const clickEvent = (products, setData, setFilterSelected, filter, item) => {
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
  const className = styles.selectedTabItem;

  return (

    <div className={styles.Container}>
      <div className={styles.filterBar}>
        Filter Categories
        <div className={styles.filterTabs}>

          <div
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
            key="All"
            className={
                [filterSelected === 'All'
                  ? styles.selectedTabItem
                  : styles.tabItem, styles.leftBorderRadius].join(' ')
}
            onClick={() => clickEvent(products, setData, setFilterSelected, 'All')}
          >
            All
          </div>
          {
         filterNames.map((filter, index) => {
           const paddingClassName = filterNames.length === index + 1 ? styles.rightBorderRadius : '';
           return (
             <div
               onKeyDown={() => {}}
               role="button"
               tabIndex={0}
               key={filter}
               className={[filterSelected === filter
                 ? styles.selectedTabItem
                 : styles.tabItem, paddingClassName].join(' ')}
               onClick={() => clickEvent(filterProduct[filter], setData, setFilterSelected, filter)}
             >
               {filter.charAt(0).toUpperCase() + filter.slice(1)}
             </div>
           );
         })
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
