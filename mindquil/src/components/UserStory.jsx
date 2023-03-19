import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import StoryCard from './StoryCard';

const UserStory = () => (
  <section
    className={`bg-white sm:py-6 py-6 ${styles.flexCenter} flex-col  border-t-solid border-t-[4px] rounded-t-3xl shadow-2xl mb-6 px-2 h-auto w-auto`}
  >
    <div className='absolute z-[0] w-[60%] h-[50%] rounded-full white__gradient bottom-30' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col md:mt-3 mt-3 mb-6 relative z-[1]'>
      <h2
        className={`${styles.heading2} font-extrabold text-green__gradient text-limeGreen`}
      >
        What Users Say
      </h2>
      {/* <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Your Mental Health is important to us
        </p>
      </div> */}
    </div>

    <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <StoryCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default UserStory;
