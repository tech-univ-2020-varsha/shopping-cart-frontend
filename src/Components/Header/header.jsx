import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import * as styles from './header.module.css';

const Header = () => (
  <div
    className={styles.header}
  >
    <div className={styles.cartIcon}>

      <AiOutlineShoppingCart size={32} />
    </div>
  </div>
);

export default Header;
