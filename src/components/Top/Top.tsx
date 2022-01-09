import React from 'react';
import Company from '../Company/Company';
import Currency from '../Currency/Currency';
import Language from '../Language/Language';
import styles from './top.module.scss';


const Top = (): JSX.Element => {
  return(
    <nav className={styles.top}>
      <div className={styles.groupLeft}>
        <Company />
        <Currency />
        <Language />
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
