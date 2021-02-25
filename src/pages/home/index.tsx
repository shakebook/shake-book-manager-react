import * as React from 'react';
import styles from './index.module.css';
import SiderBarMenus from './components/sidebar_menus';
import Header from '@/pages/home/header';
import Content from './components/content';
import {
  BrowserRouter as Router,
} from "react-router-dom";

declare global {
  interface Window {
    globalHistory: any
  }
}

const Home: React.FC = (props: any) => {
  window.globalHistory = props.history;
  return <div className={styles.background}>
    <div className={styles.header}>
      <Header />
    </div>
    <Router>
      <div className={styles.container}>
        <div className={styles.menus}>
          <SiderBarMenus />
        </div>
        <div className={styles.content}>
          <div className={styles.contentBody}>
            <Content />
          </div>
        </div>
      </div>
    </Router>
  </div>
}

export default Home
