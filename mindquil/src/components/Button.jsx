import React from 'react';
import styles from '../style';

const Button = ({ style, content, use }) => {
  if (content === 'Sign Up') {
    return (
      <a href={`#${use}`}>
        <button type='button' className={`${style} ${styles.button}`}>
          Sign&nbsp;Up
        </button>
      </a>
    );
  }
  return (
    <a href={`#${use}`}>
      <button type='button' className={`${style} ${styles.button}`}>
        {content}
      </button>
    </a>
  );
};

export default Button;
