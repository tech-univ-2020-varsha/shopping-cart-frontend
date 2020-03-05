import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import propTypes from 'prop-types';
import * as styles from './header.module.css';

const Header = ({ total }) => (
  <div
    className={styles.header}
  >
    <div className={styles.cartIcon}>

      <AiOutlineShoppingCart size={32} />
      <div className={styles.totalCount}>
        {total}
      </div>

    </div>
  </div>
);

Header.propTypes = {
  total: propTypes.number.isRequired,
};

export default Header;
