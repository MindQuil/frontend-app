import React from 'react';
import { session } from '../constants';
import styles from '../style';
import { sessionCard } from '../components';

const Session = () => {
  return (
    // <section
    //   className={`bg-white sm:py-6 py-6 ${styles.flexCenter} flex-col  border-t-solid border-t-[4px] rounded-t-3xl shadow-2xl mb-6 px-2 h-auto w-auto`}
    // >
    <div clasName='p-4 bg-white shadow-lg rounded-2xl w-80 dark:bg-gray-800'>
      <div clasName='flex flex-row items-start gap-4'>
        {session.map((card) => (
          <sessionCard key={card.id} {...card} />
        ))}
      </div>
    </div>
    // </section>
  );
};

export default Session;
