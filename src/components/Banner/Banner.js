import React, {useState, useEffect} from 'react';
import styles from './banner.module.scss';
import bannerA from '../../images/bannerA.png';
import bannerB from '../../images/bannerB.png';
import bannerC from '../../images/bannerC.png';


const Banner = () => {
  const [banner, setBanner] = useState(1);

  let indicatorA = styles.indicatorA;
  let indicatorB = styles.indicatorB;

  if (banner === 1) {
    indicatorA += ` ${styles.indicatorActive}`;
    indicatorB += ` ${styles.indicatorNotActive}`;
  } else {
    indicatorA += ` ${styles.indicatorNotActive}`;
    indicatorB += ` ${styles.indicatorActive}`;
  }

  return(
    <div className={styles.banner}>
      {banner === 1 && 
      <div>
        <img 
          src={bannerA}
          className={styles.bannerA}
          alt='women with accessories'
        />
        <div className={styles.textBlockA}>
          <p
            className={styles.descriptionA}
          >
            new accessories collection
          </p>
          <div
            className={styles.springEssentials}
          >
            <span className={styles.word}>
              <span className={styles.letter}>S</span>PRING
            </span>
            <span className={styles.word}>
              <span className={styles.letter}> E</span>SSENTIALS
            </span>
          </div>
          <button
            className={styles.button}
            type='button'
          >
            shop women’s accessories
          </button>
        </div>
      </div>
      }
      {banner === 2 &&
        <div className={styles.wrapperBannerB}>
          <img
            src={bannerB}
            className={styles.bannerB}
            alt='women on sand'
          />
          <div className={styles.descriptionB}>
            desert lover
          </div>
        </div>
      }
      <div
        className={indicatorA}
        onClick={() => setBanner(1)}
      >
      </div>
      <div
        className={indicatorB}
        onClick={() => setBanner(2)}
      >
      </div>
    </div>
  );
}


export default Banner;
