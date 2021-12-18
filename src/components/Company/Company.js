import React, {useState} from 'react';
import styles from './company.module.scss';


const Company = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const list = ['about us', 'contact', 'store location'];

  let dropdown = styles.dropdown;
  dropdownOpen && (dropdown += ` ${styles.dropdownOpen}`);

  let buttonMain = styles.buttonMain;
  dropdownOpen && (buttonMain += ` ${styles.buttonOpen}`);

  let button = styles.button;
  dropdownOpen && (button += ` ${styles.buttonOpen}`);

  return(
    <div
      className={dropdown}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={() => setDropdownOpen(true)}
      >
        company &#9660;
      </button>

      {dropdownOpen && list.map(item => {
        return(
          <button
            className={button}
            type='button'
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}


export default Company;
