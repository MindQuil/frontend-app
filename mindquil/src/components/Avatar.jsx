import React from 'react';
import { user } from '../assets';

const Blank = () => (
  <div
    id='userStory'
    className='bg-white flex justify-center items-center z-[5]'
  >
    <img src={user} alt='user' className='relative top-[28px] ' />
  </div>
);

export default Blank;
