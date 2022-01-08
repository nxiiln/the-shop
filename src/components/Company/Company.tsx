import React, {useState} from 'react';
import styles from './company.module.scss';


const Company = (): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const list: string[] = ['about us', 'contact', 'store location'];

  let dropdown: string = styles.dropdown;
  let buttonMain: string = styles.buttonMain;
  let button: string = styles.button;
  
  if (dropdownOpen) {
    dropdown += ` ${styles.dropdownOpen}`;
    buttonMain += ` ${styles.buttonOpen}`;
    button += ` ${styles.buttonOpen}`;
  }

  return(
    <div
      className={dropdown}
      onMouseLeave={(): void => setDropdownOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={(): void => setDropdownOpen(true)}
      >
        company
      </button>
      <div className={styles.triangle}></div>

      {dropdownOpen && list.map((item: string): JSX.Element => {
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
