import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageLanguages.module.css';

const LanguageList = [
  {
    label: 'JavaScript',
    path: 'javascript',
    icon: 'javascript.png',
    defs: 4,
    color: '#FFF3A7',
  },
  {
    label: 'Clojure',
    path: 'clojure',
    icon: 'clojure.png',
    defs: 3,
    color: '#A6E16E',
  },
];

function Language(lang) {
  return (
    <div className={clsx('col col--3')} key={lang.path}>
      <div className={styles.languageItem} style={{ backgroundColor: lang.color }}>
        <div className={styles.languageImage}>
          <img src={`../../static/img/languages/${lang.icon}`} />
        </div>
        <div className={styles.languageInfo}>
          <div className='meta'>
            <h3>{lang.label}</h3>
            <p>{lang.defs}+ definitions</p>
          </div>
          <Link to={`/docs/${lang.path}/intro`}>See All &raquo;</Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageLanguages() {
  return (
    <div className={clsx(styles.homepageLanguages, 'text--left')}>
      <div className='row'>
        <div className='col'>
          <h2>Programming Languages</h2>
        </div>
        <div className={clsx('col text--right', styles.homepageLanguageLink)}>
          <Link to='docs/intro'>See All &raquo;</Link>
        </div>
      </div>
      <div className='row'>{LanguageList.map(Language)}</div>
    </div>
  );
}
