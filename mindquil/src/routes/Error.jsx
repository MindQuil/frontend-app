import React from 'react';
import { ErrorImg } from '../assets';
import { Button } from '../components';

const content = 'Go Back Home';

const Error = () => (
  <section className='relative sm:h-screen bg-white'>
    <div className='container z-10 flex items-center justify-between h-screen px-6 pt-32 mx-auto md:pt-0'>
      <div className='container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row'>
        <div className='w-full mb-16 text-center md:mb-12 lg:text-left'>
          <h1 className='mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left lg:text-8xl md:mt-0'>
            Sorry, this page isn&#x27;t available
          </h1>
          <Button content={content} use='home' />
        </div>
        <div className='relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl'>
          <img src={ErrorImg} />
        </div>
      </div>
    </div>
  </section>
);

export default Error;
