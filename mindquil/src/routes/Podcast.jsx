import React from 'react';
import { Layout } from 'antd';

const { Header, Content } = Layout;

const Podcast = () => {
  return (
    <Layout id='podcast'>
      <Header style={{ padding: 0, background: 'limeGreen' }}>
        {' '}
        <h1>Podcast of the week</h1>{' '}
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          className='min-h-screen '
          style={{ padding: 24, background: 'white' }}
        >
          content
        </div>
      </Content>
    </Layout>
  );
};

export default Podcast;
