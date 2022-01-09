import React, {useState} from 'react';
import styles from './search.module.scss';
import searchSymbol from '../../images/searchSymbol.png';


const Search = (): JSX.Element => {
  const [focus, setFocus] = useState<boolean>(false);

  let searchGroup: string = styles.searchGroup;
  focus && (searchGroup += ` ${styles.searchGroupOnFocus}`);

  let search: string = styles.search;
  focus && (search += ` ${styles.searchOnFocus}`);
  
  return(
    <div className={searchGroup}>
      <div className={styles.line}></div>
      <img
        src={searchSymbol}
        alt='searchSymbol'
      />
      <input
        className={search}
        type='search'
        placeholder='SEARCH'
        onFocus={(): void => setFocus(true)}
        onBlur={(): void => setFocus(false)}
      >
      </input>
    </div>
  );
}


export default Search;
