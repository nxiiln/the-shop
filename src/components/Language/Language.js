import React, {useState} from 'react';
import styles from './language.module.scss';


const Language = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  let dropdown = styles.dropdown;
  let buttonMain = styles.buttonMain;
  let button = styles.button;
  
  if (dropdownOpen) {
    dropdown += ` ${styles.dropdownOpen}`
    buttonMain += ` ${styles.buttonOpen}`
    button += ` ${styles.buttonOpen}`
  }

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
        {isEnglish ? 'english' : 'spanish'}
      </button>
      <div className={styles.triangle}></div>

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


export default Language;
