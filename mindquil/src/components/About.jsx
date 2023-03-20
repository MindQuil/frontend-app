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
      className={`bg-limeGreen sm:h-[83vh] sm:flex-row flex-col-reverse py-6 ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth} justify-evenly flex-1 sm:mr-6`}>
        <h1 className='sm:flex hidden text-white ml-0 text-[60px] justify-start font-extrabold'>
          About Us
        </h1>
      </div>
      <div className='flex flex-col justify-between sm:max-w-[50%] max-w-[90%] mr-2'>
        {aboutUs.map((about) => (
          <p className='text-primary mb-10 text-[18px]'>
            <span className='font-extrabold'>Mindquil </span>
            {about.content}
          </p>
        ))}
      </div>
      <div className='flex items-center'>
        {' '}
        <img
          src={aboutImg}
          alt='aboutImg'
          className='min-w-[100%] sm:h-[100%] h-[500px] sm:mt-auto mt-[-80px]'
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
