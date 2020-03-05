import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as styles from './tabs.module.css';
import Categories from '../CategoriesData.jsx/categories';

const clickEvent = (products, setData, setFilterSelected, filter) => {
  setFilterSelected(filter);
  setData(products);
};
const Tabs = ({ products, filterProduct }) => {
  const filterNames = Object.keys(filterProduct);
  const [data, setData] = useState(products);
  //   setData(products);
  const [filterSelected, setFilterSelected] = useState('All');

  //   setData(products);
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

      <Categories data={data} filter={filterSelected} />
    </div>
  );
};

Tabs.propTypes = {
  products: propTypes.arrayOf(propTypes.object).isRequired,
  filterProduct: propTypes.objectOf(propTypes.array).isRequired,
};

export default Tabs;
