import React from 'react';
import styles from '../style';
import { useState } from 'react';

import { menuOpen, logoX, menuClose } from '../assets';
import { navButtons } from '../constants';

// Navigation bar

const Navbar = ({ state }) => {
  const [active, setActive] = useState(state);
  const [toggle, setToggle] = useState(false);
  // Desktop Nav bar
  return (
    <nav className='sticky top-0 z-50 w-full flex py-12 justify-between items-center pb-[20px]'>
      <a href='home'>
        <img
          src={logoX}
          alt='mindquil'
          className='w-[200px] h-[45px] cursor-pointer'
          id='home'
        />
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {navButtons.map((nav, index) => (
          <button
            type='button'
            className={`font-poppins font-normal cursor-pointer text-[20px] ${
              active === nav.title
                ? 'py-1 px-4 text-white bg-limeGreen rounded-[20px] outline-none hover:font-medium'
                : `text-white link link-underline link-underline-green`
            }
            ${index === navButtons.length - 1 ? 'mr-0 ml-6' : 'mr-6 ml-6'}`}
          >
            <li key={nav.id} onClick={() => setActive(nav.title)}>
              <a href={`${nav.id}`}>{nav.title}</a>{' '}
            </li>
          </button>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? menuClose : menuOpen}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl sidebar`}
        >
          <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            {navButtons.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title
                    ? 'text-white bg-limeGreen px-4 rounded-[20px]'
                    : 'text-white link link-underline link-underline-green px-4 hover_effect'
                } ${index === navButtons.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
