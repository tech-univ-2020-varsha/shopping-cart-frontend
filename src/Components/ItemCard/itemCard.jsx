import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import * as styles from './itemCard.module.css';
import URL from '../../constants/url';
import useItemCount from '../../hooks/useItemCount/useItemCount';


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
      {
          !sold
            ? (
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
            )
            : <button type="submit" className={styles.soldOut}>SOLD OUT</button>

      }

    </div>
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
