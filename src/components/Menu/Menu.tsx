import React, {useState} from 'react';
import styles from './menu.module.scss';
import imageMenuInner from '../../images/imageMenuInner.png';


const Menu = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  let menu: string = styles.menu;
  let mainMenu: string = styles.mainMenu;

  if (menuOpen) {
    menu += ` ${styles.menuHover}`;
    mainMenu += ` ${styles.mainMenuOpen}`;
  }

  return(
    <div
      className={menu}
      onMouseLeave={(): void => setMenuOpen(false)}
    >
      <nav>
        <ul className={mainMenu}>
          <li
            onMouseEnter={(): void => setMenuOpen(true)}
          >
            women
          </li>
          <li>men</li>
          <li>kids</li>
          <li>accessories</li>
          <li>whats new</li>
          <li>brands</li>
          <li>sale</li>
          <li>blog</li>
        </ul>
      </nav>

      {menuOpen &&
        <div
          className={styles.menuOpen}
        >
          <div className={styles.menuInnerWrapper}>
            <ul className={styles.menuInner}>
              <li>bottoms</li>
              <li>Jeans</li>
              <li>Pants</li>
              <li>Shorts</li>
              <li>Skirts</li>
              <li>Dresses</li>
            </ul>
            <ul className={styles.menuInner}>
              <li>tops</li>
              <li>Jackets & Coats</li>
              <li>Shirts</li>
              <li>T-shirts</li>
              <li>Knitwear</li>
              <li>Sweats</li>
            </ul>
            <ul className={styles.menuInner}>
              <li>shoes & more</li>
              <li>Shoes</li>
              <li>Underwear</li>
              <li>Accessories</li>
              <li>Collectables</li>
              <li>Eyewear</li>
            </ul>
            <ul className={styles.menuInner}>
              <li>collections</li>
              <li>New arrivals</li>
              <li>Urban Style</li>
              <li>Raw Correct</li>
            </ul>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src={imageMenuInner}
              className={styles.imageMenuInner}
              alt='women in denim'
            />
            <div className={styles.message}>
              <p className={styles.text}>
                new denim collection now
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}


export default Menu;
