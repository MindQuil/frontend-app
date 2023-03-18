import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import StoryCard from './StoryCard';

const UserStory = () => (
  <section
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-y-solid border-y-4  border-lime-900 rounded-3xl`}
  >
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient bottom-30' />

    <div className='w-full flex justify-between items-center md:flex-row flex-col mt-6 mb-6 relative z-[1]'>
      <h2 className={`${styles.heading2} font-extrabold text-green__gradient`}>
        Users' Story
      </h2>
      {/* <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Your Mental Health is important to us
        </p>
      </div> */}
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card) => (
        <StoryCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default UserStory;
