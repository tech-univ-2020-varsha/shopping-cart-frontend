import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import * as styles from './itemCard.module.css';
import URL from '../../constants/url';
import useItemCount from '../../hooks/useItemCount/useItemCount';
import soldImage from '../../sold.png';
import Button from '../Button/button';


const ItemCard = ({
  id, name,
  price, quantity,
  imageLink, category,
  total, setTotal, sold,
}) => {
  const [count, setCount, callComplete] = useItemCount(id);

  const updateCart = async () => {
    const payload = {
      products: [
        {
          id,
          name,
          price,
          quantity: count,
          imageLink,
          category,
        },
      ],
    };
    const response = await axios({
      method: 'PUT',
      url: `${URL}/cart`,
      data: payload,
    });

    console.log(response);
  };

  useEffect(() => {
    updateCart();
  }, [count]);

  const increment = async () => {
    if (count < quantity) {
      await setCount(count + 1);
      await setTotal(total + 1);
    }
  };


  const decrement = async () => {
    if (count > 0) {
      await setCount(count - 1);
      await setTotal(total - 1);
    }
  };


  if (!callComplete) { return <div>Loading! ...</div>; }
  return (
    !sold ? (
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
            <Button buttonText="-" clickEvent={decrement} buttonStyle={styles.button} />
          </div>
          <div>
            {' '}
            {count}
          </div>
          <div className={styles.counterItems}>
            <Button buttonText="+" clickEvent={increment} buttonStyle={styles.button} />
          </div>
        </div>
      </div>
    )
      : (
        <div className={[styles.cardContainer, styles.soldBackGround].join(' ')}>
          <div className={[styles.itemImage, styles.soldImageItemBorder].join(' ')}>
            <img
              src={soldImage}
              alt="sold"
              className={styles.soldImage}
            />
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

          <div>
            <div
              className={styles.soldOut}
            >
              SOLD OUT
            </div>
          </div>
        </div>

      )

  );
};


ItemCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  imageLink: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
  setTotal: propTypes.func.isRequired,
  sold: propTypes.bool.isRequired,
};
export default ItemCard;
