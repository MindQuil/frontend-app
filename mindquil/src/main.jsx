import React from 'react';
import ReactDOM from 'react-dom/client';
import { About, App } from './routes';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: ('/', 'home'),
    element: <App />,
  },
  {
    path: 'about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
