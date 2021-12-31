import React, {useState, useEffect} from 'react';
import styles from './banner.module.scss';
import bannerA from '../../images/bannerA.png';
import bannerB from '../../images/bannerB.png';
import bannerC from '../../images/bannerC.png';


const Banner = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide === 1) setSlide(2);
      if (slide === 2) setSlide(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [slide]);

  let indicatorA = styles.indicatorA;
  let indicatorB = styles.indicatorB;

  if (slide === 1) {
    indicatorA += ` ${styles.indicatorActive}`;
    indicatorB += ` ${styles.indicatorNotActive}`;
  } else {
    indicatorA += ` ${styles.indicatorNotActive}`;
    indicatorB += ` ${styles.indicatorActive}`;
  }

  return(
    <div className={styles.banner}>
      {slide === 1 && 
        <div  className={styles.wrapperSlideA}>
          <img 
            src={bannerA}
            className={styles.bannerA}
            alt='woman with accessories'
          />
          <div className={styles.textBlockA}>
            <span
              className={styles.descriptionA}
            >
              new accessories collection
            </span>
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
              className={styles.buttonBannerA}
              type='button'
            >
              shop women’s accessories
            </button>
          </div>
        </div>
      }

      {slide === 2 &&
        <div className={styles.wrapperSlideB}>
          <div className={styles.wrapperBannerB}>
            <img
              src={bannerB}
              className={styles.bannerB}
              alt='woman on sand'
            />
            <div className={styles.textBlockB}>
              <div className={styles.descriptionB}>
                desert lover
              </div>
              <div className={styles.springCollection}>
                spring collection 2022
              </div>
            </div>
          </div>

          <div className={styles.wrapperBannerC}>
            <div className={styles.textBlockC}>
              <span>sale</span>
              <span>up to 70%</span>
            </div>
            <button 
              className={styles.shopNow}
              type='button'
            >
              shop now
            </button>
            <div className={styles.useCode}>
              <span>use code: </span>
              <span>sweetsale</span>
            </div>
            <img
              src={bannerC}
              className={styles.bannerC}
              alt='smiling woman'
            />
          </div>
        </div>
      }

      <div
        className={indicatorA}
        onClick={() => setSlide(1)}
      >
      </div>
      <div
        className={indicatorB}
        onClick={() => setSlide(2)}
      >
      </div>
    </div>
  );
}


export default Banner;
