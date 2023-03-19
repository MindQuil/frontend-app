import React from 'react';
import styles from './style';
import { Navbar, Hero, UserStory, Services, Blank, Logo } from './components';

const App = () => (
  <div className={`w-full overflow-hidden`}>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-offwhite ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Blank />
        <UserStory />
        <Services />
      </div>
    </div>
  </div>
);

export default App;
