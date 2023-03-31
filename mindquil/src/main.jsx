import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  About,
  App,
  Register,
  Error,
  Login,
  MindQuil,
  Podcast,
  Audio,
  UpdateProfile,
  Session,
} from './routes';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './api/ProtectedRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: 'home',
    element: <App />,
  },

  {
    path: 'about',
    element: <About />,
  },

  {
    path: 'signUp',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: 'mindQuil',
        element: <MindQuil />,
        children: [
          {
            index: true,
            path: 'podcast',
            element: <Audio />,
          },
          {
            index: true,
            path: 'updateProfile',
            element: <UpdateProfile />,
          },
          {
            index: true,
            path: 'bookSession',
            element: <Session />,
          },
          {
            index: true,
            path: 'group',
            element: <Error />,
          },
          {
            index: true,
            path: 'chat',
            element: <Error />,
          },
          {
            index: true,
            path: 'feeds',
            element: <Error />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
