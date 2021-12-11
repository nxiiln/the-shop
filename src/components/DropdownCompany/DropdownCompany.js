import React, {useState} from 'react';
import styles from './dropdownCompany.module.scss';


const DropdownCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = ['about us', 'contact', 'store location'];

  let style = styles.dropdown;
  isOpen && (style += ` ${styles.isOpen}`);

  return(
    <div
      className={style}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={styles.itemMain}
        onMouseEnter={() => setIsOpen(true)}
      >
        company &#9660;
      </div>

      {isOpen && list.map(item => {
        return(
          <div key={item} className={styles.item}>
            {item}
          </div>
        );
      })}
    </div>
  );
}


export default DropdownCompany;