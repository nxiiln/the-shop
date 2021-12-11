import React from 'react';
import DropdownCompany from '../DropdownCompany/DropdownCompany';
import DropdownCurrency from '../DropdownCurrency/DropdownCurrency';
import DropdownLanguage from '../DropdownLanguage/DropdownLanguage';
import styles from './header.module.scss';


const Header = () => {
  return(
    <header>
      <nav className={styles.top}>
        <div className={styles.groupLeft}>
          <DropdownCompany />
          <DropdownCurrency />
          <DropdownLanguage />
        </div>
      </nav>
    </header>
  );
}


export default Header;
