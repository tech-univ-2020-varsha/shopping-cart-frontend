import React from 'react';
import propTypes from 'prop-types';
import * as styles from './itemCard.module.css';

const ItemCard = ({
  id, name, price, quantity, imageLink,
}) => (
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
  </div>
);


ItemCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  imageLink: propTypes.string.isRequired,
};
export default ItemCard;
