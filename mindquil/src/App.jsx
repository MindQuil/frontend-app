import React from 'react';
import styles from './style';
import { Navbar, Hero, UserStory, Blank, Newsletter } from './components';

const App = () => (
  <div className={`w-full overflow-hidden font-poppins`}>
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

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Blank />
        <UserStory />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Newsletter />
      </div>
    </div>
  </div>
);

export default App;
