import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageSearch from '../components/HomepageSearch';
import HomepageLanguages from '../components/HomepageLanguages';
import HomepageFeatures from '../components/HomepageFeatures';

const HeroHandsSvg = require('../../static/img/hero_hands.svg').default;

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>
          <span className={styles.titlePart}>A dictionary for the </span>
          <span className={styles.titlePart}>modern developer.</span>
        </h1>
        <HomepageSearch />
        <HomepageLanguages />
      </div>
      <HeroHandsSvg className={styles.heroBackground} />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}!`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
