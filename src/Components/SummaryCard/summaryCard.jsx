import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as styles from './summaryCard.module.css';
import URL from '../../constants/url';

const checkout = async (history, setTotal) => {
  const response = await axios.get(`${URL}/checkout`);
  if (response.status === 200) {
    setTotal(0);
    history.push('/');
  }
};

const continueShopping = (history) => {
  history.push('/');
};

const SummaryCard = ({ cartTotal, setTotal }) => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.summaryDetails}>
        <div className={styles.priceDetails}>
          <div className={styles.totalWord}>

            Total
          </div>
          <div className={styles.priceCartTotal}>
            <span className={styles.RS}>RS</span>
            {' '}
            {cartTotal}
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.checkout}>
          <button
            type="submit"
            className={styles.checkoutBtn}
            onClick={() => { checkout(history, setTotal); }}
          >
            Checkout
          </button>
        </div>
      </div>
      <div className={styles.continue}>
        <button
          type="submit"
          className={styles.continueBtn}
          onClick={() => { continueShopping(history); }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

SummaryCard.propTypes = {
  cartTotal: propTypes.number.isRequired,
  setTotal: propTypes.func.isRequired,
};
export default SummaryCard;
