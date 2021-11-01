import React from 'react';
import styles from './HomepageSearch.module.css';

const SearchIcon = require('../../static/img/search.svg').default;

export default function HomepageSearch() {
  return (
    <form className={styles.homepageSearch}>
      <SearchIcon className={styles.homepageSearchIcon} aria-hidden='true' />

      <label htmlFor='search' className='visually-hidden'></label>
      <input type='search' id='search' placeholder='Search for words or concepts' />
    </form>
  );
}
