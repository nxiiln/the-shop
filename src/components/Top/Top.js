import React from 'react';
import DropdownCompany from '../DropdownCompany/DropdownCompany';
import DropdownCurrency from '../DropdownCurrency/DropdownCurrency';
import DropdownLanguage from '../DropdownLanguage/DropdownLanguage';
import styles from './top.module.scss';


const Top = () => {
  return(
    <nav className={styles.top}>
      <div className={styles.groupLeft}>
        <DropdownCompany />
        <DropdownCurrency />
        <DropdownLanguage />
      </div>

      <div className={styles.groupCenter}>
        free shipping on orders above 50$
      </div>

      <div className={styles.groupRight}>
        <button
          className={styles.buttonMyAccount}
          type='button'
        >
          my account
        </button>

        <div className={styles.line}></div>

        <button
          className={styles.buttonWishList}
          type='button'
        >
          wish list
        </button>

        <div className={styles.line}></div>

        <button
          className={styles.buttonCheckout}
          type='button'
        >
          checkout
        </button>

        <div className={styles.line}></div>

        <button
          className={styles.buttonLogIn}
          type='button'
        >
          log in
        </button>
      </div>
    </nav>
  );
}


export default Top;