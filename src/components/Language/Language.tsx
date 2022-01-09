import React, {useState} from 'react';
import styles from './language.module.scss';


const Language = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [isEnglish, setIsEnglish] = useState<boolean>(true);

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
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(false)}
    >
      <button
        className={buttonMain}
        type='button'
        onMouseEnter={() => setOpen(true)}
      >
        {isEnglish ? 'english' : 'spanish'}
      </button>
      <div className={styles.triangle}></div>

      {open && 
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
