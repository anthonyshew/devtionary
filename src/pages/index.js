import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageSearch from '../components/HomepageSearch';
import HomepageLanguages from '../components/HomepageLanguages';

const HomePage = () => {
  return (
    <div className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>
          <span className={styles.titlePart}>A dictionary for today's developer.</span>
        </h1>
        <HomepageSearch />
        <HomepageLanguages />
      </div>
    </div>
  );
};

export default () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout className="homePage" title={`Hello from ${siteConfig.title}!`} description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.backgroundDimmer} />
        <HomePage />
      </main>
    </Layout>
  );
};
