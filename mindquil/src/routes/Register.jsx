import { useRef, useState, useEffect } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../api/axios';
import { register } from '../style';
import styles from '../style';
import { signupImg } from '../assets';
import Login from './LogIn';

// Regex to validate inputs
const USER_REGEX = /^(?=.*[A-z][A-z0-9-_])([\s])?(?=.*[A-z][A-z0-9-_]).{4,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const REGISTER_URL = '/auth/signup';

//Register Form Page
const Register = () => {
  //states
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [sucessMsg, setSuccessMsg] = useState('');

  //Validation
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd, matchPwd]);

  //Handle Registration request
  const handleSubmit = (e) => {
    e.preventDefault();

    // if button gets enabled through hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    } else {
      api
        .post(REGISTER_URL, {
          name: `${user}`,
          email,
          password: `${pwd}`,
        })
        .then((response) => {
          console.log(response.data);
          console.log(JSON.stringify(response.data));
          console.log(JSON.stringify(response.status));
          setSuccessMsg('Registration successful.\nLog in to continue');
          setSuccess(true);

          //clear state and inputs data
          setUser('');
          setEmail('');
          setPwd('');
          setMatchPwd('');
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setErrMsg('User with this email exist\nLog in instead');
          } else {
            setErrMsg('Registration Failed');
          }
          errRef.current.focus();
        });
    }
  };

  return (
    <>
      {success ? (
        <Login successMsg={sucessMsg} />
      ) : (
        <section
          className={`flex sm:flex-row overflow-hidden sm:px-5 px-1  bg-suGreen text-white h-screen font-poppins`}
        >
          <div className='ml-[-30px] sm:flex hidden w-[50%]'>
            <img
              src={signupImg}
              alt='signUp'
              className='flex-none bg-cover w-[100%] h-[100vh]'
            />
          </div>

          <div className='flex flex-col justify-between items-center sm:ml-[-50px] sm:w-[50%] w-[100%] bg-shamrockGreen pr-0 h-[100vh]'>
            {/* Shows ErrMsg if any */}
            <p
              ref={errRef}
              className={
                errMsg
                  ? 'absolute bg-shamrockGreen text-[red] font-bold pt-3'
                  : `${register.offscreen}`
              }
              aria-live='assertive'
            >
              {errMsg}
            </p>
            <div className='font-bold h-[100vh] flex flex-col justify-center items-center'>
              <h1 className='font-bold text-white text-[30px] italic mb-8'>
                Register!
              </h1>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className='flex flex-col '>
                {/* Name Input */}
                <label htmlFor='user'>
                  Name:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validName ? `${register.valid}` : 'invisible'}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validName || !user ? 'invisible' : `${register.invalid}`
                    }
                  />
                </label>
                <input
                  type='text'
                  id='name'
                  ref={userRef}
                  autoComplete='off'
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby='usernote'
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className={`${register.inputC}`}
                />
                {/* Name Helper/ note */}
                <p
                  id='usernote'
                  className={
                    userFocus && user && !validName
                      ? `${register.info}`
                      : `${register.offscreen}`
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  At least 4 characters
                </p>

                {/* Email input */}
                <label htmlFor='email'>
                  Email:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validEmail ? `${register.valid}` : 'invisible'}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validEmail || !email ? 'invisible' : `${register.invalid}`
                    }
                  />
                </label>
                <input
                  type='email'
                  id='email'
                  ref={userRef}
                  autoComplete='off'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby='emailnote'
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className={`${register.inputC}`}
                />

                {/* Email Helper/note */}
                <p
                  id='emailnote'
                  className={
                    emailFocus && email && !validEmail
                      ? `${register.info}`
                      : `${register.offscreen}`
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Input a valid email
                </p>

                {/* Password Input */}
                <label htmlFor='password'>
                  Password:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? `${register.valid}` : 'invisible'}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validPwd || !pwd ? 'invisible' : `${register.invalid}`
                    }
                  />
                </label>
                <input
                  type='password'
                  id='password'
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby='pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className={`${register.inputC}`}
                />

                {/* Password Helper/note */}
                <p
                  id='pwdnote'
                  className={
                    pwdFocus && !validPwd
                      ? `${register.info}`
                      : `${register.offscreen}`
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />8 to 24 characters
                  <br /> Must be a combination of uppercase <br />
                  lowercase, numbers and special characters
                </p>

                {/* Password Match Confirmation Input */}
                <label htmlFor='confirm_pwd'>
                  Confirm Password:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={
                      validMatch && matchPwd ? `${register.valid}` : 'invisible'
                    }
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={
                      validMatch || !matchPwd
                        ? 'invisible'
                        : `${register.invalid}`
                    }
                  />
                </label>
                <input
                  type='password'
                  id='confirm_pwd'
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby='confirmnote'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className={`${register.inputC}`}
                />

                {/* Password Match Confirmation Helper/Note */}
                <p
                  id='confirmnote'
                  className={
                    matchFocus && !validMatch
                      ? `${register.info}`
                      : `${register.offscreen}`
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Passwords must match
                </p>

                {/* Register Button  */}
                <button
                  disabled={
                    !validName || !validEmail || !validPwd || !validMatch
                      ? true
                      : false
                  }
                  className={`${styles.button2} mt-[10px]`}
                >
                  SIGN UP
                </button>
              </form>

              {/* Direct User to Login Page */}
              <p>
                Already registered?{' '}
                <a href='login' className='hover:text-limeGreen'>
                  {' '}
                  Sign In
                </a>{' '}
                instead
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
