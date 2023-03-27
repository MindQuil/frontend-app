import React, { useEffect, useState } from 'react';
import { register } from '../style';
import { signupImg } from '../assets';
import styles from '../style';

const Login = ({ successMsg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showMsg, setShowMsg] = useState(true);

  //TO-DO: Will replace with axios.api tomorrow
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Email: ${email}, Password: ${password}, Remember Me: ${rememberMe}`
    );
  };

  // Clear successMsg if true after 6 secs
  useEffect(() => {
    const Timeout = setTimeout(() => {
      setShowMsg(false);
    }, 6000);

    return () => {
      clearTimeout(Timeout);
    };
  }, []);

  return (
    <section
      className={`flex sm:flex-row overflow-hidden sm:px-5 px-1  bg-suGreen text-white h-screen`}
    >
      <div className='ml-[-30px] sm:flex hidden w-[50%]'>
        <img
          src={signupImg}
          alt='signUp'
          className='flex-none bg-cover w-[100%] h-[100vh]'
        />
      </div>
      <div className='flex flex-col justify-between items-center sm:ml-[-50px] sm:w-[50%] w-[100%] bg-shamrockGreen pr-0 h-[100vh]'>
        <div
          className={
            successMsg
              ? 'bg-shamrockGreen text-white font-bold pt-2'
              : `${register.offscreen}`
          }
          aria-live='assertive'
        >
          {showMsg && <p>{successMsg}</p>}
        </div>

        <div className='font-bold h-[100vh] flex flex-col justify-center items-center'>
          <h1 className='font-bold text-white text-[30px] italic mb-8'>
            Welcome Back!
          </h1>

          {/* Login Form */}

          <form onSubmit={handleSubmit} className='flex flex-col'>
            {/* Email input */}
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              autoComplete='off'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className={`${register.inputC}`}
            />
            {/* Password input */}
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className={`${register.inputC}`}
            />

            {/* Remember User credential */}
            <div className='flex items-center mb-4'>
              <input
                id='rememberMe'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='mr-2 leading-tight'
              />
              <label htmlFor='rememberMe' className='font-300'>
                Remember me
              </label>
            </div>

            {/* Button */}
            <button type='submit' className={`${styles.button2} mt-[10px]`}>
              Sign In
            </button>
          </form>
          <div className='text-right'>
            <a href='#' className=' hover:underline hover:text-limeGreen'>
              Forgot your password?
            </a>
          </div>

          <div className='text-center'>
            <p className='mt-8'>
              -----------------&nbsp;or&nbsp;-----------------{' '}
            </p>
            <p className='mt-8'>
              Create{' '}
              <a href='signUp' className='hover:text-limeGreen hover:underline'>
                new account
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
