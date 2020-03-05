import React from 'react';
import propTypes from 'prop-types';
import * as styles from './summaryCard.module.css';

const SummaryCard = ({ cartTotal }) => (
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
        <button type="submit" className={styles.checkoutBtn}>
          Checkout
        </button>
      </div>
    </div>
    <div>
      <button type="submit">
        Continue Shopping
      </button>
    </div>
  </div>
);

SummaryCard.propTypes = {
  cartTotal: propTypes.number.isRequired,
};
export default SummaryCard;
