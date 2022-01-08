import React, {useState} from 'react';
import styles from './currency.module.scss';


const Currency = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [isUsd, setIsUsd] = useState<boolean>(true);

  let dropdown: string = styles.dropdown;
  let buttonMain: string = styles.buttonMain;
  let button: string = styles.button;
  
  if (open) {
    dropdown += ` ${styles.open}`;
    buttonMain += ` ${styles.buttonOpen}`;
    button += ` ${styles.buttonOpen}`;
  }

  return(
    <div
      className={dropdown}
      onClick={(): void => setOpen(false)}
      onMouseLeave={(): void => setOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={(): void => setOpen(true)}
      >
        {isUsd ? 'usd' : 'eur'}
      </button>
      <div className={styles.triangle}></div>

      {open &&
        <button
          className={button}
          type='button'
          onClick={(): void => setIsUsd(!isUsd)}
        >
          {isUsd ? 'eur' : 'usd'}
        </button>
      }
    </div>
  );
}


export default Currency;
