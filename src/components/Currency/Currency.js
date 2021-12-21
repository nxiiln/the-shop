import React, {useState} from 'react';
import styles from './currency.module.scss';


const Currency = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isUsd, setIsUsd] = useState(true);

  let dropdown = styles.dropdown;
  let buttonMain = styles.buttonMain;
  let button = styles.button;
  
  if (dropdownOpen) {
    dropdown += ` ${styles.dropdownOpen}`;
    buttonMain += ` ${styles.buttonOpen}`;
    button += ` ${styles.buttonOpen}`;
  }

  return(
    <div
      className={dropdown}
      onClick={() => setDropdownOpen(false)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={() => setDropdownOpen(true)}
      >
        {isUsd ? 'usd' : 'eur'}
      </button>
      <div className={styles.triangle}></div>

      {dropdownOpen &&
        <button
          className={button}
          type='button'
          onClick={() => setIsUsd(!isUsd)}
        >
          {isUsd ? 'eur' : 'usd'}
        </button>
      }
    </div>
  );
}


export default Currency;
