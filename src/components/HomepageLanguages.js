import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageLanguages.module.css';

const LanguageList = require('../_languages_.json');

const Language = (lang) => {
  const imgPath = require(`../../assets/languages/${lang.path}.png`).default;
  return (
    <div className={clsx('col col--3')} key={lang.path}>
      <div className={styles.languageItem} style={{ backgroundColor: lang.color }}>
        <div className={styles.languageImage}>
          <img src={imgPath} />
        </div>
        <div className={styles.languageInfo}>
          <div className='meta'>
            <h3>{lang.label}
            </h3>
            <p>{lang.defs}+ definitions</p>
          </div>
          <Link to={`/docs/${lang.path}/intro`}>See All &raquo;</Link>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className={clsx(styles.homepageLanguages, 'text--left')}>
      <div className={styles.flex}>
        <h2 className={styles.flexLeft}>
          Programming Languages
        </h2>
        <div className={clsx(styles.flexRight, styles.homepageLanguageLink)}>
          <Link to='docs/what-is-devtionary'>See All &raquo;</Link>
        </div>
      </div>
      <div className='row'>
        {LanguageList.map(Language)}
      </div>
    </div>
  );
};
