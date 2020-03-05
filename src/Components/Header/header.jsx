import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as styles from './header.module.css';

const Header = ({ total, setTotal }) => (
  <div
    className={styles.header}
  >

    <Link
      to={{
        pathname: '/checkout',
        totalProps: setTotal,

      }}
      className={styles.link}
    >
      <div className={styles.cartIcon}>
        <AiOutlineShoppingCart size={32} />
        <div className={styles.totalCount}>
          {total}
        </div>

      </div>

    </Link>
  </div>
);

Header.propTypes = {
  total: propTypes.number.isRequired,
  setTotal: propTypes.func.isRequired,
};

export default Header;
