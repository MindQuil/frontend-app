import React from 'react';
import { quotes } from '../assets';

const StoryCard = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-5 py-6 rounded-[30px]  max-w-[320px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card shadow-md'>
    <img
      src={quotes}
      alt='quotes'
      className='w-[68.6px] h-[50px] object-contain text-lime-900'
    />
    <p className='font-poppins font-normal text-[15px] leading-[32.4px] text-black my-5'>
      {content}
    </p>

    <div className='flex flex-row'>
      <img src={img} alt={name} className='w-[58px] h-[58px] rounded-full' />
      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[22px]'>
          {name}
        </h4>
        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default StoryCard;
