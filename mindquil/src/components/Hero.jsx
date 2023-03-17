import React from 'react';
import { mental } from '../assets';
import styles from '../style';
import Button from './Button';

const Hero = () => (
  <section
    id='home'
    className={`flex sm:flex-row flex-col sm:px-5 px-1 sm:mb-10 mb-0`}
  >
    <div
      className={`flex flex-2 shrink-[2] justify-center items-start  flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className=' items-center w-full'>
        <h1 className='flex-1 font-poppins font-extrabold sm:text-[50px] text-[40px] text-white leading-[60px]'>
          Prioritize Your <br className='sm:block hidden' />{' '}
          <span className='text-limeGreen underline  underline-offset-[12px] decoration-[3px]'>
            Mental&nbsp;Heal
          </span>
          <span className='hidden'>&nbsp;</span>
          <span className='text-limeGreen'>th </span>
          <span>Today!</span>
        </h1>
        <h5 className={`${styles.paragraph} py-12 sm:pr-40 pr-20`}>
          <span className='font-bold text-white'>MindQuil</span> is a
          user-friendly web app, designed to help people manage anxiety, stress,
          and depression.
        </h5>
        <div className={`sm:flex hidden ${styles.flexButton}`}>
          <Button />
        </div>
      </div>
    </div>
    <div className={`${styles.flexCenter}`}>
      <img
        src={mental}
        alt='mental'
        className='flex-1 bg-cover w-[50vw] shrink-0'
      />
    </div>
    <div className='sm:flex hidden absolute left-[50%] translate-x-[-50%] bottom-5 '>
      <a href='userStory'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-8 h-8 text-white animate-bounce cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </a>
    </div>
    <div
      className={`sm:hidden flex absolute left-[32%] translate-x-[-50%] bottom-[-20%] ${styles.flexCenter} animate-bounce z-10`}
    >
      <Button />
    </div>
  </section>
);

export default Hero;
