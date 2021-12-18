import React, {useState} from 'react';
import styles from './search.module.scss';
import searchSymbol from '../../images/searchSymbol.png';


const Search = () => {
  const [focus, setFocus] = useState(false);

  let searchGroup = styles.searchGroup;
  focus && (searchGroup += ` ${styles.searchGroupOnFocus}`);

  let search = styles.search;
  focus && (search += ` ${styles.searchOnFocus}`);
  
  return(
    <div className={searchGroup}>
      <div className={styles.line}></div>
      <img
        src={searchSymbol}
      />
      <input
        className={search}
        type='search'
        placeholder='SEARCH'
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      >
      </input>
    </div>
  );
}


export default Search;
