import React, {useState} from 'react';
import styles from './dropdownCompany.module.scss';


const DropdownCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const renderDropdown = () => {
    const list = ['about us', 'contact', 'store location'];
    return list.map(item => {
      return(
        <div key={item} className={styles.item}>
          {item}
        </div>
      );
    });
  }

  return(
    <div
      className={styles.dropdown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.itemMain}>company &#9660;</div>
      {isOpen && renderDropdown()}
    </div>
  );
}


export default DropdownCompany;