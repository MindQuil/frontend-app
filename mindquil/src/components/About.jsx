import React from 'react';
import styles from '../style';
import Navbar from './Navbar';
import { aboutUs } from '../constants';
import { aboutImg } from '../assets';

const About = () => (
  <section className={`w-full overflow-hidden font-poppins`} id='about'>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div
      className={`bg-limeGreen sm:h-[83vh] sm:flex-row flex-col-reverse py-6 ${styles.paddingX} flex justify-start items-center`}
    >
      <div className={`${styles.boxWidth} justify-between flex-1 m-[-5px] p-0`}>
        <h1 className='sm:flex hidden text-white ml-0 text-[60px] justify-center items-center font-extrabold write-mode transform rotate-180 mt-[-32px]'>
          About&nbsp;Us
        </h1>
      </div>
      <div className='flex-col justify-between sm:max-w-[42vw] max-w-[90%] mr-2 shrink-1 sm:pl-0'>
        {aboutUs.map((about) => (
          <p className={`text-primary mb-8 text-[20px] sm:leading-7`}>
            <span className='font-extrabold'>Mindquil </span>
            {about.content}
          </p>
        ))}
      </div>
      <div className='flex sm:mr-[-120px] mr-[10px] ml-[50px] \'>
        {' '}
        <img
          src={aboutImg}
          alt='aboutImg'
          className='min-w-[100%] sm:h-[90vh] h-[60vh] sm:mt-auto mt-[-70px]'
        />
      </div>

      <div className={`${styles.boxWidth} justify-evenly flex-1 sm:mr-6`}>
        <h1 className='sm:hidden flex text-white ml-2 text-[60px] justify-center font-extrabold'>
          About Us
        </h1>
      </div>
    </div>
  </section>
);
export default About;
