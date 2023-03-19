import React from 'react';
import Button from './Button';
import styles from '../style';

const content = 'Sign Up';
const use = 'newsletter';
const style = 'ml-[20px]';
const emailMask = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';

const Footer = () => (
  <section
    className={`bg-primary w-full flex sm:flex-row flex-col justify-center items-center${styles.flexCenter} sm:h-64 h-80`}
  >
    <div>
      <h3 className={`flex text-white ${styles.newsletter}`}>
        Do&nbsp;you&nbsp;prioritize your&nbsp;mental&nbsp;health
        like&nbsp;we&nbsp;do?
      </h3>
      <p className='text-white font-extralight text-[15px] py-0'>
        Sign Up to our newsletter and get unlimited access to helpful resources
      </p>
    </div>
    <div className='flex flex-col'>
      <div className='flex flex-row mx-2 justify-between items-start'>
        <form className='my-4 ml-4'>
          <input
            className=' h-[50px] w-[300px] px-6'
            type='email'
            placeholder=' e.g. youremail@gmail.com'
            mask={emailMask}
            maxLength={55}
            mental
          ></input>
        </form>
        <Button content={content} use={use} style={style} />
      </div>
      <div>
        <p className='text-white text-[10px] ml-6'>
          We care about <span className='font-extrabold'>YOU</span> and your
          mental health. Read more about our{' '}
          <a
            href='#services'
            className='cursor-pointer text-limeGreen underline'
          >
            Services
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
