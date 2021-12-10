import React from 'react';
import DropdownCompany from '../DropdownCompany/DropdownCompany';
import styles from './header.module.scss';


const Header = () => {
  return(
    <header>
      <nav className={styles.top}>
        <DropdownCompany />
      </nav>
    </header>
  );
}


export default Header;