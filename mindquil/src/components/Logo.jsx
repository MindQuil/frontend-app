import React from 'react';
import { logoX } from '../assets';

const Logo = () => (
  <div className='w-full flex py-12 justify-between items-center pb-[20px] bg-primary'>
    <a href='#home'>
      <img
        src={logoX}
        alt='mindquil'
        className='w-[200px] h-[45px] cursor-pointer'
        id='home'
      />
    </a>
  </div>
);

export default Logo;
