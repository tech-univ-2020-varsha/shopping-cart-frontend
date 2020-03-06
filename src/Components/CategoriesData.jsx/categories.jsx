import React from 'react';
import propTypes from 'prop-types';
import * as styles from './categories.module.css';
import ItemCard from '../ItemCard/itemCard';

const Categories = ({
  data, filter, total, setTotal,
}) => {
  const soldProducts = data.filter((product) => product.quantity === 0);
  const notSoldProducts = data.filter(((product) => product.quantity !== 0));
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.filterName}>
        { filter.charAt(0).toUpperCase() + filter.slice(1)}
      </div>
      <div className={styles.filterItems}>
        {

 notSoldProducts.map((item) => (
   <div className={styles.itemCard} key={item.id}>
     <ItemCard
       id={item.id}
       name={item.name}
       price={item.price}
       quantity={item.quantity}
       imageLink={item.imageLink}
       category={item.category}
       total={total}
       setTotal={setTotal}
       sold={false}
     />
   </div>
 ))
}
        { soldProducts.map((item) => (
          <div className={styles.itemCard}>
            <ItemCard
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              imageLink={item.imageLink}
              category={filter}
              total={total}
              setTotal={setTotal}
              sold
            />
          </div>
        ))}

      </div>
    </div>
  );
};

Categories.propTypes = {
  data: propTypes.arrayOf(propTypes.object).isRequired,
  filter: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
  setTotal: propTypes.func.isRequired,
};
export default Categories;
