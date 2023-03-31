import { Button, Form, Input, InputNumber } from 'antd';
import { people03, background } from '../assets';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const UpdateProfile = ({}) => (
  <div className='flex flex-col max-w-full justify-between items-center'>
    <div className='bg-white flex flex-col justify-center items-center shadow-lg rounded-2xl sm:w-2/4 relative m-10 dark:bg-gray-500'>
      <img
        alt='profile'
        src={background}
        className='w-full mb-4 rounded-t-lg h-28'
      />
      <div className='flex flex-col items-center justify-center p-4 -mt-16'>
        <a href='#' className='relative block'>
          <img
            alt='profil'
            src={people03}
            className='mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800'
          />
        </a>
        <p className='mt-2 text-xl font-medium text-gray-800 dark:text-white'>
          Charlie
        </p>
        <p className='mb-4 text-xs text-gray-400'>Nantes</p>
        <p className='p-2 px-4 text-xs text-white bg-limeGreen rounded-full'>
          User
        </p>
        <div className='w-full p-2 mt-4 rounded-lg'>
          <div className='flex items-center justify-between text-sm text-gray-600 dark:text-gray-200 mx-5 px-10'>
            <p className='flex flex-col mr-20'>
              Posts
              <span className='font-bold text-black dark:text-white'>34</span>
            </p>
            <p className='flex flex-col mr-20'>
              Followers
              <span className='font-bold text-black dark:text-white'>455</span>
            </p>
            <p className='flex flex-col'>
              Rating
              <span className='font-bold text-black dark:text-white'>9.3</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <Form
      {...layout}
      name='nest-messages'
      onFinish={onFinish}
      style={{
        minWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      className='sm:w-2/4 mr-[6rem]'
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label='Name'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label='Email'
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label='Age'
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label='Website'>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'headline']} label='Headline'>
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type='primary' htmlType='submit' className='bg-limeGreen'>
          Update
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default UpdateProfile;
