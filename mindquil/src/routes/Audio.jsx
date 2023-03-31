import React from 'react';
import { Layout } from 'antd';
import Player from '../Podcast/Player';
import { songsdata } from '../constants';
import { useState, useRef, useEffect } from 'react';

const { Header, Content } = Layout;

const Podcast = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  return (
    <Layout id='podcast'>
      <Header className=' bg-white'>
        {' '}
        <h1 className='text-[40px] font-bold underline underline-offset-8 deco'>
          Podcast of the week
        </h1>{' '}
      </Header>
      <Content>
        <div className='flex flex-row flex-wrap justify-center items-center pt-[5rem]'>
          <audio
            src={currentSong.url}
            ref={audioElem}
            onTimeUpdate={onPlaying}
          />
          <Player
            songs={songs}
            setSongs={setSongs}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
          <Player
            songs={songs}
            setSongs={setSongs}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
          <Player
            songs={songs}
            setSongs={setSongs}
            isplaying={isplaying}
            setisplaying={setisplaying}
            audioElem={audioElem}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Podcast;
