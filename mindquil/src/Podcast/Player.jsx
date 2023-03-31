import React, { useRef } from 'react';
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from 'react-icons/bs';
import { people02 } from '../assets';

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);

    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <div className='flex flex-col flex-wrap items-center justify-between w-fit p-4 border-solid rounded-xl border-limeGreen text-white bg-primary mb-5 mx-10'>
      <img src={people02} className='w-[200px] h-[300px]' />

      <div className='text-[16px]'>
        <p>{currentSong.title}</p>
      </div>
      <div className='w-[100%] min'>
        <div
          className='min-w-[100%] bg-yellow h-[5px] rounded-[10px] cursor-pointer'
          onClick={checkWidth}
          ref={clickRef}
        >
          <div
            className='w-0 h-[100%] bg-white rounded-[30px]'
            style={{ width: `${currentSong.progress + '%'}` }}
          ></div>
        </div>
      </div>
      <div className='text-[inherit] flex items-center'>
        <BsFillSkipStartCircleFill
          className='text-[2rem] m-4 cursor-pointer hover:text-white'
          onClick={skipBack}
        />
        {isplaying ? (
          <BsFillPauseCircleFill
            className='text-[4rem] m-4 cursor-pointer hover:text-white'
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill
            className='text-[4rem] m-4 cursor-pointer hover:text-white'
            onClick={PlayPause}
          />
        )}
        <BsFillSkipEndCircleFill
          className='text-[2rem] m-4 cursor-pointer hover:text-white'
          onClick={skiptoNext}
        />
      </div>
    </div>
  );
};

export default Player;
