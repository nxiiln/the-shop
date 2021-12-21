import React, {useState} from 'react';
import styles from './company.module.scss';


const Company = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const list = ['about us', 'contact', 'store location'];

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
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={() => setDropdownOpen(true)}
      >
        company
      </button>
      <div className={styles.triangle}></div>

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
