import React from 'react';

const Button = ({ styles }) => (
  <a href='#signUp'>
    <button
      type='button'
      className={`${styles} py-2  px-6 mt-4 mb-6  font-poppins font-medium text-[18px] text-white bg-limeGreen rounded-[20px] outline-none hover:opacity-80 hover:font-medium`}
    >
      Get Immediate Help
    </button>
  </a>
);

export default Button;
