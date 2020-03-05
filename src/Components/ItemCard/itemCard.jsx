import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as styles from './itemCard.module.css';

const ItemCard = ({
  id, name, price, quantity, imageLink,
}) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < quantity) { setCount(count + 1); }
  };
  const decrement = () => {
    if (count > 0) { setCount(count - 1); }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.itemImage}>
        <img src={imageLink} alt={name} className={styles.image} />
      </div>
      <div>
        {name}
      </div>
      <div>
        MRP
        {' '}
        {price}
        /-
      </div>
      <div className={styles.counter}>
        <div className={styles.counterItems}>
          <button className={styles.button} onClick={decrement} type="submit">-</button>
        </div>
        <div>
          {' '}
          {count}
        </div>
        <div className={styles.counterItems}>
          <button className={styles.button} onClick={increment} type="submit">+</button>
        </div>
      </div>
    </div>
  );
};


ItemCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  imageLink: propTypes.string.isRequired,
};
export default ItemCard;
