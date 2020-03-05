import React from 'react';
import propTypes from 'prop-types';
import * as styles from './categories.module.css';
import ItemCard from '../ItemCard/itemCard';

const Categories = ({ data, filter }) => (
  <div className={styles.categoryContainer}>
    <div className={styles.filterName}>
      {filter}
    </div>
    <div className={styles.filterItems}>
      {
          data.map((item) => (
            <div className={styles.itemCard}>
              <ItemCard
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                imageLink={item.imageLink}
              />
            </div>
          ))
      }
    </div>
  </div>
);

Categories.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  filter: propTypes.string.isRequired,
};
export default Categories;
