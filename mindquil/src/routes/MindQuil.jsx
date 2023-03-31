import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeFilled,
  CalendarFilled,
  AudioFilled,
  TeamOutlined,
  MessageFilled,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import { people03 } from '../assets';
import Podcast from './Podcast';
const { Sider } = Layout;

const MindQuil = ({ user }) => {
  const navigate = useNavigate();
  const buttonName = ['Home', 'Session', 'Podcasts', 'Groups', 'Messages'];
  const navpages = ['feeds', 'bookSession', 'podcast', 'group', 'chats'];
  const signout = () => {
    localStorage.clear();
    navigate('/login');
  };
  let i = 0;
  return (
    <>
      <Layout>
        <Sider
          className='h-screen fixed left-0 top-0 bottom-0'
          breakpoint='lg'
          collapsedWidth='0'
        >
          <div className='rounded-br-[2rem]'>
            <div className='logo'></div>
          </div>
          <div
            className='bg-limeGreen  overflow-hidden
            min-h-screen  pt-[2rem] leading-[10rem]'
          >
            {' '}
            <a href='/mindQuil/updateProfile' className='relative block'>
              <img
                alt='profil'
                src={people03 || null}
                className='mx-auto object-cover rounded-full h-16 w-16 mb-[2rem]'
              />
              <span className='absolute w-3 h-3 transform -translate-x-1/2 bg-green-500 border-2 border-white rounded-full left-1/2 -bottom-2'></span>
            </a>
            <a href={navpages[i++]}>
              <Menu
                theme='light'
                className='bg-limeGreen font-bold text-[1.2rem]'
                mode='inline'
                defaultSelectedKeys={['0']}
                items={[
                  HomeFilled,
                  CalendarFilled,
                  AudioFilled,
                  TeamOutlined,
                  MessageFilled,
                ].map((icon, index) => ({
                  key: String(index),
                  icon: React.createElement(icon),
                  label: `${buttonName[index]}`,
                }))}
              />
            </a>
          </div>
        </Sider>
        <div
          id='detail'
          className='min-h-screen sm:min-w-[84%] w-[100vw]'
          style={{ padding: 24, background: 'white' }}
        >
          {/* Render the child component here */}
          <Outlet />
        </div>

        {/* <Layout>
          <Header className=' flex justify-center bg-limeGreen'>
            {' '}
            <h1>Hey Dear</h1>{' '}
          </Header>
          <Content
            style={{
              margin: '24px 16px 0',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 500,
                background: 'white',
              }}
            >
              content goes here
            </div>
          </Content>
        </Layout> */}
      </Layout>
    </>
  );
};

export default MindQuil;
