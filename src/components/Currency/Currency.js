import React, {useState} from 'react';
import styles from './currency.module.scss';


const Currency = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isUsd, setIsUsd] = useState(true);

  let dropdown = styles.dropdown;
  dropdownOpen && (dropdown += ` ${styles.dropdownOpen}`);

  let buttonMain = styles.buttonMain;
  dropdownOpen && (buttonMain += ` ${styles.buttonOpen}`);

  let button = styles.button;
  dropdownOpen && (button += ` ${styles.buttonOpen}`);

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
        {isUsd ? 'usd' : 'eur'} &#9660;
      </button>

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
