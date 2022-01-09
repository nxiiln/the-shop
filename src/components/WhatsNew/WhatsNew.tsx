import React, {useState} from 'react';
import styles from './whatsNew.module.scss';
import imgA from '../../images/whatsNewA.png';
import imgB from '../../images/whatsNewB.png';
import imgC from '../../images/whatsNewC.png';


const WhatsNew = (): JSX.Element => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.whatsNew}>
        <div className={styles.line}></div>
        <div className={styles.mainText}>
          WHATS NEW
        </div>
        <div className={styles.line}></div>

        <img
          src={imgA}
          className={styles.img}
          alt='woman in dress'
        />
        <img
          src={imgB}
          className={styles.img}
          alt='handbags'
        />
        <img
          src={imgC}
          className={styles.img}
          alt='man in a jacket'
        />

        <div className={styles.wrapperText}>
          <div className={styles.wrapperDescription}>
            <span className={styles.description}>
              BLACK & WHITE
            </span>
            <span className={styles.springCollection}>
              spring collection 2022
            </span>
          </div>

          <div className={styles.wrapperDescription}>
            <span className={styles.description}>
              COLOR SUMMER
            </span>
            <span className={styles.springCollection}>
              spring collection 2022
            </span>
          </div>

          <div className={styles.wrapperDescription}>
            <span className={styles.description}>
              VINTAGE FOR HIM
            </span>
            <span className={styles.springCollection}>
              spring collection 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default WhatsNew;
