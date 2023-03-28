import React from 'react';
import ReactDOM from 'react-dom/client';
import { About, App, Register, Error, Login, MindQuil } from './routes';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    path: 'mindQuil',
    element: <MindQuil />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
