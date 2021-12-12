import React, {useState} from 'react';
import styles from './dropdownLanguage.module.scss';


const DropdownLanguage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

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
      onClick={() => setDropdownOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={() => setDropdownOpen(true)}
      >
        {isEnglish ? 'english' : 'spanish'} &#9660;
      </button>

      {dropdownOpen && 
        <button
          className={button}
          type='button'
          onClick={() => setIsEnglish(!isEnglish)}
        >
          {isEnglish ? 'spanish' : 'english'}
        </button>
      }
    </div>
  );
}


export default DropdownLanguage;
