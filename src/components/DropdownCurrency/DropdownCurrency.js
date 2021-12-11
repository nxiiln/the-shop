import React, {useState} from 'react';
import styles from './dropdownCurrency.module.scss';


const DropdownCurrency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUsd, setIsUsd] = useState(true);

  let style = styles.dropdown;
  isOpen && (style += ` ${styles.isOpen}`);

  return(
    <div
      className={style}
      onClick={() => setIsOpen(false)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={styles.itemMain}
        onMouseEnter={() => setIsOpen(true)}
      >
        {isUsd ? 'usd' : 'eur'} &#9660;
      </div>

      <div
        className={styles.item}
        onClick={() => setIsUsd(!isUsd)}
      >
        {isOpen && (isUsd ? 'eur' : 'usd')}
      </div>
    </div>
  );
}


export default DropdownCurrency;