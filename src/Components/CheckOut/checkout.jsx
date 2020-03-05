import React from 'react';
import { useLocation } from 'react-router-dom';
import useCartDetails from '../../hooks/useCartDetails';
import * as styles from './checkout.module.css';
import SummaryCard from '../SummaryCard/summaryCard';

const Checkout = () => {
  const [cartData, callComplete, itemsCount, catergorizedData, cartTotal] = useCartDetails();
  const categories = Object.keys(catergorizedData);
  console.log(categories);
  if (!callComplete) { return <div>Loading!...</div>; }
  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.heading}>
        Your Shopping Cart (
        {itemsCount}
        {' '}
        items)
      </div>
      <div className={styles.cartSummary}>
        <div className={styles.tableContainer}>
          <table>

            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>

            {
                categories.map((category) => (
                  <tbody>
                    <tr key={category}>
                      <td colSpan="4" className={styles.categoryHeading}>{category}</td>
                    </tr>
                    {
                        catergorizedData[category].map((item) => (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.total}</td>
                          </tr>
                        ))
                    }
                  </tbody>
                ))
          }

          </table>
        </div>
        <div className={styles.summaryCard}>
          <SummaryCard cartTotal={cartTotal} />

        </div>

      </div>
    </div>
  );
};

export default Checkout;
