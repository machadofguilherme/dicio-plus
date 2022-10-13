import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Login from './pages/Login';
import AppRoute from './pages/AppRoute';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: "/app",
    element: <AppRoute />,
    errorElement: <NotFound />
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
